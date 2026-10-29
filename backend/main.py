import cv2
import os
import glob
import time
from fastapi import FastAPI
from fastapi.responses import StreamingResponse
from fastapi.middleware.cors import CORSMiddleware
from ultralytics import YOLO

# 1. Initialize FastAPI
app = FastAPI(title="RETINA Vision API")

# 2. Enable CORS for Next.js frontend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"], # Change to your Vercel URL later
    allow_methods=["*"],
    allow_headers=["*"],
)

# 3. Load the trained model (Ensure best.pt is in this folder)
print("Loading YOLO model...")
model = YOLO("best.pt")
print("Model loaded successfully!")

# 4. Setup Image Directory for the "Conveyor Belt" simulation
IMAGE_DIR = "demo_images"
image_paths = sorted(glob.glob(os.path.join(IMAGE_DIR, "*.jpg")) + glob.glob(os.path.join(IMAGE_DIR, "*.png")))

# 5. Global Stats Tracker
stats = {"total_scanned": 0, "good_count": 0, "defective_count": 0}

def generate_stream():
    """Reads from Webcam, runs YOLO, and yields an MJPEG video stream"""
    global stats
    
    # 0 is the default laptop webcam. Change to 1 or 2 if using an external USB camera.
    cap = cv2.VideoCapture(1) 
    
    # HARDWARE OPTIMIZATION: Force webcam to 640x480 to save CPU and RAM
    cap.set(cv2.CAP_PROP_FRAME_WIDTH, 640)
    cap.set(cv2.CAP_PROP_FRAME_HEIGHT, 480)
    
    frame_skip = 2 # Process every 2nd frame to prevent CPU overload
    frame_count = 0

    while True:
        success, frame = cap.read()
        if not success:
            break
            
        frame_count += 1
        
        # Skip frames to maintain high FPS on Ryzen 5500U
        if frame_count % frame_skip != 0:
            continue
            
        # Run YOLO inference (CPU optimized)
        results = model(frame, conf=0.4, imgsz=480, verbose=False)
        
        # Update Stats
        detected_classes = [model.names[int(box.cls[0])] for box in results[0].boxes]
        stats["total_scanned"] += 1
        
        if "defective_sprite" in detected_classes:
            stats["defective_count"] += 1
        else:
            stats["good_count"] += 1
            
        # Draw bounding boxes
        annotated_frame = results[0].plot()
        
        # Encode frame as JPEG
        ret, buffer = cv2.imencode('.jpg', annotated_frame)
        frame_bytes = buffer.tobytes()
        
        # Yield the frame in MJPEG format
        yield (b'--frame\r\n'
               b'Content-Type: image/jpeg\r\n\r\n' + frame_bytes + b'\r\n')
        
        # No time.sleep() needed here, the frame_skip handles the pacing

    cap.release()

@app.get("/")
def read_root():
    return {"message": "RETINA API is running. Go to /video_feed to see the stream."}

@app.get("/video_feed")
def video_feed():
    """Endpoint that streams the processed images as a video"""
    return StreamingResponse(
        generate_stream(), 
        media_type="multipart/x-mixed-replace; boundary=frame"
    )

@app.get("/api/stats")
def get_stats():
    """Endpoint for the Next.js dashboard to fetch live counts"""
    return stats
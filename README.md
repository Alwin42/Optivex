# RETINA: Vision-Based Defect Detection & Control Dashboard

> **Automated Optical Inspection (AOI) for Resource-Constrained Environments**

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![Python](https://img.shields.io/badge/python-3.10+-blue.svg)
![Next.js](https://img.shields.io/badge/Next.js-14-black)
![YOLOv8](https://img.shields.io/badge/YOLOv8-Nano-orange)

## 📖 Overview

**RETINA** is an end-to-end AI-powered quality control system designed to automate defect detection in manufacturing lines. Unlike traditional AOI systems that require expensive enterprise hardware, RETINA leverages lightweight computer vision models and modern web technologies to deliver real-time inspection analytics on standard consumer-grade laptops.

The system features a custom-trained YOLOv8 Nano model capable of detecting physical defects (dents, label damage) on transparent, reflective surfaces like Sprite bottles. Results are streamed via MJPEG to a minimalist Next.js dashboard, providing live production metrics and historical reporting without requiring a dedicated GPU.

## ✨ Key Features

-   **Real-Time Inference:** CPU-optimized YOLOv8 Nano achieving 15-25 FPS on AMD Ryzen 5500U.
-   **MJPEG Video Streaming:** Low-latency annotated video feed directly to the browser.
-   **Interactive Bento Dashboard:** Modern UI built with shadcn/ui featuring live stats, charts, and inspection logs.
-   **Hardware Agnostic:** Designed specifically for 8GB RAM / Integrated Graphics environments.
-   **Custom Dataset Pipeline:** Roboflow-integrated labeling, augmentation, and training workflow.

## 🛠️ Tech Stack

| Category       | Technology                 | Purpose                                     |
| :------------- | :------------------------- | :------------------------------------------ |
| **Backend**    | FastAPI + Uvicorn          | Async API server & MJPEG streaming engine   |
| **AI/ML**      | Ultralytics YOLOv8 Nano    | Object detection & defect classification    |
| **Vision**     | OpenCV (Headless)          | Frame processing & annotation               |
| **Frontend**   | Next.js 14 (App Router)    | Dashboard UI & client-side rendering        |
| **Styling**    | Tailwind CSS + shadcn/ui   | Minimalist design system & bento layout     |
| **Charts**     | Recharts                   | Production trend visualization              |
| **Data Mgmt**  | Roboflow                   | Dataset labeling, augmentation & export     |
| **Training**   | Google Colab (T4 GPU)      | Cloud-based model training                  |

## ⚙️ System Requirements

This project is optimized for low-resource hardware. Minimum specifications:

-   **CPU:** Quad-core x86_64 (AMD Ryzen 5 5500U or equivalent)
-   **RAM:** 8 GB (Shared memory acceptable)
-   **GPU:** None required (CPU-only inference)
-   **OS:** Linux (Arch/CachyOS recommended), Windows, or macOS
-   **Python:** 3.10+
-   **Node.js:** 18+

## 🚀 Installation & Setup

### 1. Backend Setup

```bash
cd backend
python -m venv venv
source venv/bin/activate  # Use 'venv\Scripts\activate' on Windows

pip install fastapi uvicorn ultralytics opencv-python-headless pillow python-multipart
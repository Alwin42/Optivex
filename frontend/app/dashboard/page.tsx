"use client";

import dashboardData from "../../data/dashboardData.json";

const { user, productionLine, realTimeStats, chartData, tableData } =
  dashboardData;

const dentedCount = tableData.filter(
  (r) => r.status === "Defective" && r.defectType === "Dented"
).length;
const labelDamagedCount = tableData.filter(
  (r) => r.status === "Defective" && r.defectType === "Label Damaged"
).length;

export default function Dashboard() {
  return (
    <>
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-xl font-bold">Welcome, {user.name}</h1>
          <p className="text-[#666666] text-sm">
            Production Line: {productionLine}
          </p>
        </div>
      </div>

      {/* Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[180px]">
        {/* Cell 1: Live Feed */}
        <div
          className="md:col-span-2 md:row-span-2 bg-[#FFFFFF] border border-[#E5E5E5] rounded-3xl p-4 hover:shadow-lg hover:border-[#FF6B00]/40 transition-all duration-300"
        >
          <img
            src="http://localhost:8000/video_feed"
            alt="Live Feed"
            className="w-full h-full object-cover rounded-2xl bg-[#FFF0E6]"
          />
        </div>

        {/* Cell 2: Real-time Stats */}
        <div
          className="md:col-span-1 md:row-span-2 bg-[#FFFFFF] border border-[#E5E5E5] rounded-3xl p-6 hover:shadow-lg hover:border-[#FF6B00]/40 transition-all duration-300 flex flex-col justify-between"
        >
          <div className="space-y-3">
            <div className="flex justify-between items-baseline">
              <span className="text-sm text-[#666666]">Total Scanned</span>
              <span className="text-2xl font-bold text-[#FF6B00]">
                {realTimeStats.totalScanned}
              </span>
            </div>
            <div className="flex justify-between items-baseline">
              <span className="text-sm text-[#666666]">Good</span>
              <span className="text-2xl font-bold text-[#FF6B00]">
                {realTimeStats.goodBottles}
              </span>
            </div>
            <div className="flex justify-between items-baseline">
              <span className="text-sm text-[#666666]">Defective</span>
              <span className="text-2xl font-bold text-[#FF6B00]">
                {realTimeStats.defectiveBottles}
              </span>
            </div>
            <div className="flex justify-between items-baseline">
              <span className="text-sm text-[#666666]">Efficiency</span>
              <span className="text-2xl font-bold text-[#FF6B00]">
                {realTimeStats.efficiency}
              </span>
            </div>
          </div>
        </div>

        {/* Cell 3: Production Chart */}
        <div
          className="md:col-span-2 md:row-span-1 bg-[#FFFFFF] border border-[#E5E5E5] rounded-3xl p-4 hover:shadow-lg hover:border-[#FF6B00]/40 transition-all duration-300"
        >
          <div className="h-full w-full flex flex-col">
            <div
              className="flex-1 flex items-end gap-2 px-2 pb-4"
              role="chart"
              aria-label="Production Overview"
            >
              {chartData.map((point, i) => {
                const maxVal = Math.max(
                  ...chartData.map((d) => Math.max(d.good, d.defective))
                );
                const goodHeight = (point.good / maxVal) * 100;
                const defectiveHeight = (point.defective / maxVal) * 100;
                return (
                  <div
                    key={i}
                    className="flex flex-col items-center gap-1 w-full max-w-[56px]"
                  >
                    <div
                      className="w-full bg-[#FFF0E6] rounded-t-lg relative overflow-hidden"
                      style={{ height: "100%" }}
                    >
                      <div
                        className="absolute bottom-0 left-0 right-0 bg-[#FF6B00]"
                        style={{ height: `${goodHeight}%` }}
                      />
                      <div
                        className="absolute bottom-0 left-0 right-0 bg-[#E5E5E5]"
                        style={{ height: `${defectiveHeight}%` }}
                      />
                    </div>
                    <span className="text-xs text-[#666666]">{point.time}</span>
                  </div>
                );
              })}
            </div>
            <div className="flex justify-end gap-4 pt-2 text-xs">
              <span className="flex items-center gap-1">
                <span className="w-2 h-2 rounded bg-[#FF6B00]" /> Good
              </span>
              <span className="flex items-center gap-1">
                <span className="w-2 h-2 rounded bg-[#E5E5E5]" /> Defective
              </span>
            </div>
          </div>
        </div>

        {/* Cell 4: Defect Breakdown */}
        <div
          className="bg-[#FFF0E6] border border-[#FF6B00]/20 rounded-3xl p-4 hover:shadow-lg hover:border-[#FF6B00]/60 transition-all duration-300 flex flex-col justify-between gap-4"
        >
          <div className="space-y-3">
            <div className="flex justify-between items-baseline">
              <span className="text-sm text-[#666666]">Dented</span>
              <span className="text-2xl font-bold text-[#FF6B00]">
                {dentedCount}
              </span>
            </div>
            <div className="flex justify-between items-baseline">
              <span className="text-sm text-[#666666]">Label Damaged</span>
              <span className="text-2xl font-bold text-[#FF6B00]">
                {labelDamagedCount}
              </span>
            </div>
          </div>
        </div>

        {/* Cell 5: Daily Report */}
        <div
          className="bg-[#FFFFFF] border border-[#E5E5E5] rounded-3xl p-4 hover:shadow-lg hover:border-[#FF6B00]/40 transition-all duration-300"
        >
          <h3 className="text-sm font-bold text-[#1A1A1A] mb-3">
            Recent Inspections
          </h3>
          <ul className="space-y-2">
            {tableData.map((row) => (
              <li
                key={row.id}
                className="flex justify-between items-center text-sm text-[#666666] py-1 border-b border-[#E5E5E5]/50 last:border-0"
              >
                <span>{row.id}</span>
                <span>{row.status}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

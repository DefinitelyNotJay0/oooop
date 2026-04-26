import { useState } from "react";

const enrolledCourses = [
  { code: "CS 311", title: "Data Structures & Algorithms", schedule: "MWF 9:00–10:00", room: "Eng 204", prof: "Dr. L. Tanaka", units: 3 },
  { code: "CS 322", title: "Database Management Systems", schedule: "TTh 10:30–12:00", room: "Eng 308", prof: "Prof. R. Cruz", units: 3 },
  { code: "CS 331", title: "Operating Systems", schedule: "MWF 13:00–14:00", room: "Eng 211", prof: "Dr. M. Okafor", units: 3 },
  { code: "MATH 215", title: "Discrete Mathematics", schedule: "TTh 8:00–9:30", room: "Sci 102", prof: "Dr. P. Singh", units: 3 },
  { code: "ENG 210", title: "Technical Writing", schedule: "F 14:00–17:00", room: "Hum 121", prof: "Prof. A. Mendoza", units: 3 },
  { code: "PE 3", title: "Movement Studies", schedule: "W 15:00–17:00", room: "Gym B", prof: "Coach J. Lim", units: 2 },
];

const availableCourses = [
  { code: "CS 401", title: "Software Engineering", units: 3, prereq: "CS 322", slots: 12, slotColor: "text-emerald-600 bg-emerald-50" },
  { code: "CS 412", title: "Machine Learning Basics", units: 3, prereq: "MATH 215", slots: 8, slotColor: "text-orange-500 bg-orange-50" },
  { code: "CS 423", title: "Web Systems & Tech", units: 3, prereq: "CS 322", slots: 18, slotColor: "text-emerald-600 bg-emerald-50" },
  { code: "PHIL 102", title: "Ethics in Technology", units: 3, prereq: "—", slots: 25, slotColor: "text-blue-500 bg-blue-50" },
];

export default function Enrollment() {
  const [added, setAdded] = useState([]);

  const handleAdd = (code) => {
    if (!added.includes(code)) setAdded([...added, code]);
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-4xl font-bold text-gray-900">Enrollment</h1>
        <p className="text-gray-400 mt-1">1st Semester · A.Y. 2025–2026 · 6 courses · 18 units</p>
      </div>

      {/* Load banner */}
      <div className="bg-gradient-to-r from-[#2d7a5e] to-[#4aab87] rounded-2xl p-6 flex items-center justify-between text-white">
        <div>
          <div className="text-sm opacity-80 mb-1">Current load</div>
          <div className="text-4xl font-bold">18 of 21 units</div>
          <div className="text-sm opacity-80 mt-1">You may add up to 3 more units this semester.</div>
        </div>
        <button className="bg-white text-[#2d7a5e] font-semibold text-sm px-5 py-2.5 rounded-xl hover:bg-gray-50 transition-colors">
          View enrollment slip
        </button>
      </div>

      {/* Currently enrolled */}
      <div>
        <h2 className="font-bold text-gray-900 text-xl mb-4">Currently enrolled</h2>
        <div className="grid grid-cols-2 gap-4">
          {enrolledCourses.map((c) => (
            <div key={c.code} className="bg-white rounded-2xl p-5 border border-gray-100 hover:border-[#a8d8c8] transition-colors">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <div className="text-xs font-bold text-[#2d7a5e] mb-1">{c.code}</div>
                  <div className="font-bold text-gray-900">{c.title}</div>
                </div>
                <span className="flex items-center gap-1 text-xs font-semibold text-emerald-600 bg-emerald-50 px-2 py-1 rounded-full">
                  ✓ Enrolled
                </span>
              </div>
              <div className="space-y-1 text-sm text-gray-500">
                <div className="flex items-center gap-2">
                  <span>🕐</span> {c.schedule}
                </div>
                <div className="flex items-center gap-2">
                  <span>📍</span> {c.room}
                </div>
                <div className="flex items-center gap-2">
                  <span>👤</span> {c.prof}
                </div>
              </div>
              <div className="flex items-center justify-between mt-3 pt-3 border-t border-gray-50">
                <span className="text-sm text-gray-400">{c.units} units</span>
                <button className="text-sm font-semibold text-[#2d7a5e] hover:underline">Details</button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Available courses */}
      <div>
        <h2 className="font-bold text-gray-900 text-xl mb-4">Available courses</h2>
        <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-100">
                {["CODE", "TITLE", "UNITS", "PREREQ", "SLOTS", ""].map((h) => (
                  <th key={h} className="text-left text-xs font-bold text-gray-400 tracking-wider px-5 py-3">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {availableCourses.map((c) => (
                <tr key={c.code} className="border-b border-gray-50 hover:bg-gray-50 transition-colors">
                  <td className="px-5 py-4 text-sm font-bold text-gray-500">{c.code}</td>
                  <td className="px-5 py-4 text-sm font-medium text-gray-900">{c.title}</td>
                  <td className="px-5 py-4 text-sm text-gray-500">{c.units}</td>
                  <td className="px-5 py-4 text-sm text-gray-500">{c.prereq}</td>
                  <td className="px-5 py-4">
                    <span className={`text-xs font-semibold px-2 py-1 rounded-full ${c.slotColor}`}>{c.slots} left</span>
                  </td>
                  <td className="px-5 py-4">
                    <button
                      onClick={() => handleAdd(c.code)}
                      disabled={added.includes(c.code)}
                      className={`flex items-center gap-1 px-4 py-2 rounded-xl text-sm font-semibold transition-colors ${
                        added.includes(c.code)
                          ? "bg-emerald-50 text-emerald-600 cursor-default"
                          : "bg-[#2d7a5e] text-white hover:bg-[#235f49]"
                      }`}
                    >
                      {added.includes(c.code) ? "✓ Added" : "+ Add"}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

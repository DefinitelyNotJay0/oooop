const recentActivity = [
  { code: "CS 311", date: "Apr 21", status: "Present", icon: "✓", color: "text-emerald-500 bg-emerald-50 border-emerald-100" },
  { code: "MATH...", date: "Apr 21", status: "Present", icon: "✓", color: "text-emerald-500 bg-emerald-50 border-emerald-100" },
  { code: "ENG 210", date: "Apr 18", status: "Late", icon: "⏱", color: "text-orange-500 bg-orange-50 border-orange-100" },
  { code: "CS 322", date: "Apr 17", status: "Present", icon: "✓", color: "text-emerald-500 bg-emerald-50 border-emerald-100" },
  { code: "CS 331", date: "Apr 16", status: "Absent", icon: "✕", color: "text-red-500 bg-red-50 border-red-100" },
  { code: "CS 311", date: "Apr 15", status: "Present", icon: "✓", color: "text-emerald-500 bg-emerald-50 border-emerald-100" },
];

const byCourse = [
  { code: "CS 311", title: "Data Structures & Algorithms", pct: 90, present: 28, late: 2, absent: 1 },
  { code: "CS 322", title: "Database Management Systems", pct: 96, present: 22, late: 1, absent: 0 },
  { code: "CS 331", title: "Operating Systems", pct: 87, present: 26, late: 1, absent: 3 },
  { code: "MATH 215", title: "Discrete Mathematics", pct: 100, present: 24, late: 0, absent: 0 },
  { code: "ENG 210", title: "Technical Writing", pct: 90, present: 9, late: 0, absent: 1 },
];

const pctColor = (p) => {
  if (p >= 95) return "text-emerald-600";
  if (p >= 85) return "text-blue-600";
  return "text-orange-500";
};

export default function Attendance() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-4xl font-bold text-gray-900">Attendance</h1>
        <p className="text-gray-400 mt-1">Tracking your presence across all courses</p>
      </div>

      {/* Overall + Recent */}
      <div className="grid grid-cols-3 gap-4">
        {/* Overall ring */}
        <div className="bg-white rounded-2xl p-6 border border-gray-100 flex flex-col items-center justify-center text-center">
          <div className="text-xs text-gray-400 mb-3">Overall attendance</div>
          <div className="relative w-28 h-28 mb-4">
            <svg viewBox="0 0 100 100" className="w-full h-full -rotate-90">
              <circle cx="50" cy="50" r="42" fill="none" stroke="#f0f0f0" strokeWidth="8" />
              <circle
                cx="50" cy="50" r="42"
                fill="none"
                stroke="#2d7a5e"
                strokeWidth="8"
                strokeDasharray={`${0.93 * 263.9} ${263.9}`}
                strokeLinecap="round"
              />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-2xl font-bold text-gray-900">93%</span>
            </div>
          </div>
          <div className="font-bold text-gray-900 text-lg">Excellent</div>
          <div className="text-xs text-gray-400 mt-1">Above the 85% requirement to take finals.</div>
        </div>

        {/* Recent activity */}
        <div className="col-span-2 bg-white rounded-2xl p-6 border border-gray-100">
          <h2 className="font-bold text-gray-900 mb-4">Recent activity</h2>
          <div className="grid grid-cols-3 gap-3">
            {recentActivity.map((a, i) => (
              <div key={i} className={`rounded-xl p-3 border ${a.color} flex items-center gap-3`}>
                <span className="text-lg">{a.icon}</span>
                <div>
                  <div className="font-bold text-sm text-gray-800">{a.code}</div>
                  <div className="text-xs text-gray-500">{a.date}</div>
                  <div className="text-xs font-medium mt-0.5">{a.status}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* By course */}
      <div>
        <h2 className="font-bold text-gray-900 text-xl mb-4">By course</h2>
        <div className="space-y-3">
          {byCourse.map((c) => (
            <div key={c.code} className="bg-white rounded-2xl p-5 border border-gray-100">
              <div className="flex items-center justify-between mb-3">
                <div>
                  <div className="text-xs font-bold text-[#2d7a5e] mb-0.5">{c.code}</div>
                  <div className="font-bold text-gray-900">{c.title}</div>
                </div>
                <span className={`text-2xl font-bold ${pctColor(c.pct)}`}>{c.pct}%</span>
              </div>
              <div className="grid grid-cols-3 gap-3 mb-3">
                <div className="bg-emerald-50 rounded-xl p-3 text-center">
                  <div className="text-2xl font-bold text-emerald-600">{c.present}</div>
                  <div className="text-xs text-gray-500">Present</div>
                </div>
                <div className="bg-orange-50 rounded-xl p-3 text-center">
                  <div className="text-2xl font-bold text-orange-400">{c.late}</div>
                  <div className="text-xs text-gray-500">Late</div>
                </div>
                <div className="bg-red-50 rounded-xl p-3 text-center">
                  <div className={`text-2xl font-bold ${c.absent > 0 ? "text-red-500" : "text-gray-300"}`}>{c.absent}</div>
                  <div className="text-xs text-gray-500">Absent</div>
                </div>
              </div>
              <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
                <div
                  className={`h-full rounded-full ${c.pct === 100 ? "bg-emerald-500" : c.pct >= 90 ? "bg-[#2d7a5e]" : "bg-orange-400"}`}
                  style={{ width: `${c.pct}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

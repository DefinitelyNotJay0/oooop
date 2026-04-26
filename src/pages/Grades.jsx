const gpaHistory = [
  { sem: "1ST SEM", year: "2023–24", gpa: "1.61", units: 18 },
  { sem: "2ND SEM", year: "2023–24", gpa: "1.45", units: 19 },
  { sem: "1ST SEM", year: "2024–25", gpa: "1.52", units: 18 },
  { sem: "2ND SEM", year: "2024–25", gpa: "1.38", units: 21 },
];

const semGrades = [
  { code: "CS 311", title: "Data Structures & Algorithms", prelim: 92, midterm: 89, finals: null, standing: 1.50 },
  { code: "CS 322", title: "Database Management Systems", prelim: 95, midterm: 93, finals: null, standing: 1.25 },
  { code: "CS 331", title: "Operating Systems", prelim: 86, midterm: 88, finals: null, standing: 1.75 },
  { code: "MATH 215", title: "Discrete Mathematics", prelim: 90, midterm: 91, finals: null, standing: 1.50 },
  { code: "ENG 210", title: "Technical Writing", prelim: 94, midterm: 92, finals: null, standing: 1.25 },
];

const standingColor = (s) => {
  if (s <= 1.25) return "text-emerald-600 bg-emerald-50";
  if (s <= 1.75) return "text-blue-600 bg-blue-50";
  return "text-orange-500 bg-orange-50";
};

export default function Grades() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-4xl font-bold text-gray-900">Academic record</h1>
        <p className="text-gray-400 mt-1">1st Semester · A.Y. 2025–2026</p>
      </div>

      {/* GPA Overview */}
      <div className="grid grid-cols-3 gap-4">
        <div className="bg-gradient-to-br from-[#2d7a5e] to-[#1a5940] rounded-2xl p-6 text-white">
          <div className="text-sm opacity-80 mb-2">Cumulative GPA</div>
          <div className="text-6xl font-bold mb-2">1.42</div>
          <div className="text-sm opacity-80">Latin honors track · Magna Cum Laude</div>
        </div>

        <div className="col-span-2 bg-white rounded-2xl p-6 border border-gray-100">
          <h2 className="font-bold text-gray-900 mb-4">GPA trend</h2>
          <div className="grid grid-cols-4 gap-3">
            {gpaHistory.map((h, i) => (
              <div key={i} className="bg-gray-50 rounded-xl p-3 text-center">
                <div className="text-xs text-gray-400 font-semibold">{h.sem}</div>
                <div className="text-xs text-gray-400 mb-2">{h.year}</div>
                <div className="text-2xl font-bold text-gray-900">{h.gpa}</div>
                <div className="text-xs text-gray-400 mt-1">{h.units} units</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* GPA Visual Bar */}
      <div className="bg-white rounded-2xl p-5 border border-gray-100">
        <h3 className="font-bold text-gray-700 text-sm mb-3">GPA Trend — Visual</h3>
        <div className="flex items-end gap-4 h-24">
          {gpaHistory.map((h, i) => {
            const height = ((5 - parseFloat(h.gpa)) / 4) * 100;
            return (
              <div key={i} className="flex-1 flex flex-col items-center gap-1">
                <span className="text-xs font-bold text-gray-600">{h.gpa}</span>
                <div
                  className="w-full bg-[#2d7a5e] rounded-t-md transition-all"
                  style={{ height: `${height}%`, minHeight: "8px" }}
                />
                <span className="text-xs text-gray-400">{h.sem.replace(" SEM", "")}</span>
              </div>
            );
          })}
        </div>
        <p className="text-xs text-gray-400 mt-2">Lower GPA value = better (1.00 excellent → 5.00 failed)</p>
      </div>

      {/* This semester grades */}
      <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-100">
          <h2 className="font-bold text-gray-900 text-xl">This semester</h2>
        </div>
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-100 bg-gray-50">
              {["COURSE", "PRELIM", "MIDTERM", "FINALS", "STANDING"].map((h) => (
                <th key={h} className="text-left text-xs font-bold text-gray-400 tracking-wider px-6 py-3">{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {semGrades.map((g) => (
              <tr key={g.code} className="border-b border-gray-50 hover:bg-gray-50 transition-colors">
                <td className="px-6 py-4">
                  <div className="text-xs font-bold text-[#2d7a5e] mb-0.5">{g.code}</div>
                  <div className="font-semibold text-gray-900 text-sm">{g.title}</div>
                </td>
                <td className="px-6 py-4 text-sm font-medium text-gray-700">{g.prelim}</td>
                <td className="px-6 py-4 text-sm font-medium text-gray-700">{g.midterm}</td>
                <td className="px-6 py-4 text-sm text-gray-400">{g.finals ?? "—"}</td>
                <td className="px-6 py-4">
                  <span className={`text-sm font-bold px-3 py-1 rounded-full ${standingColor(g.standing)}`}>
                    {g.standing.toFixed(2)}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="px-6 py-3 border-t border-gray-100">
          <p className="text-xs text-gray-400">Grading scale: 1.00 (excellent) → 5.00 (failed). Final grades are tentative until end of term.</p>
        </div>
      </div>
    </div>
  );
}

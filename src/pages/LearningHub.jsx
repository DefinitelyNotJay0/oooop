const dueThisWeek = [
  { code: "CS 331", type: "quiz", icon: "📝", title: "Quiz 4 — Process...", due: "Tomorrow · 13:00" },
  { code: "CS 311", type: "lab", icon: "⚗️", title: "Lab 6 — AVL Tree...", due: "Apr 24 · 23:59" },
  { code: "MATH 215", type: "assignment", icon: "📐", title: "Problem Set 8", due: "Apr 25 · 23:59" },
  { code: "CS 322", type: "project", icon: "💼", title: "Group Project Milestone 2", due: "Apr 26 · 18:00" },
];

const myCourses = [
  { code: "CS 311", title: "Data Structures & Algorithms", prof: "Dr. L. Tanaka", modules: 8, totalModules: 12, pct: 68, nextTitle: "Lab 6 — AVL Trees", nextDue: "Due Apr 24" },
  { code: "CS 322", title: "Database Management Systems", prof: "Prof. R. Cruz", modules: 7, totalModules: 10, pct: 75, nextTitle: "Project Milestone 2", nextDue: "Due Apr 26" },
  { code: "CS 331", title: "Operating Systems", prof: "Dr. M. Okafor", modules: 7, totalModules: 14, pct: 54, nextTitle: "Quiz 4 — Scheduling", nextDue: "Due Apr 23" },
  { code: "MATH 215", title: "Discrete Mathematics", prof: "Dr. P. Singh", modules: 7, totalModules: 9, pct: 82, nextTitle: "Problem Set 8", nextDue: "Due Apr 25" },
];

const typeColor = {
  quiz: "bg-purple-100 text-purple-700",
  lab: "bg-blue-100 text-blue-700",
  assignment: "bg-orange-100 text-orange-700",
  project: "bg-green-100 text-green-700",
};

export default function LearningHub() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-4xl font-bold text-gray-900">Learning Hub</h1>
        <p className="text-gray-400 mt-1">Course materials, modules, and submissions</p>
      </div>

      {/* Due this week */}
      <div className="bg-[#fdf8f0] rounded-2xl p-5 border border-[#f0e8d0]">
        <div className="flex items-center gap-2 mb-4">
          <span>📅</span>
          <h2 className="font-bold text-gray-900">Due this week</h2>
        </div>
        <div className="grid grid-cols-4 gap-3">
          {dueThisWeek.map((d) => (
            <div key={d.title} className="bg-white rounded-xl p-4 border border-[#f0e8d0]">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-lg">{d.icon}</span>
                <span className="text-xs font-bold text-[#2d7a5e]">{d.code}</span>
              </div>
              <div className="font-semibold text-sm text-gray-900 mb-1">{d.title}</div>
              <div className="text-xs text-gray-400">{d.due}</div>
              <span className={`inline-block mt-2 text-xs px-2 py-0.5 rounded font-medium ${typeColor[d.type]}`}>{d.type}</span>
            </div>
          ))}
        </div>
      </div>

      {/* My courses */}
      <div>
        <h2 className="font-bold text-gray-900 text-xl mb-4">My courses</h2>
        <div className="grid grid-cols-2 gap-4">
          {myCourses.map((c) => (
            <div key={c.code} className="bg-white rounded-2xl overflow-hidden border border-gray-100">
              {/* Course header */}
              <div className="bg-gradient-to-r from-[#2d7a5e] to-[#3d8a6e] p-5">
                <div className="text-xs font-bold text-white/70 mb-1">{c.code}</div>
                <div className="font-bold text-white text-lg">{c.title}</div>
              </div>
              {/* Course body */}
              <div className="p-5">
                <div className="text-sm text-gray-500 mb-3">{c.prof}</div>
                <div className="flex items-center justify-between text-sm mb-2">
                  <span className="text-gray-500">{c.modules} of {c.totalModules} modules</span>
                  <span className="font-bold text-gray-900">{c.pct}%</span>
                </div>
                <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden mb-4">
                  <div
                    className="h-full bg-[#2d7a5e] rounded-full transition-all duration-700"
                    style={{ width: `${c.pct}%` }}
                  />
                </div>
                <div className="flex items-center justify-between bg-gray-50 rounded-xl p-3">
                  <div>
                    <div className="text-xs text-gray-400 font-semibold uppercase tracking-wider mb-0.5">NEXT UP</div>
                    <div className="font-semibold text-sm text-gray-900">{c.nextTitle}</div>
                    <div className="text-xs text-gray-400">{c.nextDue}</div>
                  </div>
                  <button className="bg-[#2d7a5e] text-white text-sm font-semibold px-5 py-2 rounded-xl hover:bg-[#235f49] transition-colors">
                    Open
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

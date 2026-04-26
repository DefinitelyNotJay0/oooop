const navItems = [
  { id: "dashboard", label: "Dashboard", icon: "⊞" },
  { id: "enrollment", label: "Enrollment", icon: "⊡" },
  { id: "grades", label: "Grades", icon: "◎" },
  { id: "attendance", label: "Attendance", icon: "▣" },
  { id: "learning", label: "Learning Hub", icon: "≡" },
];

export default function AppLayout({ children, page, navigate, onLogout }) {
  return (
    <div className="flex h-screen bg-[#f5f5f0] font-sans overflow-hidden">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r border-gray-100 flex flex-col py-5 px-4 shrink-0">
        {/* Logo */}
        <div className="flex items-center gap-2 px-2 mb-8">
          <div className="w-8 h-8 bg-[#2d7a5e] rounded-lg flex items-center justify-center text-white text-sm font-bold">
            🎓
          </div>
          <div>
            <div className="font-bold text-gray-900 text-sm leading-tight">Verdant</div>
            <div className="text-gray-400 text-xs">Student Portal</div>
          </div>
        </div>

        {/* Nav */}
        <div className="text-xs text-gray-400 font-semibold uppercase tracking-widest px-2 mb-2">Main</div>
        <nav className="flex-1 space-y-1">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => navigate(item.id)}
              className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-all ${
                page === item.id
                  ? "bg-[#eaf5f0] text-[#2d7a5e] font-semibold"
                  : "text-gray-500 hover:bg-gray-50 hover:text-gray-800"
              }`}
            >
              <span className="text-base">{item.icon}</span>
              {item.label}
            </button>
          ))}
        </nav>

        {/* User */}
        <div className="flex items-center gap-3 px-2 pt-4 border-t border-gray-100">
          <div className="w-8 h-8 bg-[#2d7a5e] rounded-full flex items-center justify-center text-white text-xs font-bold shrink-0">
            MR
          </div>
          <div className="flex-1 min-w-0">
            <div className="text-sm font-semibold text-gray-800 truncate">Maya Reyes</div>
            <div className="text-xs text-gray-400">STU-2024-0481</div>
          </div>
          <button onClick={onLogout} className="text-gray-400 hover:text-gray-600 text-lg" title="Logout">⚙</button>
        </div>
      </aside>

      {/* Main content area */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Topbar */}
        <header className="bg-white border-b border-gray-100 px-6 py-3 flex items-center gap-4 shrink-0">
          <span className="text-gray-400 text-sm">⊡</span>
          <div className="flex-1 max-w-md">
            <div className="flex items-center gap-2 bg-gray-50 rounded-lg px-3 py-2">
              <span className="text-gray-400 text-sm">🔍</span>
              <input
                type="text"
                placeholder="Search courses, modules, classmates..."
                className="bg-transparent text-sm text-gray-600 placeholder-gray-400 outline-none w-full"
              />
            </div>
          </div>
          <div className="ml-auto relative">
            <span className="text-xl">🔔</span>
            <span className="absolute -top-1 -right-1 w-2 h-2 bg-[#e8a84c] rounded-full" />
          </div>
        </header>

        {/* Page content */}
        <main className="flex-1 overflow-y-auto p-6">{children}</main>
      </div>
    </div>
  );
}

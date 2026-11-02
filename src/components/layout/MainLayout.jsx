import { useState } from "react";
import { Menu } from "lucide-react";
import Sidebar from "./Sidebar";

export default function MainLayout({
  children,
  activeTab,
  setActiveTab,
  likedCount,
  playlists,
  onCreatePlaylist,
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#09090f] text-white">
      <Sidebar
        tab={activeTab}
        setTab={(tab) => {
          setActiveTab(tab);
          setSidebarOpen(false);
        }}
        likedCount={likedCount}
        playlists={playlists}
        onCreate={onCreatePlaylist}
        open={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
      />

      <div className="min-h-screen lg:pl-[260px]">
        <header className="sticky top-0 z-30 flex items-center gap-3 border-b border-white/5 bg-[#09090f]/85 px-4 py-3 backdrop-blur-xl lg:hidden">
          <button
            onClick={() => setSidebarOpen(true)}
            aria-label="Open sidebar"
            className="rounded-xl p-2 text-zinc-400 hover:bg-white/5 hover:text-white"
          >
            <Menu size={21} />
          </button>

          <span className="text-lg font-black">
            Svara<span className="text-fuchsia-400">.</span>
          </span>
        </header>

        <div className="mx-auto w-full max-w-[1600px]">
          {children}
        </div>
      </div>
    </div>
  );
}
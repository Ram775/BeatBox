
import { useState } from "react";
import {
  Menu,
  AudioLines,
  Headphones,
  X,
} from "lucide-react";

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

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setSidebarOpen(false);
  };

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[#09090f] text-white">

      {/* Ambient Background */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute -top-60 left-[20%] h-[500px] w-[500px] rounded-full bg-fuchsia-500/[0.035] blur-[150px]" />

        <div className="absolute right-0 top-[40%] h-[400px] w-[400px] rounded-full bg-violet-500/[0.025] blur-[130px]" />
      </div>

      {/* Sidebar */}
      <Sidebar
        tab={activeTab}
        setTab={handleTabChange}
        likedCount={likedCount}
        playlists={playlists}
        onCreate={onCreatePlaylist}
        open={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
      />

      {/* Main Content */}
      <div className="relative min-h-screen lg:pl-[260px]">

        {/* Mobile Header */}
        <header className="sticky top-0 z-30 flex h-[68px] items-center justify-between border-b border-white/[0.06] bg-[#09090f]/85 px-4 backdrop-blur-2xl lg:hidden">

          <div className="flex items-center gap-3">

            <button
              type="button"
              onClick={() => setSidebarOpen(true)}
              aria-label="Open sidebar"
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/[0.06] bg-white/[0.03] text-zinc-400 transition hover:bg-white/[0.08] hover:text-white active:scale-95"
            >
              <Menu size={21} />
            </button>

            {/* Brand */}
            <div className="flex items-center gap-2.5">

              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-fuchsia-500 to-violet-600 shadow-lg shadow-fuchsia-500/20">
                <AudioLines size={19} className="text-white" />
              </div>

              <span className="text-xl font-black tracking-tight text-white">
                Svara<span className="text-fuchsia-400">.</span>
              </span>

            </div>

          </div>

          {/* Listening Status */}
          <div className="flex items-center gap-2 rounded-full border border-white/[0.06] bg-white/[0.03] px-3 py-1.5">
            <Headphones size={13} className="text-fuchsia-400" />

            <span className="text-[10px] font-medium text-zinc-500">
              Music for you
            </span>
          </div>

        </header>

        {/* Page Container */}
        <main className="relative mx-auto w-full max-w-[1600px] px-4 pb-32 pt-5 sm:px-6 sm:pt-7 lg:px-8 lg:pt-8 xl:px-10">

          {children}

        </main>

      </div>

    </div>
  );
}

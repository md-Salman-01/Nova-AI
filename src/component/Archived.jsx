import React from "react";
import { Archive, Search } from "lucide-react";

const Archived = () => {
  return (

    <div className="h-screen w-full p-6  bg-[#4D403A]/30 text-[#E3E3E3]">
      <div className="flex items-center mt-3 gap-3">
        <h1 className="font-orbitron font-bold text-3xl">Archived</h1>
      </div>

      <p className="mt-1 text-sm text-[#E3E3E3]">
        Out of sight, never out of reach.
      </p>

      <div className="mt-8 flex items-center gap-3 rounded-xl border border-white/20 p-3">
        <Search size={18} className="text-[#E3E3E3]" />
        <input
          type="text"
          placeholder="Search archived conversations..."
          className="w-full bg-transparent text-sm outline-none placeholder:text-[#E3E3E3]"
        />
      </div>

      <div className="mt-10 flex flex-col items-center justify-center">
        <Archive size={40} strokeWidth={1.5} />
        <h2 className="mt-4 text-lg">
          No archived chats yet
        </h2>
        <p className="mt-2 text-sm text-[#E3E3E3]">
          Conversations you archive will appear here.
        </p>
      </div>
    </div>
  );
};

export default Archived;
import React from "react";
import { MessageSquare, Clock, Search } from "lucide-react";


function History() {

    const chats = [
        { id: 1, title: "Closures in JavaScript", time: "Today" },
        { id: 2, title: "Building a React Application", time: "Yesterday" },
        { id: 3, title: "Introduction to Vercel AI SDK", time: "Yesterday" },
        { id: 4, title: "GSAP Scroll Animations", time: "2 days ago" },
        { id: 5, title: "Learning React Hooks", time: "3 days ago" },
        { id: 6, title: "Understanding Components", time: "7 days ago" },
        { id: 7, title: "Reviews Routing", time: "5 days ago" },
        { id: 8, title: "Practice Rest APIs", time: "8 days ago" },
    ];

    return ( 

<div className="min-h-screen bg-[#4D403A]/30 text-[#E3E3E3] py-8">

  <div className="max-w-3xl ml-8">

    {/* Header */}
    <div className="mb-5">
      <h1 className="text-3xl font-orbitron font-bold tracking-wide">
        History
      </h1>

      <p className="text-sm text-[#E3E3E3]/40 mt-3">
        Revisit your previous conversations.
      </p>
    </div>

        <div className='h-12 w-full border flex items-center border-white/20 text-[#E3E3E3] rounded-xl'>
              <Search className='ml-2' size={20} />
              <input className='h-full w-full ml-2 outline-none' type="text" placeholder='Search Library......'/>
        </div>

    {/* Chat List */}
    <div className="flex flex-col gap-3 mt-4">

      {chats.map((chat) => (
        <div
          key={chat.id}
          className="flex items-center justify-between gap-4 p-4 rounded-xl border border-white/10 bg-white/[0.02] hover:bg-black/40 transition-all duration-200 cursor-pointer"
        >
          <div className="flex items-center gap-4 min-w-0">

            <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center shrink-0">
              <MessageSquare
                size={18}
                className="text-[#E3E3E3]/50"
              />
            </div>

            <span className="text-sm truncate">
              {chat.title}
            </span>

          </div>

          <div className="flex items-center gap-2 text-xs text-[#E3E3E3]/34 shrink-0">
            <Clock size={14} />
            <span>{chat.time}</span>
          </div>

        </div>
      ))}

    </div>

  </div>

</div>


);
}

export default History;

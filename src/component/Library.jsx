import React from 'react'
import { Link } from 'react-router-dom';
import {Search,Sparkles, Image, Heart, Folder, LayoutGrid} from "lucide-react";

 const categories = [
              { name: "Suggested", icon: Sparkles },
              { name: "Image", icon: Image },
              { name: "Favorites", icon: Heart },
              { name: "Folder", icon: Folder },
              { name: "All", icon: LayoutGrid },
            ];

const Library = () => {
  return (

                  //  --Navbar--

    <div className='h-full w-full bg-[#4D403A]/30 pt-8 text-[#E3E3E3]'>

        <div className='w-full flex  h-[6%] items-center'>

           <div className='flex h-full w-1/1 items-center justify-between'>
            <h1 className=' ml-5 text-3xl font-orbitron font-bold text-[#E3E3E3]'>Library</h1>
            <Link className='h-[90%] w-[9%] flex items-center justify-center rounded-sm bg-blue-800 text-[#E3E3E3] mr-5'
            to="/">New Chat</Link>
           </div>

        </div>

           {/* Contianer-Box */}

            <div className="mt-5 flex items-center font-orbitron text-[#E3E3E3]">
              <div className="flex gap-3 pl-5">
                {categories.map(({ name, icon: Icon }) => (
                  <a key={name} href="#" className="flex items-center gap-2 rounded-xl
                   border border-white/20 px-3 py-1.5 text-sm transition hover:bg-black/40">
                    <Icon size={16} />
                    {name}
                  </a>
                ))}
              </div>
            </div>

            <div className='h-12 w-[96.3%] border flex items-center border-white/20 text-white rounded-xl mt-4 ml-6'>
              <Search className='ml-2' size={20} />
              <input className='h-full w-full ml-2 outline-none' type="text" placeholder='Search Library......'/>
            </div>

                  {/* Containent-Box */}

        <div className='w-full'>

            <div className='h-100 w-[96.3%] m-auto mt-6 rounded-xl border border-white/30'>

            </div>

        </div>


    </div>
  )
}

export default Library




// import React, { useState } from "react";
// import {
//   Search,
//   Plus,
//   Settings,
//   FileText,
//   Image,
//   Folder,
//   Star,
//   Sparkles,
//   LayoutGrid,
//   ChevronDown,
// } from "lucide-react";

// const Library = () => {
//   const [activeTab, setActiveTab] = useState("All");
//   const [search, setSearch] = useState("");

//   const tabs = [
//     { name: "Suggested", icon: Sparkles },
//     { name: "Images", icon: Image },
//     { name: "Favorites", icon: Star },
//     { name: "Folders", icon: Folder },
//     { name: "All", icon: LayoutGrid },
//   ];

//   const [items] = useState([
//     {
//       id: 1,
//       title: "Nova AI Chatbot",
//       type: "Note",
//       description: "AI chatbot project notes and ideas.",
//       icon: FileText,
//       favorite: true,
//     },
//     {
//       id: 1,
//       title: "AI Image Collection",
//       type: "Images",
//       description: "Saved AI image references.",
//       icon: Image,
//       favorite: false,
//     },
//     {
//       id: 1,
//       title: "Project Ideas",
//       type: "Folders",
//       description: "Ideas for upcoming projects.",
//       icon: Folder,
//       favorite: true,
//     },
//   ]);

//   const filteredItems = items.filter((item) => {
//     const matchesSearch = item.title
//       .toLowerCase()
//       .includes(search.toLowerCase());

//     const matchesTab =
//       activeTab === "All" ||
//       activeTab === "Suggested" ||
//       (activeTab === "Images" && item.type === "Images") ||
//       (activeTab === "Favorites" && item.favorite) ||
//       (activeTab === "Folders" && item.type === "Folders");

//     return matchesSearch && matchesTab;
//   });

//   return (
//     <div className="min-h-full w-full bg-[#0B0F14] text-[#EEEBD9]">

//       {/* Header */}
//       <header className="sticky top-0 z-20 border-b border-white/10 bg-[#0B0F14]/95 px-6 py-5 backdrop-blur-xl sm:px-10">
//         <div className="flex flex-wrap items-center justify-between gap-1">
//           <div>
//             <h1 className="font-orbitron text-3xl font-bold">
//               Library
//             </h1>
//             <p className="mt-1 text-sm text-gray-500">
//               Your saved content, organized in one place.
//             </p>
//           </div>

//           <button
//             type="button"
//             className="flex items-center gap-1 rounded-xl bg-[#EEEBD9] px-1 py-1.5 text-sm font-semibold text-[#0B0F14] transition hover:bg-white"
//             onClick={() => alert("Create new content")}
//           >
//             <Plus size={18} />
//             New
//             <ChevronDown size={16} />
//           </button>
//         </div>


//         {/* Search and Settings */}
//         <div className="mt-6 flex items-center gap-1">
//           <div className="flex flex-1 items-center gap-1 rounded-xl border border-white/10 bg-[#141920] px-1 py-1 transition focus-within:border-blue-400/50">
//             <Search size={19} className="text-gray-500" />

//             <input
//               type="text"
//               value={search}
//               onChange={(e) => setSearch(e.target.value)}
//               placeholder="Search your library..."
//               className="w-full bg-transparent text-sm text-white outline-none placeholder:text-gray-500"
//             />
//           </div>

//           <button
//             type="button"
//             aria-label="Library settings"
//             className="rounded-xl border border-white/10 bg-[#141920] p-1 text-gray-400 transition hover:bg-white/10 hover:text-white"
//           >
//             <Settings size={20} />
//           </button>
//         </div>



//         {/* Category Tabs */}
//         <div className="mt-6 flex gap-1 overflow-x-auto pb-1">
//           {tabs.map((tab) => {
//             const Icon = tab.icon;
//             const isActive = activeTab === tab.name;

//             return (
//               <button
//                 key={tab.name}
//                 type="button"
//                 onClick={() => setActiveTab(tab.name)}
//                 className={`flex shrink-0 items-center gap-1 rounded-lg px-1 py-1 text-sm transition ${
//                   isActive
//                     ? "bg-white/10 text-white"
//                     : "text-gray-500 hover:bg-white/5 hover:text-gray-200"
//                 }`}
//               >
//                 <Icon size={16} />
//                 {tab.name}
//               </button>
//             );
//           })}
//         </div>
//       </header>


//       {/* Library Content */}

//       <main className="px-6 py-8 sm:px-10">
//         <div className="mb-6 flex items-center justify-between">
//           <h2 className="text-lg font-semibold">
//             {activeTab === "All" ? "Your Collection" : activeTab}
//           </h2>

//           <span className="text-xs text-gray-500">
//             {filteredItems.length} items
//           </span>
//         </div>

//         {filteredItems.length > 0 ? (
//           <div className="grid grid-cols-1 gap-1 sm:grid-cols-1 xl:grid-cols-1">
//             {filteredItems.map((item) => {
//               const Icon = item.icon;

//               return (
//                 <article
//                   key={item.id}
//                   className="group rounded-2xl border border-white/10 bg-[#141920] p-5 transition duration-200 hover:-translate-y-1 hover:border-white/20 hover:bg-[#191F28]"
//                 >
//                   <div className="mb-5 flex items-center justify-between">
//                     <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-gray-300 transition group-hover:text-blue-300">
//                       <Icon size={21} />
//                     </div>

//                     {item.favorite && (
//                       <Star
//                         size={17}
//                         className="fill-amber-400 text-amber-400"
//                       />
//                     )}
//                   </div>

//                   <h3 className="font-semibold text-gray-100">
//                     {item.title}
//                   </h3>

//                   <p className="mt-1 text-sm leading-6 text-gray-500">
//                     {item.description}
//                   </p>

//                   <div className="mt-5 border-t border-white/10 pt-1">
//                     <span className="text-xs text-gray-500">
//                       {item.type}
//                     </span>
//                   </div>
//                 </article>
//               );
//             })}
//           </div>
//         ) : (
//           <div className="flex min-h-64 flex-col items-center justify-center rounded-2xl border border-dashed border-white/10 text-center">
//             <Search size={30} className="mb-1 text-gray-600" />
//             <h3 className="font-medium text-gray-300">
//               No items found
//             </h3>
//             <p className="mt-1 text-sm text-gray-500">
//               Try another search or choose a different category.
//             </p>
//           </div>
//         )}
        
//       </main>
//     </div>
//   );
// };

// export default Library;


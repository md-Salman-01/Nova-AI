import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Sidebar from "./component/Sidebar";
import Library from "./component/Library";
import Setting from "./component/Setting";
import Home from "./component/Home";
import Archived from "./component/Archived";
import History from "./component/History";
import Login from "./component/Login";
import logo from "./assets/chatbot.png";
import "./App.css";


function App() {
  return (

    <div className="flex h-screen overflow-hidden bg-zinc-950">

      <aside className="w-64 bg-[#4D403A]/30 p-5 shrink-0 border-r border-white/15">
        <img src={logo} alt="Nova-AI" className="mb-8 h-20 w-100 rounded-2xl object-cover" />
        
        <Sidebar />
      </aside>

      <main className=" h-screen min-w-0 flex-1 overflow-y-auto">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/archived" element={<Archived />} />
          <Route path="/library" element={<Library />} />
          <Route path="/history" element={<History />} />
          <Route path="/setting" element={<Setting/>} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </main>

    </div>
  );
}

export default App;
import React from "react";
import {Clock,Sparkles,Scroll,SmilePlus,Gem,SunSnow,Users,FileUp,Link2,MessageCircleWarning,CircleQuestionMark,MapPinned,} from "lucide-react";

const settings = [
  {
    title: "Account",
    items: [
      { name: "Usage Limit", symbol : ">" , icon: Clock },
      { name: "Upgrade to Nova AI Plus", symbol : ">" , icon: Sparkles },
    ],
  },
  {
    title: "Preferences",
    items: [
      { name: "Skills", symbol : ">" , icon: Scroll },
      { name: "Avatar", symbol : ">" , icon: SmilePlus },
      { name: "Gems", symbol : ">" , icon: Gem },
      { name: "Theme", symbol : ">" , icon: SunSnow },
      { name: "Personal Information", symbol : ">" , icon: Users },
    ],
  },
  {
    title: "Data & Privacy",
    items: [
      { name: "Help", symbol : ">" ,icon: CircleQuestionMark },
      { name: "Location",symbol : ">", icon: MapPinned },
      { name: "Send Feedback", symbol : ">", icon: MessageCircleWarning },
      { name: "Your Public Link", symbol : ">", icon: Link2 },
      { name: "Import Memory to Nova", symbol : ">", icon: FileUp },
    ],
  },
];

const Setting = () => {
  return (

    <div className="min-h-screen w-full font-orbitron bg-[#4D403A]/30 text-[#E3E3E3]">

      <div className="min-h-screen w-[80%] pt-9 ml-9">
      <h1 className="text-4xl font-bold">Settings</h1>
      <p className="mt-2 p-1">Customize your experience. Unlock your possibilities</p>

      <div className="mt-2 w-[60%] rounded-xl p-5 border border-white/10">

        {settings.map((section) => (
          <div key={section.title} className="mb-6 flex flex-col gap-3">

            <p className="text-[#E3E3E3] mt-2 opacity-40">
              {section.title}
            </p>

            {section.items.map((item) => {
              const Icon = item.icon;

              return (
                <>
                <a
                  key={item.name}
                  href="#"
                  className="h-12 ml-5 mt-1 flex items-center gap-3 rounded-xl px-3 py-2 text-sm border border-[#EEEBD9]/10
                  hover:bg-black/40 transition-all duration-200"
                >
                  <Icon size={18} />
                  <span>{item.name}</span>
                  <span className="ml-auto">{item.symbol}</span>
                </a>

                </>
              );
            })}

          </div>
        ))}

      </div>
      </div>
    </div>
  );
};

export default Setting;
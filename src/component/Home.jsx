
import { useState } from "react";
import { useChat } from "@ai-sdk/react";
import { DefaultChatTransport } from "ai";
import { useNavigate } from "react-router-dom"
import { Mic, Sparkles, Moon , LogIn} from "lucide-react";
import Logo from "../assets/Logo.png";


function Home() {

  const [question, setQuestion] = useState("");

  const navigate = useNavigate();

  const {
    messages,
    sendMessage,
    status,
    error,
  } = useChat({
    transport: new DefaultChatTransport({
      api: "http://localhost:3001/api/chat",
    }),
  });

  const loading =
    status === "submitted" || status === "streaming";

  async function askQuestion(event) {
    event.preventDefault();

    const text = question.trim();

    if (!text || loading) return;

    setQuestion("");

    try {
      await sendMessage({ text });
    } catch (err) {
      console.error("Nova AI request failed:", err);
    }
  }

  return (
    <div className="flex h-full flex-col bg-[#4D403A]/30 text-[#E3E3E3]">

      {/* Header */}
      <header className="mt-5 flex h-12 items-center justify-between pl-10">
        <select className="h-9 w-40 rounded-md border border-white/20 pl-4 font-orbitron text-[#E3E3E3] 
         hover:bg-black/40 transition-all duration-200 cursor-pointer">
          <option className="bg-black">Nova AI</option>
          <option className="bg-black">Gemini Flash</option>
        </select>

        <div className="mr-5 flex items-center gap-4">

          <button
              type="button"
              onClick={() => navigate("/login")}
              className="flex items-center gap-2 rounded-lg bg-[#0d32ac] px-4 py-1 font-orbitron text-[#E3E3E3]"
              >
              <LogIn size={15} />
              Log-In
          </button>

          <button type="button" aria-label="Dark mode">
            <Moon size={24} />
          </button>
        </div>
      </header>

      
          {/* Chat messages */}
          <div className="mx-auto w-[53%] max-w-3xl flex-1 space-y-5 overflow-y-auto p-5 mb-1 rounded-3xl border border-[#E3E3E3]/5">

            {messages.length === 0 && (
              <div className="flex h-full items-center flex-col justify-baseline">
                <img src={Logo} alt="Nova-AI" className="h-60 w-60 mt-15 flex bg-transparent rounded-2xl object-cover " />
                <h1 className="text-center mt-4 font-orbitron text-5xl font-bold text-[#E3E3E3]">
                  Welcome to Nova-Ai</h1>
                  <p className="mt-4 text-xl font-orbitronhttp://localhost:3001/api/chat">Your intelligent assistant, ready to explore.</p>
              </div>
            )}

            {messages.map((message) => {
              const isUser = message.role === "user";

              return (
                <div
                  key={message.id}
                  className={`flex w-full items-start gap-3 ${
                    isUser ? "justify-end" : "justify-start"
                  }`}
                >
                  {/* AI icon on the left */}
                  {!isUser && (
                    <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-black text-yellow-300">
                      <Sparkles size={18} />
                    </div>
                  )}

                  {/* Message bubble */}
                  <div
                    className={`w-fit max-w-[80%] break-words px-4 py-3 ${
                      isUser
                        ? "rounded-3xl bg-[#29282E] text-white"
                        : "rounded-2xl bg-[#0a0a0b] text-[#E3E3E3]"
                    }`}
                  >
                    {message.parts?.map((part, index) =>
                      part.type === "text" ? (
                        <p
                          key={index}
                          className="whitespace-pre-wrap break-words leading-relaxed"
                        >
                          {part.text}
                        </p>
                      ) : null
                    )}
                  </div>
                </div>
              );
            })}

            {loading && (
              <div className="flex items-center gap-3">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-black text-yellow-300">
                  <Sparkles size={18} />
                </div>
                <p className="animate-pulse text-sm text-[#E3E3E3]">
                  Nova AI is thinking...
                </p>
              </div>
            )}

            {error && (
              <div className="ml-1 rounded-xl w-[40%] bg-red-950 p-3 text-red-300">
                <p className="font-bold">Chat error</p>
                <p>{error.message}</p>
              </div>
            )}
          </div>


      {/* Message input */}

      <form
        onSubmit={askQuestion}
        className="h-[8%] w-[50%] flex max-w-3xl mt-1 mb-6 mx-auto 
        items-center justify-center rounded-3xl border border-white/20 bg-black/20"
      >
        <input
          value={question}
          onChange={(event) => setQuestion(event.target.value)}
          placeholder="Ask Nova AI anything..."
          aria-label="Your message"
          className="h-full min-w-0 flex-1 bg-transparent px-4 outline-none"
        />

        <button
          type="button"
          aria-label="Voice input"
          className="mr-1 rounded-full p-2 hover:bg-zinc-700"
          onClick={() => {
            console.log("Voice input is not implemented yet.");
          }}
        >
          <Mic size={20} />
        </button>

        <button
          type="submit"
          disabled={loading || !question.trim()}
          className="rounded-full bg-white px-5 py-3 font-semibold text-black disabled:opacity-50"
        >
          {loading ? "Thinking..." : "Ask"}
        </button>
      </form>
      </div>
  );
}

export default Home;

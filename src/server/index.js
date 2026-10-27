import express from "express";
import cors from "cors";
import "dotenv/config";
import { createOpenAI } from "@ai-sdk/openai";
import { convertToModelMessages, streamText } from "ai";

const app = express();

app.use(cors());
app.use(express.json());

const openai = createOpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

app.post("/api/chat", async (req, res) => {
  try {
    const result = streamText({
      model: openai("gpt-4o-mini"),
      messages: await convertToModelMessages(req.body.messages),
      onError: ({ error }) => console.error("Stream error:", error),
    });

    result.pipeUIMessageStreamToResponse(res);
  } catch (error) {
    console.error("Chat error:", error);
    if (!res.headersSent) res.status(500).json({ error: "Chat request failed." });
  }
});

app.listen(3001, () => {
  console.log("Nova AI server running on port 3001");
});







import { GoogleGenAI } from "@google/genai";

// IMPORTANT: Do not expose the API key in the frontend code.
// This uses process.env.API_KEY, which is expected to be set in the
// deployment environment (e.g., Vercel environment variables).
const API_KEY = process.env.API_KEY;

if (!API_KEY) {
  throw new Error("API_KEY environment variable not set.");
}

const ai = new GoogleGenAI({ apiKey: API_KEY });

const model = 'gemini-2.5-flash';

export async function generateViralScript(originalScript: string): Promise<string> {
  const prompt = `
    You are an expert viral scriptwriter specializing in curiosity-driven content for social media like TikTok, Instagram Reels, and YouTube Shorts. Your task is to transform the provided script into a highly engaging piece of content in Brazilian Portuguese.

    Follow these steps precisely:
    1.  **Translate to Portuguese:** If the original script is in English, translate it to flawless Brazilian Portuguese. If it's already in Portuguese, proceed to the next step.
    2.  **Create a Powerful Hook:** Start the output with a very strong, attention-grabbing hook (1-2 short sentences). This hook must create immediate curiosity or an emotional connection. This MUST be the very first part of your response.
    3.  **Rewrite the Body:** Rewrite the main script to be dynamic, conversational, and fast-paced. Use simple language, short sentences, and storytelling techniques. Preserve all original information and key points, but present them in a much more captivating way. Add suspense and build-up where possible.
    4.  **Add a Call-to-Action (CTA):** Conclude with a clear and concise call-to-action. For example: "Curtiu? Siga para mais!" or "Gostou da dica? Deixe seu like e siga para não perder a próxima!"

    **CRITICAL INSTRUCTIONS:**
    -   The final output must ONLY be the rewritten script text in Brazilian Portuguese.
    -   DO NOT include any titles, labels, or prefixes like "Hook:", "Script:", or "CTA:".
    -   The entire output must flow as a single, seamless, ready-to-use script.
    -   Do not add any explanations or comments about your process.

    Here is the original script:
    ---
    ${originalScript}
    ---
  `;

  try {
    const response = await ai.models.generateContent({
      model: model,
      contents: prompt,
    });
    
    if (response.text) {
      return response.text.trim();
    } else {
      throw new Error("The API returned an empty response.");
    }
  } catch (error) {
    console.error("Error calling Gemini API:", error);
    throw new Error("Failed to communicate with the AI model. Please check your API key and network connection.");
  }
}


import { GoogleGenAI } from "@google/genai";

let ai: GoogleGenAI | null = null;

const getAIClient = () => {
  if (!ai) {
    const apiKey = process.env.API_KEY;
    if (!apiKey) {
      console.warn("Gemini API Key is missing provided via process.env.API_KEY");
      return null;
    }
    try {
      ai = new GoogleGenAI({ apiKey });
    } catch (error) {
      console.error("Failed to initialize Gemini client:", error);
      return null;
    }
  }
  return ai;
};

export const getCarRecommendation = async (userPrompt: string) => {
  const client = getAIClient();

  if (!client) {
    return "O consultor virtual está em manutenção no momento. Por favor, entre em contato diretamente com nossa equipe.";
  }

  try {
    const response = await client.models.generateContent({
      model: "gemini-2.0-flash",
      contents: `Você é um especialista em BMW da MG Power. Recomende uma BMW baseada nesse perfil: "${userPrompt}". 
      Fale de forma luxuosa, técnica e persuasiva. Mantenha a resposta curta (máximo 150 palavras).`,
      config: {
        temperature: 0.7,
        topP: 0.95,
      },
    });
    return response.text;
  } catch (error) {
    console.error("Error calling Gemini:", error);
    return "Desculpe, nosso assistente virtual está indisponível no momento. Mas nossas BMWs continuam acelerando forte!";
  }
};

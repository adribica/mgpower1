
import { GoogleGenAI, Type } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export const getCarRecommendation = async (userPrompt: string) => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
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

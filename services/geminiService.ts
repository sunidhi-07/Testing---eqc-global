
import { GoogleGenAI, GenerateContentResponse } from "@google/genai";

// Use the getAssistantResponse function to interact with the Gemini API.
export const getAssistantResponse = async (userMessage: string) => {
  // Always use process.env.API_KEY directly for initialization as per developer guidelines.
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: userMessage,
      config: {
        systemInstruction: `You are the EQC Global AI Assistant. 
        EQC Global is a performance-driven consultancy for Corporates and NGOs.
        Core mission: Unlock & elevate human potential through Emotional Intelligence (EQ).
        Your tone is professional, empathetic, and future-ready.
        Services: Workshops (SEL, art-based), Enterprise Solutions (CMM mapping, ROI models), Courses (4 Levels: Beginner to Masters), Counselling (REBT, CBT), and Social Impact (Sustainability).
        Direct users to 'info@beyondeq.org' or our contact form for inquiries.
        Keep responses under 3 sentences unless asked for details.`,
        temperature: 0.7,
      },
    });

    // Directly access the .text property of GenerateContentResponse as per guidelines (it's a property, not a method).
    return response.text;
  } catch (error) {
    console.error("Gemini AI Error:", error);
    return "I'm currently recalibrating my EQ models. Please contact info@beyondeq.org for direct assistance!";
  }
};

export const editImage = async (base64Image: string, mimeType: string, prompt: string) => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

  try {
    const response: GenerateContentResponse = await ai.models.generateContent({
      model: 'gemini-2.5-flash-image',
      contents: {
        parts: [
          {
            inlineData: {
              data: base64Image.split(',')[1] || base64Image, // Handle data URL or raw base64
              mimeType: mimeType,
            },
          },
          {
            text: prompt,
          },
        ],
      },
    });

    let editedImageBase64 = "";
    let responseText = "";

    if (response.candidates && response.candidates[0].content.parts) {
      for (const part of response.candidates[0].content.parts) {
        if (part.inlineData) {
          editedImageBase64 = `data:${part.inlineData.mimeType};base64,${part.inlineData.data}`;
        } else if (part.text) {
          responseText = part.text;
        }
      }
    }

    return { editedImageBase64, responseText };
  } catch (error) {
    console.error("Gemini Image Edit Error:", error);
    throw error;
  }
};

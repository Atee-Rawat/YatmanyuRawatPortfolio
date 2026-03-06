const { GoogleGenerativeAI } = require('@google/generative-ai');

async function listModels() {
    try {
        const apiKey = "AIzaSyCUohU2tC-VG0YKFp03AcxmajkvAmKxhls";

        console.log('Fetching available models...');
        const url = `https://generativelanguage.googleapis.com/v1beta/models?key=${apiKey}`;
        const response = await fetch(url);
        const data = await response.json();

        if (data.models) {
            console.log("AVAILABLE MODELS:");
            data.models.forEach(m => {
                if (m.supportedGenerationMethods.includes("generateContent")) {
                    console.log("- " + m.name);
                }
            });
        } else {
            console.log("Unexpected response:", data);
        }

    } catch (e) {
        console.error("Global error:", e);
    }
}

listModels();

const { GoogleGenerativeAI } = require('@google/generative-ai');

async function checkModels() {
  try {
    const apiKey = "AIzaSyCUohU2tC-VG0YKFp03AcxmajkvAmKxhls";

    const genAI = new GoogleGenerativeAI(apiKey);
    console.log('Fetching models...');
    try {
      const model = genAI.getGenerativeModel({ model: "gemini-pro" });
      const res = await model.generateContent("hello");
      console.log("SUCCESS gemini-pro:", res.response.text());
    } catch (e) {
      console.error("ERROR gemini-pro:", e.message);
    }

    try {
      const model2 = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
      const res2 = await model2.generateContent("hello");
      console.log("SUCCESS 1.5-flash:", res2.response.text());
    } catch (e) {
      console.error("ERROR 1.5-flash:", e.message);
    }
  } catch (e) {
    console.error("Global error:", e);
  }
}

checkModels();

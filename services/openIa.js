import dotenv from "dotenv";
dotenv.config();

import fs from "fs";
import path from "path";

import OpenAI from "openai";
const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export async function aks(question) {
  if (!question) throw new Error("No question provided.");

  if (!question) {
    throw new Error("No question provided.");
  }

  const dataset = getDatasetFromFile("1766200681450-vollare.livrodiarios.json");

  const prompt = `
    Você é um analista de dados.

    Aqui está o dataset:
    ${dataset}

    Agora responda à seguinte pergunta:
    "${question}"
`;

  try {
    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: prompt }],
      temperature: 0.2,
    });
    return completion.choices[0].message.content;
  } catch (error) {
    console.error(error);
    throw new Error("Error calling OpenAI.");
  }
}

function getDatasetFromFile(filename) {
  const filePath = path.resolve(process.cwd(), "upload/file", filename);

  if (!fs.existsSync(filePath)) {
    throw new Error("Arquivo não encontrado");
  }

  return fs.readFileSync(filePath, "utf-8");
}

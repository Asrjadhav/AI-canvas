import * as dotenv from "dotenv";
import { createError } from "../error.js";
import { Configuration, OpenAIApi } from "openai";
import cloudinary from "cloudinary";

dotenv.config();

// Setup open ai api key
if (!process.env.OPENAI_API_KEY) {
  throw new Error("Missing OpenAI API key");
}

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

// Controller to generate Image

export const generateImage = async (req, res, next) => {
  try {
    const { prompt } = req.body;

    const response = await openai.createImage({
      prompt,
      n: 1,
      size: "1024x1024",
      response_format: "b64_json",
    });
    const generatedImage = response.data.data[0].b64_json;
    const dataUri = `data:image/png;base64,${generatedImage}`;

    // Upload to Cloudinary
    const uploaded = await cloudinary.v2.uploader.upload(dataUri, {
      folder: "ai-images",
    });
    return res.status(200).json({ photo: uploaded.secure_url });
  } catch (error) {
    next(
      createError(
        error.status,
        error?.response?.data?.error?.message || error?.message
      )
    );
  }
};
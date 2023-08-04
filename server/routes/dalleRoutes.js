import express from "express";
import * as dotenv from "dotenv";
import { Configuration, OpenAIApi } from "openai";
dotenv.config();

const router = express.Router();

const configuration = new Configuration({
  apiKey: "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",
});

const Openai = new OpenAIApi(configuration);

router.route("/").get((req, res) => {
  res.send("I am Dallee");
});

router.route("/").post(async (req, res) => {
  try {
    const { prompt } = req.body;
    const aiResponse = await Openai.createImage({
      prompt,
      n: "1",
      size: "1024x1024",
      response_format: "b64_json",
    });
    const image = aiResponse.data.data[0].b64_json;
    res.status(200).json({ photo: image });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .send(error?.response.data.error.message || "Something went wrong");
  }
});

export default router;

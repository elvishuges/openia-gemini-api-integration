import { aks } from "../services/openIa.js";

const getAskOpenIa = async (req, res) => {
  try {
    const { question } = req.body;

    const answer = await aks(question);
    return res.status(200).json({ status: false, data: answer });
  } catch (error) {
    console.log("Error", error);
  }
};

export { getAskOpenIa };

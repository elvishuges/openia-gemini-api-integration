import { aks } from "../services/openIa.js";

const getAskOpenIa = async (req, res) => {
  try {
    console.log("1111");

    const { question } = req.body;

    const answer = await aks(question);
    return res.status(200).json({ status: false, data: answer });
  } catch (error) {
    console.log("Error", error);
  }
};

export { getAskOpenIa };

const uploadFile = async (req, res) => {
  try {
    res.json({ message: "File uploaded successfully!" });
  } catch (error) {
    console.log("Error upload", error);
  }
};

export { uploadFile };

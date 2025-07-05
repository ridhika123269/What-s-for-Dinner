const express = require("express");
const multer = require("multer");
const axios = require("axios");
const cors = require("cors");
const fs = require("fs");
const path = require("path");

const app = express();
const port = 5000;

// Enable CORS
app.use(cors());

// Configure Multer to store uploaded files temporarily
const upload = multer({ dest: "uploads/" });

// Endpoint to upload image
app.post("/api/upload-image", upload.single("image"), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: "No file uploaded" });
    }

    // Read the file and convert to base64
    const imagePath = path.join(__dirname, req.file.path);
    const imageBuffer = fs.readFileSync(imagePath);
    const base64Image = imageBuffer.toString("base64");

    // Call Spoonacular API
    const response = await axios.post(
      `https://api.spoonacular.com/food/images/analyze`,
      {
        image: base64Image
      },
      {
        headers: { "Content-Type": "application/json" },
        params: {
          apiKey: "1a61b0965c3e4d81bc29f00b3eab277f" // Your API key
        }
      }
    );

    // Clean up: remove the temp file
    fs.unlinkSync(imagePath);

    // Return the recognized ingredients
    res.json(response.data);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to process image" });
  }
});

// Start server
app.listen(port, () => {
  console.log(`Backend server listening at http://localhost:${port}`);
});

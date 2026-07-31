import express from "express";
import cors from "cors";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const app = express();

const PORT = process.env.PORT || 5000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(cors());
app.use(express.json());

app.use(express.static(path.join(__dirname, "dist")));

app.get("/api/messages", (req, res) => {
  const filePath = path.join(__dirname, "messages.json");

  if (!fs.existsSync(filePath)) {
    return res.json([]);
  }

  const messages = JSON.parse(
    fs.readFileSync(filePath, "utf8")
  );

  res.json(messages);
});

app.post("/api/contact", (req, res) => {
  const {
    name,
    email,
    subject,
    message,
  } = req.body;

  if (
    !name ||
    !email ||
    !subject ||
    !message
  ) {
    return res.status(400).json({
      success: false,
      message: "Tous les champs sont obligatoires.",
    });
  }

  const emailRegex =
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailRegex.test(email)) {
    return res.status(400).json({
      success: false,
      message: "Adresse e-mail invalide.",
    });
  }

  const filePath = path.join(
    __dirname,
    "messages.json"
  );

  let messages = [];

  if (fs.existsSync(filePath)) {
    messages = JSON.parse(
      fs.readFileSync(filePath, "utf8")
    );
  }

  messages.push({
    id: Date.now(),
    name,
    email,
    subject,
    message,
    createdAt: new Date().toISOString(),
  });

  fs.writeFileSync(
    filePath,
    JSON.stringify(messages, null, 2)
  );

  res.json({
    success: true,
    message:
      "Votre message a été envoyé avec succès.",
  });
});

app.get("*", (req, res) => {
  res.sendFile(
    path.join(__dirname, "dist", "index.html")
  );
});

app.listen(PORT, () => {
  console.log(
    `Serveur démarré sur le port ${PORT}`
  );
});
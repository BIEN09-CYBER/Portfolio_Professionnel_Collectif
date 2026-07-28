import express from "express";
import cors from "cors";
import fs from "fs";

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// Route tès
app.get("/", (req, res) => {
  res.send("Backend Portfolio ap mache!");
});

// POST /api/contact
app.post("/api/contact", (req, res) => {
  const { name, email, subject, message } = req.body;

  if (!name || !email || !subject || !message) {
    return res.status(400).json({
      success: false,
      message: "Tout chan yo obligatwa.",
    });
  }

  let messages = [];

  if (fs.existsSync("./messages.json")) {
    const data = fs.readFileSync("./messages.json", "utf8");
    messages = JSON.parse(data);
  }

  messages.push({
    id: Date.now(),
    name,
    email,
    subject,
    message,
    date: new Date().toISOString(),
  });

  fs.writeFileSync("./messages.json", JSON.stringify(messages, null, 2));

  res.json({
    success: true,
    message: "Mesaj anrejistre avèk siksè.",
  });
});

// GET /api/messages
app.get("/api/messages", (req, res) => {
  if (!fs.existsSync("./messages.json")) {
    return res.json([]);
  }

  const data = fs.readFileSync("./messages.json", "utf8");
  res.json(JSON.parse(data));
});

app.listen(PORT, () => {
  console.log(`Serveur démarré sur http://localhost:${PORT}`);
});
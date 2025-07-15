const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

// Helper to generate a random integer between min and max (inclusive)
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// POST /spin endpoint
app.post("/spin", (req, res) => {
  try {
    const WIN_PROBABILITY = 0.1; // 10%
    let slots = [];
    let isWin = false;
    if (Math.random() < WIN_PROBABILITY) {
      // Win: all 3 slots are the same
      const value = getRandomInt(1, 10);
      slots = [value, value, value];
      isWin = true;
    } else {
      // Lose: all 3 slots are different
      const values = [];
      while (values.length < 3) {
        const val = getRandomInt(1, 10);
        if (!values.includes(val)) {
          values.push(val);
        }
      }
      slots = values;
      isWin = false;
    }
    res.json({ slots, isWin });
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

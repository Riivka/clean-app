import express from 'express';
const app = express();

app.get('/hello', (req, res) => {
  res.json({ message: "Hello from the backend!" });
});

if (process.env.VERCEL !== '1') {
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`API server listening on http://localhost:${PORT}`);
  });
}

// Change this line:
module.exports = app;
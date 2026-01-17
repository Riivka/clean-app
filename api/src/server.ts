import express from 'express';
const app = express();

// Route path is just /hello; Vercel rewrites /api/hello to this
app.get('/hello', (req, res) => {
  res.json({ message: "Hello from the backend!" });
});

// Only listen if not running on Vercel
if (process.env.VERCEL !== '1') {
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`API server listening on http://localhost:${PORT}`);
  });
}

export default app;


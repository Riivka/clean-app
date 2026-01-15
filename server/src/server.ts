import express from 'express';
const app = express();


app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});

// Option A: Specific path
app.get('/api/hello', (req, res) => {
  res.json({ message: "Hello from the backend!" });
});

// Option B: The "Catch-All" (Safer for monorepos)
// This ensures any request hitting this function gets handled
// app.use((req, res) => {
//   res.json({ 
//     message: "Backend is working!",
//     pathReceived: req.path 
//   });
// });

export default app;
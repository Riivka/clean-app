import type { VercelRequest, VercelResponse } from '@vercel/node';

/**
 * Sends an HTTP 200 response with a JSON greeting message.
 */
export default function handler(req: VercelRequest, res: VercelResponse) {
  res.status(200).json({ message: "Hello from the backend! hi hi" });
}
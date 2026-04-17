import express from 'express';
import cors from 'cors';
import { createServer as createViteServer } from 'vite';
import path from 'node:path';

async function startServer() {
  const app = express();
  const port = Number(process.env.PORT || 3000);

  app.use(cors());
  app.use(express.json({ limit: '2mb' }));

  app.get('/api/health', (_req, res) => {
    res.json({ ok: true, app: 'robo-hpa-lab' });
  });

  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (_req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(port, '0.0.0.0', () => {
    console.log(`robo-hpa-lab running on http://localhost:${port}`);
  });
}

startServer();

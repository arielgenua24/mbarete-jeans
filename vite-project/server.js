import express from 'express';
import path from 'path';
import cors from 'cors';
import { fileURLToPath } from 'url';
import fs from 'fs/promises';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

app.use(cors());
app.use(express.json()); // Parse incoming JSON payloads
app.use(express.static('dist')); // Asumiendo que 'dist' es tu directorio de archivos estáticos

app.use('/images', express.static(path.join(__dirname, 'images')));
app.use('/home', express.static(path.join(__dirname, 'home')));


app.get('/home', async (req, res) => {
  try {
    const filePath = path.join(__dirname, 'home', 'index.html');
    const content = await fs.readFile(filePath, 'utf-8');
    res.send(content);
  } catch (error) {
    console.error('Error al leer el archivo home.html:', error);
    res.status(500).send('Error interno del servidor');
  }
});



app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "dist", "index.html"));
});

app.listen(3000, () => {
  console.log(`Servidor corriendo en el puerto ${3000}`);
});
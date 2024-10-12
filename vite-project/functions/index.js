import functions from 'firebase-functions';
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


// Redirección de la raíz a /home
app.get('/', (req, res) => {
  res.redirect('/home');
});

// Servir archivos estáticos de la aplicación React
app.use(express.static('dist')); //middleware que toma todos los estaticos de react 

// Servir archivos estáticos para /home
app.use('/home', express.static(path.join(__dirname, 'home')));
app.use('/images', express.static(path.join(__dirname, 'images')));


// Rutas específicas para la aplicación React
app.get(["/jeans", "/cart"], (req, res) => {
  res.sendFile(path.join(__dirname, "dist", "index.html"));
}); 


// Manejar otras rutas de la aplicación React
app.get('/react-app/*', (req, res) => {
  res.sendFile(path.join(__dirname, "dist", "index.html"));
});

// Manejar rutas para la aplicación home
app.get('/home/*', async (req, res) => {
  try {
    const filePath = path.join(__dirname, 'home', "index.html");
    const content = await fs.readFile(filePath, 'utf-8');
    res.send(content);
  } catch (error) {
    console.error('Error al leer el archivo home.html:', error);
    res.status(500).send('Error interno del servidor');
  }
});

// Ruta de fallback
app.get('*', (req, res) => {
  res.status(404).send('Página no encontrada');
});

export const firebaseApp = functions.https.onRequest(app);

// firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import firebaseConfig from '../firebaseConfig'; // Importa tu configuración

// Inicializar Firebase
const app = initializeApp(firebaseConfig);
console.log(app)

// Obtener servicios
const db = getFirestore(app);

// Exportar servicios
export { db };
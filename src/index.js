// src/index.js - Arquivo principal de entrada
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './components/App';

// Importa o Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
// Importa estilos customizados
import './styles/main.scss';

// Obtém os dados do PHP através da variável global
const dadosProdutos = window.dadosIniciais || [];

// Renderiza o componente principal
const container = document.getElementById('app-root');
const root = createRoot(container);
root.render(<App produtos={dadosProdutos} />);

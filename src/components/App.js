// src/components/App.js - Componente principal
import React, { useState } from 'react';
import ProdutoCard from './ProdutoCard';
import CarrinhoCompras from './CarrinhoCompras';

const App = ({ produtos }) => {
  const [carrinho, setCarrinho] = useState([]);
  const [filtro, setFiltro] = useState('');
  
  // Adiciona produto ao carrinho
  const adicionarAoCarrinho = (produto) => {
    const itemExistente = carrinho.find(item => item.id === produto.id);
    
    if (itemExistente) {
      // Se já existe, aumenta a quantidade
      setCarrinho(carrinho.map(item => 
        item.id === produto.id 
          ? {...item, quantidade: item.quantidade + 1} 
          : item
      ));
    } else {
      // Se não existe, adiciona com quantidade 1
      setCarrinho([...carrinho, { ...produto, quantidade: 1 }]);
    }
  };
  
  // Remove produto do carrinho
  const removerDoCarrinho = (produtoId) => {
    setCarrinho(carrinho.filter(item => item.id !== produtoId));
  };
  
  // Filtra produtos pelo nome
  const produtosFiltrados = produtos.filter(produto => 
    produto.nome.toLowerCase().includes(filtro.toLowerCase())
  );
  
  return (
    <div className="row">
      <div className="col-md-8">
        <div className="mb-4">
          <input 
            type="text" 
            className="form-control" 
            placeholder="Buscar produtos..." 
            value={filtro}
            onChange={(e) => setFiltro(e.target.value)}
          />
        </div>
        
        <h2 className="mb-3">Nossos Produtos</h2>
        <div className="row row-cols-1 row-cols-md-2 g-4">
          {produtosFiltrados.map(produto => (
            <div className="col" key={produto.id}>
              <ProdutoCard 
                produto={produto} 
                adicionarAoCarrinho={adicionarAoCarrinho} 
              />
            </div>
          ))}
        </div>
      </div>
      
      <div className="col-md-4">
        <CarrinhoCompras 
          itens={carrinho} 
          removerItem={removerDoCarrinho} 
        />
      </div>
    </div>
  );
};

export default App;
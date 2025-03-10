// src/components/ProdutoCard.js - Componente para exibir um produto
import React from 'react';

const ProdutoCard = ({ produto, adicionarAoCarrinho }) => {
  const { nome, preco, estoque } = produto;
  
  return (
    <div className="card h-100">
      <div className="card-body">
        <h5 className="card-title">{nome}</h5>
        <h6 className="card-subtitle mb-2 text-muted">
          R$ {preco.toFixed(2)}
        </h6>
        <p className="card-text">
          Estoque: {estoque} unidades
        </p>
        <button 
          className="btn btn-primary" 
          onClick={() => adicionarAoCarrinho(produto)}
          disabled={estoque === 0}
        >
          Adicionar ao Carrinho
        </button>
      </div>
    </div>
  );
};

export default ProdutoCard;
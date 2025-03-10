// src/components/CarrinhoCompras.js - Componente do carrinho
import React from 'react';

const CarrinhoCompras = ({ itens, removerItem }) => {
    // Calcula o valor total do carrinho
    const total = itens.reduce((acc, item) =>
        acc + (item.preco * item.quantidade), 0);

    return (
        <div className="card sticky-top" style={{ top: '1rem' }}>
            <div className="card-header bg-primary text-white">
                <h5 className="mb-0">Carrinho de Compras</h5>
            </div>
            <div className="card-body">
                {itens.length === 0 ? (
                    <p className="text-muted">Seu carrinho está vazio</p>
                ) : (
                    <>
                        <ul className="list-group mb-3">
                            {itens.map(item => (
                                <li key={item.id} className="list-group-item d-flex justify-content-between lh-sm">
                                    <div>
                                        <h6 className="my-0">{item.nome}</h6>
                                        <small className="text-muted">
                                            {item.quantidade} x R$ {item.preco.toFixed(2)}
                                        </small>
                                    </div>
                                    <div>
                                        <span className="text-muted">
                                            R$ {(item.quantidade * item.preco).toFixed(2)}
                                        </span>
                                        <button
                                            className="btn btn-sm btn-danger ms-2"
                                            onClick={() => removerItem(item.id)}
                                        >
                                            X
                                        </button>
                                    </div>
                                </li>
                            ))}
                        </ul>

                        <div className="d-flex justify-content-between">
                            <h5>Total</h5>
                            <h5>R$ {total.toFixed(2)}</h5>
                        </div>

                        <button className="btn btn-success w-100 mt-3">
                            Finalizar Compra
                        </button>
                    </>
                )}
            </div>
        </div>
    );
};

export default CarrinhoCompras;
<?php
// Simulando dados que viriam de um banco de dados
$produtos = [
    ['id' => 1, 'nome' => 'Smartphone XYZ', 'preco' => 1299.99, 'estoque' => 15],
    ['id' => 2, 'nome' => 'Notebook Ultra', 'preco' => 4500.00, 'estoque' => 8],
    ['id' => 3, 'nome' => 'Smart TV 55"', 'preco' => 3200.00, 'estoque' => 12],
    ['id' => 4, 'nome' => 'Fone de Ouvido Bluetooth', 'preco' => 299.90, 'estoque' => 30],
    ['id' => 5, 'nome' => 'Câmera Digital Pro', 'preco' => 2100.50, 'estoque' => 5]
];

// Converte para JSON para passar ao JavaScript
$produtosJson = json_encode($produtos);
?>

<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Loja Virtual - PHP + React + Bootstrap</title>
    <!-- No ambiente de produção, estes seriam os arquivos gerados pelo Webpack -->
    <link rel="stylesheet" href="./dist/css/main.3237c9a39221fc9b37d6.css">
</head>
<body>
    <div class="container py-4">
        <header class="pb-3 mb-4 border-bottom">
            <h1 class="display-5 fw-bold">Loja Virtual</h1>
            <p class="lead">Exemplo de integração PHP + React + Bootstrap com Webpack</p>
        </header>

        <!-- Contêiner onde o React será montado -->
        <div id="app-root"></div>
        
        <!-- Passando dados do PHP para o React -->
        <script>
            // Esta variável será acessível globalmente para o React
            window.dadosIniciais = <?php echo $produtosJson; ?>;
        </script>
        
        <!-- No ambiente de produção, este seria o arquivo gerado pelo Webpack -->
        <script src="./dist/js/bundle.4debf016c6a5360a2964.js"></script>
    </div>
</body>
</html>
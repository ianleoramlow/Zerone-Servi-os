document.getElementById('orcamentoForm').addEventListener('submit', function(e) {
    e.preventDefault();

    // Capturar os dados do formulário
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const telefone = document.getElementById('telefone').value;
    const descricao = document.getElementById('descricao').value;

    // Montar a mensagem para o WhatsApp
    const mensagem = `Olá, gostaria de solicitar um orçamento.%0A%0A` +
                     `*Nome*: ${nome}%0A` +
                     `*Email*: ${email}%0A` +
                     `*Telefone*: ${telefone}%0A` +
                     `*Descrição do Orçamento*: ${descricao}`;

    // Redirecionar para o WhatsApp
    const url = `https://api.whatsapp.com/send?phone=554830357198&text=${mensagem}`;
    window.open(url, '_blank');
});
const services = [
    'Impressão Digital',
    'Manutenção de Equipamentos',
    'Recarga de Cartuchos',
    'Revelação de Fotos',
    'Impressão 3D',
    'Video Game',
    'Video Game - Limpeza',
    'Video Game - Manutenção',
    'Video Game - Venda de Acessórios',
    'Video Game - Vendas de novos e usados',
    'Celular/Tablet',
    'Celular/Tablet - Formatação',
    'Celular/Tablet - Manutenção',
    'Celular/Tablet - Instalação de Software',
    'Celular/Tablet - Troca de componentes internos',
    'Celular/Tablet - Limpeza química',
    'Celular/Tablet - Troca de Tela',
    'Celular/Tablet - Vendas de Novos e Usados',
    'Celular/Tablet - Vendas de Acessórios',
    'Computador/Notebook',
    'Computador/Notebook - Limpeza',
    'Computador/Notebook - Manutenção',
    'Computador/Notebook - Formatação',
    'Computador/Notebook - Montagem de Computador',
    'Computador/Notebook - Instalação de Software',
    'Computador/Notebook - Manutenção Para Rede',
    'Serviços/Documentos',
    'Serviços/Documentos - Segunda Via (CELESC/CASAN/TELEFONE)',
    'Serviços/Documentos - Elaboração de Currículo',
    'Serviços/Documentos - Serviço de Despachante',
    'Serviços/Documentos - Elaboração de Documentos (Contratos, Recibos e etc)',
    'Outros',
    'Outros - Cópia/ Até A3',
    'Outros - Impressão/ Até A3',
    'Outros - Digitalização/ Até A4',
    'Outros - Plastificação/ Até A3',
    'Outros - Encadernação/ Até A3',
    'Outros - Revelação de foto',
    'Outros - Foto 3x4'
];

// Função para exibir as sugestões
document.getElementById('search-bar').addEventListener('input', function() {
    const input = this.value.toLowerCase();
    const suggestionsBox = document.getElementById('suggestions');
    suggestionsBox.innerHTML = '';
    
    if (input) {
        const filteredServices = services.filter(service => service.toLowerCase().includes(input));
        filteredServices.forEach(service => {
            const suggestion = document.createElement('div');
            suggestion.textContent = service;
            suggestion.addEventListener('click', function() {
                // Preencher o campo de descrição
                document.getElementById('descricao').value = `Serviço: ${service}`;
                suggestionsBox.innerHTML = '';
                suggestionsBox.style.display = 'none';
                
                // Redirecionar para o formulário de orçamento
                window.location.href = '#orcamento';
            });
            suggestionsBox.appendChild(suggestion);
        });
        suggestionsBox.style.display = 'block';
    } else {
        suggestionsBox.style.display = 'none';
    }
});

// Ocultar as sugestões quando clicar fora da barra de pesquisa
document.addEventListener('click', function(event) {
    const searchBar = document.getElementById('search-bar');
    const suggestionsBox = document.getElementById('suggestions');
    if (!searchBar.contains(event.target) && !suggestionsBox.contains(event.target)) {
        suggestionsBox.style.display = 'none';
    }
});


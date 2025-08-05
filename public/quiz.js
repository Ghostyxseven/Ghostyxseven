 // Classes para estruturar as perguntas e temas
        class Pergunta {
            constructor(
                pergunta,
                opcoes,
                respostaCorreta
            ) {
                this.pergunta = pergunta;
                this.opcoes = opcoes;
                this.respostaCorreta = respostaCorreta;
            }
        }
        
        class Tema {
            constructor(
                nome,
                perguntas
            ) {
                this.nome = nome;
                this.perguntas = perguntas;
            }
        }

        // Seus dados de perguntas e temas
        const cinemaClassico = new Tema("🎬 Cinema Clássico", [
            new Pergunta("Qual é o nome do navio no filme \"Titanic\"?", ["Queen Mary", "Titanic", "Britannic", "Poseidon"], "Titanic"),
            new Pergunta("Quem interpreta Forrest Gump?", ["Brad Pitt", "Tom Cruise", "Tom Hanks", "Leonardo DiCaprio"], "Tom Hanks"),
            new Pergunta("Em que ano foi lançado \"O Poderoso Chefão\"?", ["1972", "1980", "1965", "1990"], "1972"),
            new Pergunta("Qual diretor é conhecido por \"Psicose\" e \"Os Pássaros\"?", ["Stanley Kubrick", "Alfred Hitchcock", "Steven Spielberg", "Francis Ford Coppola"], "Alfred Hitchcock"),
            new Pergunta("\"Casablanca\" se passa durante qual guerra?", ["Primeira Guerra Mundial", "Guerra Fria", "Segunda Guerra Mundial", "Guerra do Vietnã"], "Segunda Guerra Mundial"),
            new Pergunta("Quem é o vilão em \"O Silêncio dos Inocentes\"?", ["Hannibal Lecter", "Norman Bates", "Darth Vader", "Jack Torrance"], "Hannibal Lecter"),
            new Pergunta("Qual filme tem a frase \"Frankly, my dear, I don't give a damn\"?", ["Casablanca", "E o Vento Levou", "Cidadão Kane", "Ben-Hur"], "E o Vento Levou"),
            new Pergunta("\"A Noviça Rebelde\" é ambientado em qual país?", ["Alemanha", "França", "Áustria", "Suíça"], "Áustria"),
            new Pergunta("Quantos filmes compõem a trilogia original de Star Wars?", ["3", "4", "6", "9"], "3"),
            new Pergunta("Qual filme venceu o Oscar de Melhor Filme em 1994?", ["Um Sonho de Liberdade", "Forrest Gump", "Pulp Fiction", "Quatro Casamentos e um Funeral"], "Forrest Gump"),
        ]);
        
        const literatura = new Tema("📚 Literatura", [
            new Pergunta("Quem escreveu \"Dom Quixote\"?", ["William Shakespeare", "Miguel de Cervantes", "Camões", "Machado de Assis"], "Miguel de Cervantes"),
            new Pergunta("Personagem principal de \"O Pequeno Príncipe\":", ["Um aviador", "Um rei", "Um menino de outro planeta", "Um cientista"], "Um menino de outro planeta"),
            new Pergunta("Autor de \"1984\" e \"A Revolução dos Bichos\":", ["George Orwell", "Aldous Huxley", "Ray Bradbury", "Arthur C. Clarke"], "George Orwell"),
            new Pergunta("Em qual país nasceu Harry Potter?", ["EUA", "Inglaterra", "Escócia", "Irlanda"], "Inglaterra"),
            new Pergunta("Personagem que vive em Baker Street, 221B:", ["Dr. House", "Sherlock Holmes", "James Bond", "Hercule Poirot"], "Sherlock Holmes"),
            new Pergunta("\"Romeu e Julieta\" é uma obra de:", ["Victor Hugo", "William Shakespeare", "Dante Alighieri", "Oscar Wilde"], "William Shakespeare"),
            new Pergunta("Qual dessas é uma obra de Machado de Assis?", ["Iracema", "Dom Casmurro", "Senhora", "O Guarani"], "Dom Casmurro"),
            new Pergunta("Livro onde animais assumem o controle de uma fazenda:", ["A Revolução dos Bichos", "A Ilha do Dr. Moreau", "O Senhor das Moscas", "Moby Dick"], "A Revolução dos Bichos"),
            new Pergunta("Quem é o autor de \"As Crônicas de Nárnia\"?", ["C.S. Lewis", "J.K. Rowling", "Tolkien", "Rick Riordan"], "C.S. Lewis"),
            new Pergunta("Nome do detetive criado por Agatha Christie:", ["Sherlock Holmes", "Poirot", "Dupin", "Watson"], "Poirot"),
        ]);
        
        const curiosidades = new Tema("❓ Curiosidades Gerais", [
            new Pergunta("Qual é o maior animal terrestre?", ["Elefante-africano", "Urso-pardo", "Rinoceronte", "Girafa"], "Elefante-africano"),
            new Pergunta("Qual é o metal líquido à temperatura ambiente?", ["Ferro", "Mercúrio", "Prata", "Estanho"], "Mercúrio"),
            new Pergunta("Quantos planetas existem no sistema solar (oficialmente)?", ["8", "9", "7", "10"], "8"),
            new Pergunta("Em que país se localiza a Torre Eiffel?", ["Itália", "França", "Inglaterra", "Alemanha"], "França"),
            new Pergunta("Qual é o menor osso do corpo humano?", ["Esterno", "Fêmur", "Estribo", "Rádio"], "Estribo"),
            new Pergunta("Qual gás os humanos respiram?", ["Hidrogênio", "Gás Carbônico", "Oxigênio", "Nitrogênio"], "Oxigênio"),
            new Pergunta("O Sol é uma:", ["Estrela", "Planeta", "Lua", "Galáxia"], "Estrela"),
            new Pergunta("Qual país tem o formato de uma bota?", ["Grécia", "Espanha", "Itália", "México"], "Itália"),
            new Pergunta("Qual é a capital da Austrália?", ["Sydney", "Melbourne", "Canberra", "Brisbane"], "Canberra"),
            new Pergunta("Quem pintou a \"Mona Lisa\"?", ["Van Gogh", "Leonardo da Vinci", "Picasso", "Michelangelo"], "Leonardo da Vinci"),
        ]);
        
        const jogos = new Tema("🎮 Jogos e Cultura Gamer", [
            new Pergunta("Qual personagem é conhecido por resgatar princesas em jogos?", ["Sonic", "Mario", "Link", "Donkey Kong"], "Mario"),
            new Pergunta("\"The Legend of Zelda\" é exclusivo de qual empresa?", ["Sony", "Microsoft", "Nintendo", "Sega"], "Nintendo"),
            new Pergunta("Em \"Minecraft\", o que explode quando se aproxima de você?", ["Creeper", "Zumbi", "Slime", "Esqueleto"], "Creeper"),
            new Pergunta("Qual é o nome do criador do jogo \"Tetris\"?", ["Alexey Pajitnov", "Shigeru Miyamoto", "Markus Persson", "Gabe Newell"], "Alexey Pajitnov"),
            new Pergunta("O jogo \"Among Us\" se passa em:", ["Um castelo", "Uma nave espacial", "Um navio pirata", "Uma prisão"], "Uma nave espacial"),
            new Pergunta("Qual é a arma inicial clássica em \"Counter-Strike\"?", ["AK-47", "Glock", "Desert Eagle", "UMP"], "Glock"),
            new Pergunta("Personagem principal da série \"Halo\":", ["Master Chief", "Shepard", "Samus", "Kratos"], "Master Chief"),
            new Pergunta("Jogo onde se usa cartas para batalhar:", ["League of Legends", "Clash Royale", "Fortnite", "Valorant"], "Clash Royale"),
            new Pergunta("Qual desses é um battle royale?", ["GTA V", "The Sims", "Fortnite", "FIFA"], "Fortnite"),
            new Pergunta("No universo de \"Pokémon\", o Pikachu é de qual tipo?", ["Fogo", "Voador", "Elétrico", "Planta"], "Elétrico"),
        ]);
        
        const listaTemas = [cinemaClassico, literatura, curiosidades, jogos];

        // Variáveis de estado do quiz
        let nomeUsuario = "";
        let pontuacao = 0;
        let perguntaAtual = 0;
        let temaSelecionado;
        let quizActive = false;

        // Referências aos elementos do DOM
        const startScreen = document.getElementById('start-screen');
        const themeScreen = document.getElementById('theme-screen');
        const quizScreen = document.getElementById('quiz-screen');
        const resultScreen = document.getElementById('result-screen');
        const nomeInput = document.getElementById('nomeInput');
        const startBtn = document.getElementById('start-btn');
        const welcomeText = document.getElementById('welcome-text');
        const themeOptions = document.getElementById('theme-options');
        const questionText = document.getElementById('question-text');
        const optionsContainer = document.getElementById('options-container');
        const nextBtn = document.getElementById('next-btn');
        const scoreText = document.getElementById('score-text');
        const restartBtn = document.getElementById('restart-btn');
        const progressText = document.getElementById('progress-text');
        const messageBox = document.getElementById('messageBox');

        // Função para mostrar uma mensagem pop-up
        function showToast(message, isCorrect) {
            messageBox.textContent = message;
            messageBox.style.background = isCorrect ? '#28a745' : '#dc3545';
            messageBox.style.opacity = '1';
            messageBox.style.transform = 'translateX(-50%) translateY(0)';

            setTimeout(() => {
                messageBox.style.opacity = '0';
                messageBox.style.transform = 'translateX(-50%) translateY(-20px)';
            }, 2000);
        }

        // Função para iniciar o quiz com o nome do usuário
        function iniciarQuiz() {
            nomeUsuario = nomeInput.value.trim();
            if (nomeUsuario === "") {
                showToast("Por favor, digite seu nome.", false);
                return;
            }
            startScreen.classList.remove('active');
            themeScreen.classList.add('active');
            welcomeText.textContent = `Olá, ${nomeUsuario}! Escolha um tema:`;
            renderThemes();
        }

        // Função para renderizar os botões de tema
        function renderThemes() {
            themeOptions.innerHTML = '';
            listaTemas.forEach(tema => {
                const button = document.createElement('button');
                button.textContent = tema.nome;
                button.classList.add('quiz-btn');
                button.addEventListener('click', () => iniciarTema(tema));
                themeOptions.appendChild(button);
            });
        }
        
        // Função para iniciar um tema específico
        function iniciarTema(tema) {
            themeSelecionado = tema;
            themeScreen.classList.remove('active');
            quizScreen.classList.add('active');
            pontuacao = 0;
            perguntaAtual = 0;
            quizActive = true;
            mostrarPergunta();
        }

        // Função para exibir a pergunta e as opções
        function mostrarPergunta() {
            if (!quizActive) return;

            const currentQuestion = themeSelecionado.perguntas[perguntaAtual];
            questionText.textContent = currentQuestion.pergunta;
            optionsContainer.innerHTML = '';
            nextBtn.style.display = 'none';
            
            progressText.textContent = `Pergunta ${perguntaAtual + 1} de ${themeSelecionado.perguntas.length}`;

            currentQuestion.opcoes.forEach(option => {
                const button = document.createElement('button');
                button.textContent = option;
                button.classList.add('option-btn');
                button.addEventListener('click', () => verificarResposta(option, button));
                optionsContainer.appendChild(button);
            });
        }

        // Função para verificar a resposta selecionada
        function verificarResposta(selectedOption, button) {
            if (!quizActive) return;
            
            const currentQuestion = themeSelecionado.perguntas[perguntaAtual];
            const allOptions = optionsContainer.querySelectorAll('.option-btn');
            
            allOptions.forEach(btn => {
                btn.classList.add('disabled');
                btn.style.pointerEvents = 'none';
            });

            if (selectedOption === currentQuestion.respostaCorreta) {
                pontuacao++;
                button.classList.add('correct');
                showToast("Correto! 🎉", true);
            } else {
                button.classList.add('incorrect');
                allOptions.forEach(btn => {
                    if (btn.textContent === currentQuestion.respostaCorreta) {
                        btn.classList.add('correct');
                    }
                });
                showToast("Incorreto. 😔", false);
            }

            nextBtn.style.display = 'flex';
        }

        // Função para ir para a próxima pergunta ou finalizar o quiz
        function proximaPergunta() {
            perguntaAtual++;
            if (perguntaAtual < themeSelecionado.perguntas.length) {
                mostrarPergunta();
            } else {
                finalizarQuiz();
            }
        }

        // Função para exibir a tela de resultados
        function finalizarQuiz() {
            quizActive = false;
            quizScreen.classList.remove('active');
            resultScreen.classList.add('active');
            scoreText.textContent = `${pontuacao} de ${themeSelecionado.perguntas.length}`;
        }
        
        // Função para reiniciar o quiz
        function reiniciarQuiz() {
            resultScreen.classList.remove('active');
            startScreen.classList.add('active');
            nomeInput.value = "";
            nomeUsuario = "";
        }

        // Adiciona os event listeners aos botões
        startBtn.addEventListener('click', iniciarQuiz);
        nextBtn.addEventListener('click', proximaPergunta);
        restartBtn.addEventListener('click', reiniciarQuiz);
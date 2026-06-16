// ================================================================
//  BANCO DE DADOS – PERGUNTAS POR ANO
// ================================================================

const perguntasPorAno = {
    '4º Ano': [],
    '5º Ano': [],
    '6º Ano': [],
    '7º Ano': []
};

function addP(ano, pergunta, opcoes, correta, explicacao) {
    perguntasPorAno[ano].push({
        ano: ano,
        pergunta: pergunta,
        opcoes: opcoes,
        correta: correta,
        explicacao: explicacao || ''
    });
}

// ================================================================
//  FRASES ENCORAJADORAS DE GRANDES AUTORES/EDUCADORES
// ================================================================

const frasesInspiradoras = [
    { frase: 'A leitura é uma fonte inesgotável de prazer, mas por incrível que pareça, a quase totalidade não sente esta sede.', autor: 'Carlos Drummond de Andrade' },
    { frase: 'Ler é sonhar pela mão de outrem. Ler mal e por alto é libertar-se da mão que nos conduz. A leitura superficial é a preguiça de sonhar.', autor: 'Fernando Pessoa' },
    { frase: 'A educação é a arma mais poderosa que você pode usar para mudar o mundo.', autor: 'Nelson Mandela' },
    { frase: 'Educar é semear com sabedoria e colher com paciência.', autor: 'Augusto Cury' },
    { frase: 'O importante não é vencer todos os dias, mas lutar sempre.', autor: 'Waldemar Valle Martins' },
    { frase: 'A mente que se abre a uma nova ideia jamais voltará ao seu tamanho original.', autor: 'Albert Einstein' },
    { frase: 'O conhecimento é a única coisa que ninguém pode tirar de você.', autor: 'Sócrates' },
    { frase: 'Não basta saber, é preciso aplicar. Não basta querer, é preciso fazer.', autor: 'Johann Wolfgang von Goethe' },
    { frase: 'O verdadeiro analfabeto é aquele que não aprendeu a aprender.', autor: 'Paulo Freire' },
    { frase: 'A educação não transforma o mundo. A educação muda as pessoas. Pessoas transformam o mundo.', autor: 'Paulo Freire' },
    { frase: 'O homem que não lê bons livros não tem nenhuma vantagem sobre o homem que não sabe ler.', autor: 'Mark Twain' },
    { frase: 'O conhecimento é poder. A informação é libertadora. A educação é a premissa do progresso.', autor: 'Kofi Annan' },
    { frase: 'A leitura é para a mente o que o exercício é para o corpo.', autor: 'Joseph Addison' },
    { frase: 'Os livros são os mais silenciosos e constantes amigos; os mais acessíveis e sábios conselheiros; e os mais pacientes professores.', autor: 'Charles W. Eliot' },
    { frase: 'A educação é o movimento da escuridão para a luz.', autor: 'Allan Bloom' },
    { frase: 'Aprender é a única coisa que a mente nunca se cansa, nunca tem medo e nunca se arrepende.', autor: 'Leonardo da Vinci' }
];

// ================================================================
//  4º ANO – 40 perguntas
// ================================================================
addP('4º Ano', 'Qual gênero textual é usado para enviar um recado rápido a um amigo?',
    ['Bilhete', 'Notícia', 'Receita', 'Verbete'], 0, 'Bilhete é um gênero informal e breve.');
addP('4º Ano', 'Em uma notícia, qual parte responde "o que aconteceu"?',
    ['Título', 'Lead', 'Corpo', 'Assinatura'], 1, 'O lead contém as informações principais.');
addP('4º Ano', 'Qual destes textos tem a finalidade de ensinar a fazer algo?',
    ['Instrucional', 'Narrativo', 'Poético', 'Descritivo'], 0, 'Textos instrucionais apresentam procedimentos.');
addP('4º Ano', 'Em "O gato pulou do muro", a palavra "do" é a junção de:',
    ['de + o', 'da + o', 'de + a', 'em + o'], 0, '"Do" = preposição "de" + artigo "o".');
addP('4º Ano', 'Qual sinal de pontuação indica uma pergunta?',
    ['Ponto final', 'Interrogação', 'Exclamação', 'Vírgula'], 1, 'O "?" é usado em perguntas diretas.');
addP('4º Ano', 'Em uma carta, a saudação final como "Atenciosamente" é chamada de:',
    ['Introdução', 'Despedida', 'Assunto', 'Data'], 1, 'É o fecho ou despedida.');
addP('4º Ano', 'Qual palavra está escrita corretamente?',
    ['Casa', 'Caza', 'Kasa', 'Cassa'], 0, 'Casa – com "s" sonoro.');
addP('4º Ano', 'O que é um verbete?',
    ['Definição de palavra', 'Uma história longa', 'Um poema', 'Uma receita'], 0, 'Verbete é um texto de definição.');
addP('4º Ano', 'Em "Os meninos brincam", a palavra "meninos" está no:',
    ['Singular', 'Plural', 'Feminino', 'Aumentativo'], 1, 'Meninos = plural (mais de um).');
addP('4º Ano', 'Para que serve a vírgula em uma lista?',
    ['Separar itens', 'Indicar pergunta', 'Finalizar frase', 'Mostrar ênfase'], 0, 'Vírgula separa elementos de enumeração.');
addP('4º Ano', 'Qual gênero é usado para divulgar um produto?',
    ['Anúncio', 'Notícia', 'Conto', 'Bilhete'], 0, 'Anúncio publicitário tem objetivo comercial.');
addP('4º Ano', 'Em uma receita, a lista de ingredientes é um exemplo de:',
    ['Texto injuntivo', 'Texto narrativo', 'Texto poético', 'Texto descritivo'], 0, 'Receita é um texto injuntivo.');
addP('4º Ano', 'Qual destas palavras tem ditongo?',
    ['Pai', 'Mar', 'Sol', 'Lua'], 0, '"Pai" tem vogais "a" e "i" na mesma sílaba.');
addP('4º Ano', 'A palavra "avó" é acentuada por ser:',
    ['Paroxítona terminada em "o"', 'Oxítona', 'Proparoxítona', 'Monossílaba'], 0, 'Paroxítona terminada em "o" leva acento.');
addP('4º Ano', 'Em "Ela cantou lindamente", a palavra "lindamente" indica:',
    ['Modo', 'Lugar', 'Tempo', 'Quantidade'], 0, 'Advérbio de modo.');
addP('4º Ano', 'Qual a finalidade de um manual de instruções?',
    ['Explicar como usar algo', 'Contar uma história', 'Descrever um lugar', 'Dar opinião'], 0, 'Manual ensina o funcionamento.');
addP('4º Ano', 'A palavra "feliz" é um:',
    ['Substantivo', 'Adjetivo', 'Verbo', 'Pronome'], 1, 'Adjetivo expressa qualidade.');
addP('4º Ano', 'Em "João e Maria foram ao cinema", a conjunção "e" liga:',
    ['Termos da mesma função', 'Orações opostas', 'Ideias contrastantes', 'Finalidade'], 0, 'Liga termos coordenados.');
addP('4º Ano', 'Qual é o antônimo de "grande"?',
    ['Pequeno', 'Alto', 'Largo', 'Pesado'], 0, 'Antônimo = palavra de sentido contrário.');
addP('4º Ano', 'Qual das palavras é um verbo?',
    ['Correr', 'Corrida', 'Corredor', 'Correndo'], 0, 'Correr expressa ação.');
addP('4º Ano', 'Em uma notícia, o título deve ser:',
    ['Curto e atrativo', 'Longo e detalhado', 'Poético', 'Sem sentido'], 0, 'Título chama atenção e resume.');
addP('4º Ano', 'A frase "Que dia lindo!" expressa:',
    ['Admiração', 'Dúvida', 'Ordem', 'Pergunta'], 0, 'Ponto de exclamação expressa admiração/emoção.');
addP('4º Ano', 'Qual destes é um gênero digital?',
    ['E-mail', 'Carta', 'Telegrama', 'Ofício'], 0, 'E-mail é um gênero do ambiente digital.');
addP('4º Ano', 'Separação silábica correta de "fantástico":',
    ['fan-tás-ti-co', 'fa-ntás-ti-co', 'fan-tást-i-co', 'fant-ás-ti-co'], 0, 'Divisão silábica conforme regra.');
addP('4º Ano', 'A palavra "coração" tem quantas sílabas?',
    ['3', '4', '2', '5'], 0, 'Co-ra-ção = 3 sílabas.');
addP('4º Ano', 'Qual a função do ponto final?',
    ['Encerrar uma frase', 'Indicar pergunta', 'Mostrar surpresa', 'Separar itens'], 0, 'Ponto final indica pausa e encerramento.');
addP('4º Ano', 'Em "A casa de Maria é bonita", o termo "de Maria" indica:',
    ['Posse', 'Lugar', 'Tempo', 'Modo'], 0, 'Indica posse (a casa pertence a Maria).');
addP('4º Ano', 'Qual palavra é um substantivo próprio?',
    ['Brasil', 'País', 'Cidade', 'Rio'], 0, 'Brasil é nome próprio.');
addP('4º Ano', 'No gênero "convite", qual informação é essencial?',
    ['Data e local do evento', 'História do anfitrião', 'Preço do ingresso', 'Poesia'], 0, 'Convite informa evento, data, local.');
addP('4º Ano', 'Qual dessas palavras é um advérbio de tempo?',
    ['Ontem', 'Aqui', 'Bem', 'Muito'], 0, 'Ontem indica tempo.');
addP('4º Ano', 'A palavra "gato" no feminino é:',
    ['Gata', 'Gatoa', 'Gatona', 'Gatesse'], 0, 'Feminino de gato é gata.');
addP('4º Ano', 'Qual é o plural de "animal"?',
    ['Animais', 'Animáis', 'Animales', 'Animais'], 0, 'Animais com "s".');
addP('4º Ano', 'Acentuação correta:',
    ['Pássaro', 'Passaro', 'Páxaro', 'Passáro'], 0, 'Pássaro é proparoxítona.');
addP('4º Ano', 'Em "Ele é muito esperto", "esperto" é:',
    ['Adjetivo', 'Substantivo', 'Verbo', 'Pronome'], 0, 'Esperto = qualidade.');
addP('4º Ano', 'Qual palavra é um pronome pessoal?',
    ['Ele', 'Mesa', 'Correr', 'Bonito'], 0, 'Ele é pronome.');
addP('4º Ano', 'Qual é o sinônimo de "rápido"?',
    ['Veloz', 'Lento', 'Devagar', 'Parado'], 0, 'Rápido = veloz.');
addP('4º Ano', 'Em "Os livros são interessantes", o sujeito é:',
    ['Os livros', 'São', 'Interessantes', 'Os'], 0, 'Sujeito = Os livros (quem pratica a ação).');
addP('4º Ano', 'Qual dessas palavras tem dígrafo?',
    ['Chave', 'Casa', 'Sapo', 'Mala'], 0, 'CH é dígrafo (um único fonema).');
addP('4º Ano', 'Qual a função do substantivo?',
    ['Nomear seres e objetos', 'Indicar ação', 'Modificar', 'Ligar orações'], 0, 'Substantivo nomeia.');
addP('4º Ano', 'Qual é o coletivo de "abelhas"?',
    ['Enxame', 'Colmeia', 'Cardume', 'Alcateia'], 0, 'Enxame é coletivo de abelhas.');

// ================================================================
//  5º ANO – 40 perguntas
// ================================================================
addP('5º Ano', 'O que caracteriza um texto narrativo?',
    ['Presença de enredo e personagens', 'Uso de dados e gráficos', 'Instruções passo a passo', 'Definições de palavras'], 0,
    'Narração envolve história, personagens e conflito.');
addP('5º Ano', 'Qual a função da linguagem em um poema?',
    ['Poética', 'Referencial', 'Conativa', 'Fática'], 0, 'Função poética valoriza a forma e a estética.');
addP('5º Ano', 'Em "Maria estuda muito", o verbo é:',
    ['Estuda', 'Maria', 'Muito', 'estuda'], 0, 'Estuda expressa ação.');
addP('5º Ano', 'Qual é a diferença entre fato e opinião?',
    ['Fato é verificável; opinião é subjetiva', 'Não há diferença', 'Opinião é sempre verdadeira', 'Fato é subjetivo'], 0,
    'Fato é objetivo e comprovável; opinião é juízo de valor.');
addP('5º Ano', 'Em um texto argumentativo, o que é uma tese?',
    ['Ideia principal que se defende', 'O título do texto', 'A conclusão', 'Um exemplo'], 0, 'Tese é a posição defendida pelo autor.');
addP('5º Ano', 'Qual destes é um gênero do jornalismo?',
    ['Notícia', 'Poema', 'Bilhete', 'Receita'], 0, 'Notícia é um gênero jornalístico.');
addP('5º Ano', 'A palavra "livro" é um:',
    ['Substantivo concreto', 'Substantivo abstrato', 'Adjetivo', 'Advérbio'], 0, 'Livro é um objeto físico, substantivo concreto.');
addP('5º Ano', 'Em "Ela foi à praia", o acento grave indica:',
    ['Crase', 'Tonicidade', 'Mudança de sentido', 'Plural'], 0, 'Crase = fusão da preposição "a" com o artigo "a".');
addP('5º Ano', 'Qual é o plural de "pão"?',
    ['Pães', 'Pãos', 'Pães', 'Pãoes'], 0, 'O plural de pão é pães (irregular).');
addP('5º Ano', 'O que é um período composto?',
    ['Mais de uma oração', 'Uma única oração', 'Sem verbo', 'Apenas substantivos'], 0, 'Período composto tem duas ou mais orações.');
addP('5º Ano', 'Em "O carro vermelho é rápido", o adjetivo é:',
    ['Vermelho', 'Carro', 'Rápido', 'É'], 0, 'Vermelho é adjetivo.');
addP('5º Ano', 'Qual é a finalidade de um texto publicitário?',
    ['Persuadir o consumidor', 'Informar sobre fatos', 'Ensinar a fazer algo', 'Entreter'], 0, 'Publicidade visa persuadir.');
addP('5º Ano', 'A palavra "felicidade" é formada por:',
    ['Radical + sufixo', 'Prefixo + radical', 'Composição', 'Onomatopeia'], 0, 'Felic- (radical) + -idade (sufixo).');
addP('5º Ano', 'Em "Ele chegou cedo", "cedo" é:',
    ['Advérbio de tempo', 'Advérbio de modo', 'Advérbio de lugar', 'Adjetivo'], 0, 'Cedo indica tempo.');
addP('5º Ano', 'Qual a função dos dois-pontos em uma citação?',
    ['Introduzir a fala de alguém', 'Finalizar a frase', 'Indicar pergunta', 'Separar sílabas'], 0,
    'Dois-pontos introduzem uma citação ou fala.');
addP('5º Ano', 'O que é uma conjunção?',
    ['Palavra que liga orações ou termos', 'Palavra que nomeia', 'Palavra que modifica', 'Palavra que indica ação'], 0,
    'Conjunção tem função conectiva.');
addP('5º Ano', 'Em "Comprei frutas: maçã, pera e uva", a vírgula serve para:',
    ['Separar itens de uma lista', 'Indicar pausa', 'Finalizar', 'Mostrar surpresa'], 0, 'Vírgula separa elementos em enumeração.');
addP('5º Ano', 'Qual a diferença entre "porque" e "porquê"?',
    ['Conjunção vs. substantivo', 'Não há diferença', 'Um é verbo', 'Um é advérbio'], 0,
    '"Porque" é conjunção (causa); "porquê" é substantivo (motivo).');
addP('5º Ano', 'O que é um texto descritivo?',
    ['Detalha características de algo ou alguém', 'Conta uma história', 'Apresenta argumentos', 'Dá instruções'], 0,
    'Descrição foca em características e detalhes.');
addP('5º Ano', 'Qual é o sujeito em "Choveu muito ontem"?',
    ['Oração sem sujeito', 'Ontem', 'Muito', 'Choveu'], 0, 'Verbo "chover" é impessoal (sujeito inexistente).');
addP('5º Ano', 'Em "A menina bonita estudou", o predicado é:',
    ['estudou', 'A menina', 'bonita', 'A menina bonita'], 0, 'Predicado = aquilo que se diz do sujeito.');
addP('5º Ano', 'Qual é o antônimo de "alegre"?',
    ['Triste', 'Feliz', 'Contento', 'Animado'], 0, 'Triste é antônimo de alegre.');
addP('5º Ano', 'O que é um sinônimo?',
    ['Palavra de sentido semelhante', 'Palavra de sentido oposto', 'Palavra igual', 'Palavra inventada'], 0,
    'Sinônimos têm significados próximos.');
addP('5º Ano', 'Em "Vou ao mercado", a preposição é:',
    ['ao', 'Vou', 'mercado', 'ao mercado'], 0, '"Ao" = preposição "a" + artigo "o".');
addP('5º Ano', 'Qual é a função do advérbio?',
    ['Modificar verbo, adjetivo ou outro advérbio', 'Nomear seres', 'Ligar orações', 'Indicar ação'], 0,
    'Advérbio modifica outras palavras.');
addP('5º Ano', 'O que é um artigo?',
    ['Palavra que acompanha o substantivo', 'Palavra que indica ação', 'Palavra que liga', 'Palavra que modifica'], 0,
    'Artigo determina o substantivo.');
addP('5º Ano', 'Em "Os alunos estudaram", o verbo está no:',
    ['Pretérito perfeito', 'Presente', 'Futuro', 'Pretérito imperfeito'], 0, 'Estudaram = pretérito perfeito (ação concluída).');
addP('5º Ano', 'Qual é a função da interjeição?',
    ['Expressar emoções', 'Nomear objetos', 'Ligar orações', 'Modificar verbos'], 0, 'Interjeição exprime sentimentos.');
addP('5º Ano', 'O que é um dígrafo?',
    ['Duas letras com um só fonema', 'Duas vogais juntas', 'Duas consoantes', 'Uma letra com dois sons'], 0,
    'Dígrafo = duas letras representam um único som.');
addP('5º Ano', 'Em "Ela cantou bem", "bem" é:',
    ['Advérbio de modo', 'Advérbio de tempo', 'Advérbio de lugar', 'Adjetivo'], 0, 'Bem indica modo (como cantou).');
addP('5º Ano', 'O que é um texto injuntivo?',
    ['Instruir ou orientar o leitor', 'Narrar uma história', 'Descrever um lugar', 'Argumentar'], 0,
    'Texto injuntivo tem finalidade de orientar.');
addP('5º Ano', 'Em "Ele foi ao cinema e comprou pipoca", a conjunção "e" indica:',
    ['Adição', 'Oposição', 'Alternância', 'Conclusão'], 0, '"E" é uma conjunção aditiva.');
addP('5º Ano', 'Qual é a função do sujeito na oração?',
    ['Ser o ser sobre o qual se fala', 'Indicar a ação', 'Modificar o verbo', 'Complementar o verbo'], 0,
    'Sujeito é o tema da oração.');
addP('5º Ano', 'O que caracteriza uma crônica?',
    ['Relato curto do cotidiano', 'Texto longo de ficção', 'Artigo científico', 'Poema'], 0,
    'Crônica é um gênero que aborda o cotidiano de forma breve.');
addP('5º Ano', 'Em "Ele estava cansado", o verbo é:',
    ['de ligação', 'transitivo direto', 'transitivo indireto', 'intransitivo'], 0,
    '"Estava" é verbo de ligação (liga o sujeito ao predicativo).');
addP('5º Ano', 'Qual é a função do aposto?',
    ['Explicar ou especificar um termo', 'Complementar o verbo', 'Indicar posse', 'Modificar o sujeito'], 0,
    'Aposto dá explicação ou especificação a um termo.');
addP('5º Ano', 'O que é uma oração subordinada?',
    ['Oração que depende de outra', 'Oração principal', 'Oração sem verbo', 'Oração coordenada'], 0,
    'Oração subordinada tem dependência sintática de outra.');
addP('5º Ano', 'Em "Embora chovesse, fomos ao parque", a conjunção "embora" indica:',
    ['Concessão', 'Causa', 'Consequência', 'Finalidade'], 0, '"Embora" é conjunção concessiva.');
addP('5º Ano', 'Qual é a característica do gênero "resenha"?',
    ['Análise crítica de uma obra', 'Narração de fatos', 'Descrição de objetos', 'Instruções'], 0,
    'Resenha é um texto crítico sobre uma obra.');
addP('5º Ano', 'Em "O livro que li é interessante", a palavra "que" é:',
    ['Pronome relativo', 'Conjunção', 'Preposição', 'Advérbio'], 0, '"Que" retoma "livro" (pronome relativo).');

// ================================================================
//  6º ANO – 40 perguntas
// ================================================================
addP('6º Ano', 'O que caracteriza um artigo de opinião?',
    ['Defesa de um ponto de vista', 'Narração de fatos', 'Descrição de objetos', 'Instruções'], 0,
    'Artigo de opinião apresenta argumentos para defender uma tese.');
addP('6º Ano', 'Em "Se eu estudasse, passaria", a oração destacada expressa:',
    ['Condição', 'Causa', 'Consequência', 'Finalidade'], 0, '"Se eu estudasse" é uma oração condicional.');
addP('6º Ano', 'Qual é a diferença entre linguagem verbal e não verbal?',
    ['Verbal usa palavras; não verbal usa imagens/sons', 'Não há diferença', 'Verbal é mais importante', 'Não verbal é só desenho'],
    0, 'Linguagem verbal utiliza palavras; não verbal usa outros signos.');
addP('6º Ano', 'O que é coesão textual?',
    ['Conexão entre as partes do texto', 'O tema do texto', 'O título', 'A conclusão'], 0,
    'Coesão refere-se aos elementos que conectam o texto.');
addP('6º Ano', 'Em uma notícia, qual é a função do título?',
    ['Sintetizar e atrair o leitor', 'Dar detalhes', 'Concluir', 'Apresentar opinião'], 0,
    'Título resume e chama a atenção.');
addP('6º Ano', 'Qual é a característica do texto injuntivo?',
    ['Instruir ou orientar o leitor', 'Narrar uma história', 'Descrever um lugar', 'Argumentar'], 0,
    'Texto injuntivo tem finalidade de orientar.');
addP('6º Ano', 'Em "Ele foi ao cinema e comprou pipoca", a conjunção "e" indica:',
    ['Adição', 'Oposição', 'Alternância', 'Conclusão'], 0, '"E" é uma conjunção aditiva.');
addP('6º Ano', 'O que é um período simples?',
    ['Uma oração', 'Duas ou mais orações', 'Sem verbo', 'Com sujeito composto'], 0, 'Período simples tem apenas uma oração.');
addP('6º Ano', 'Em "A prova foi difícil, mas eu passei", a conjunção "mas" indica:',
    ['Oposição', 'Adição', 'Alternância', 'Conclusão'], 0, '"Mas" é uma conjunção adversativa (oposição).');
addP('6º Ano', 'Qual é a função do pronome relativo?',
    ['Retomar um termo anterior', 'Indicar posse', 'Perguntar', 'Exclamação'], 0,
    'Pronome relativo faz referência a um termo já mencionado.');
addP('6º Ano', 'O que é um verbo transitivo?',
    ['Verbo que exige complemento', 'Verbo sem complemento', 'Verbo de ligação', 'Verbo auxiliar'], 0,
    'Verbo transitivo precisa de complemento para completar o sentido.');
addP('6º Ano', 'Em "Maria, João e Pedro foram à festa", o sujeito é:',
    ['Maria, João e Pedro', 'Maria', 'Foram', 'Festa'], 0, 'Sujeito composto = Maria, João e Pedro.');
addP('6º Ano', 'Qual a diferença entre discurso direto e indireto?',
    ['Direto reproduz fala; indireto reporta', 'Não há diferença', 'Indireto é mais formal', 'Direto usa aspas'], 0,
    'Discurso direto transcreve a fala literalmente; indireto a reporta.');
addP('6º Ano', 'O que é um texto dissertativo-argumentativo?',
    ['Expõe e defende uma ideia', 'Conta uma história', 'Descreve um objeto', 'Dá instruções'], 0,
    'Texto dissertativo-argumentativo apresenta e defende um ponto de vista.');
addP('6º Ano', 'Em "Ele fez o trabalho rapidamente", o advérbio é:',
    ['rapidamente', 'fez', 'trabalho', 'Ele'], 0, 'Rapidamente é advérbio de modo.');
addP('6º Ano', 'Qual é a função do sujeito na oração?',
    ['Ser o ser sobre o qual se fala', 'Indicar a ação', 'Modificar o verbo', 'Complementar o verbo'], 0,
    'Sujeito é o tema da oração.');
addP('6º Ano', 'O que caracteriza uma crônica?',
    ['Relato curto do cotidiano', 'Texto longo de ficção', 'Artigo científico', 'Poema'], 0,
    'Crônica é um gênero que aborda o cotidiano de forma breve.');
addP('6º Ano', 'Em "Ele estava cansado", o verbo é:',
    ['de ligação', 'transitivo direto', 'transitivo indireto', 'intransitivo'], 0,
    '"Estava" é verbo de ligação (liga o sujeito ao predicativo).');
addP('6º Ano', 'Qual é a função do aposto?',
    ['Explicar ou especificar um termo', 'Complementar o verbo', 'Indicar posse', 'Modificar o sujeito'], 0,
    'Aposto dá explicação ou especificação a um termo.');
addP('6º Ano', 'O que é uma oração subordinada?',
    ['Oração que depende de outra', 'Oração principal', 'Oração sem verbo', 'Oração coordenada'], 0,
    'Oração subordinada tem dependência sintática de outra.');
addP('6º Ano', 'Em "Embora chovesse, fomos ao parque", a conjunção "embora" indica:',
    ['Concessão', 'Causa', 'Consequência', 'Finalidade'], 0, '"Embora" é conjunção concessiva.');
addP('6º Ano', 'Qual é a característica do gênero "resenha"?',
    ['Análise crítica de uma obra', 'Narração de fatos', 'Descrição de objetos', 'Instruções'], 0,
    'Resenha é um texto crítico sobre uma obra.');
addP('6º Ano', 'Em "O livro que li é interessante", a palavra "que" é:',
    ['Pronome relativo', 'Conjunção', 'Preposição', 'Advérbio'], 0, '"Que" retoma "livro" (pronome relativo).');
addP('6º Ano', 'O que é um vocativo?',
    ['Termo usado para chamar alguém', 'Sujeito da oração', 'Objeto direto', 'Predicativo'], 0,
    'Vocativo é um chamamento.');
addP('6º Ano', 'Qual é a função da pontuação na escrita?',
    ['Organizar e dar sentido ao texto', 'Enfeitar o texto', 'Substituir palavras', 'Criar rimas'], 0,
    'Pontuação organiza a estrutura e a leitura.');
addP('6º Ano', 'Em "Comprei um carro novo", o adjunto adnominal é:',
    ['novo', 'carro', 'Comprei', 'um'], 0, '"Novo" é adjunto adnominal (caracteriza o substantivo).');
addP('6º Ano', 'O que é um texto narrativo?',
    ['Conta uma história com enredo', 'Descreve um objeto', 'Dá instruções', 'Apresenta dados'], 0,
    'Narração envolve enredo, personagens e tempo.');
addP('6º Ano', 'Em "Ela correu muito", o verbo é:',
    ['Intransitivo', 'Transitivo direto', 'Transitivo indireto', 'De ligação'], 0,
    '"Correr" é intransitivo (não exige complemento).');
addP('6º Ano', 'Qual é a função da preposição?',
    ['Ligar palavras estabelecendo relação', 'Nomear seres', 'Indicar ação', 'Modificar'], 0,
    'Preposição estabelece relação entre termos.');
addP('6º Ano', 'O que é um texto multimodal?',
    ['Texto que combina várias linguagens', 'Texto apenas verbal', 'Texto apenas visual', 'Texto longo'], 0,
    'Multimodal usa linguagens diversas (imagem, som, texto).');
addP('6º Ano', 'Em "Ele trabalha e estuda", o verbo "trabalha" está no:',
    ['Presente do indicativo', 'Pretérito perfeito', 'Futuro', 'Pretérito imperfeito'], 0, 'Presente do indicativo.');
addP('6º Ano', 'Qual é a função da linguagem conativa?',
    ['Busca persuadir o interlocutor', 'Expressar emoções', 'Descrever objetos', 'Informar'], 0,
    'Função conativa (ou apelativa) tem foco no receptor.');
addP('6º Ano', 'O que é um texto de divulgação científica?',
    ['Texto que apresenta conhecimento científico de forma acessível', 'Artigo científico completo', 'Ficção', 'Poema'], 0,
    'Divulgação científica traduz a ciência para o público geral.');
addP('6º Ano', 'Em "Ele correu para o trabalho", o termo "para o trabalho" é:',
    ['Adjunto adverbial de lugar', 'Adjunto adverbial de tempo', 'Objeto direto', 'Predicativo'], 0,
    '"Para o trabalho" indica lugar (destino).');
addP('6º Ano', 'Qual é a função do vocativo?',
    ['Chamar ou invocar o interlocutor', 'Complementar o verbo', 'Modificar o sujeito', 'Indicar posse'], 0,
    'Vocativo é usado para chamar alguém.');
addP('6º Ano', 'O que é uma metáfora?',
    ['Comparação implícita entre dois termos', 'Comparação explícita', 'Exagero', 'Atribuição de características humanas'], 0,
    'Metáfora é uma comparação sem o uso de conectivos comparativos.');
addP('6º Ano', 'Em "O carro é novo", o predicativo do sujeito é:',
    ['novo', 'carro', 'é', 'O carro'], 0, '"Novo" caracteriza o sujeito "carro".');
addP('6º Ano', 'Qual é a função do sufixo?',
    ['Formar novas palavras a partir do radical', 'Indicar o gênero', 'Indicar número', 'Modificar o sentido'], 0,
    'Sufixo é colocado após o radical para formar novas palavras.');
addP('6º Ano', 'O que é intertextualidade?',
    ['Diálogo entre textos', 'Texto sem referências', 'Texto único', 'Texto sem contexto'], 0,
    'Intertextualidade é a relação entre diferentes textos.');
addP('6º Ano', 'Em "Ele trabalha e estuda", a conjunção "e" indica:',
    ['Adição', 'Oposição', 'Alternância', 'Conclusão'], 0, '"E" é aditiva.');

// ================================================================
//  7º ANO – 40 perguntas
// ================================================================
addP('7º Ano', 'O que caracteriza um texto argumentativo?',
    ['Defesa de uma tese com argumentos', 'Narração de fatos', 'Descrição de objetos', 'Instruções'], 0,
    'Texto argumentativo defende um ponto de vista com argumentos.');
addP('7º Ano', 'Em um artigo de opinião, a tese é:',
    ['A ideia central defendida', 'A conclusão', 'O título', 'Um exemplo'], 0, 'Tese é a posição defendida pelo autor.');
addP('7º Ano', 'O que é uma falácia argumentativa?',
    ['Um argumento inválido ou enganoso', 'Um argumento válido', 'Uma opinião', 'Um fato'], 0,
    'Falácia é um raciocínio aparentemente válido, mas incorreto.');
addP('7º Ano', 'Em uma resenha, o que é analisado?',
    ['A obra em si (livro, filme, etc.)', 'A opinião do autor', 'O preço da obra', 'A editora'], 0,
    'Resenha analisa criticamente uma obra.');
addP('7º Ano', 'Qual é a diferença entre fato e opinião em um texto?',
    ['Fato é comprovável; opinião é subjetiva', 'Não há diferença', 'Opinião é sempre falsa', 'Fato é subjetivo'], 0,
    'Fato é objetivo; opinião é juízo de valor.');
addP('7º Ano', 'O que é coesão referencial?',
    ['Uso de pronomes e sinônimos para retomar termos', 'Uso de conjunções', 'Uso de pontuação', 'Uso de parágrafos'], 0,
    'Coesão referencial usa mecanismos para retomar elementos do texto.');
addP('7º Ano', 'Em "O professor, que era jovem, explicou bem", a oração "que era jovem" é:',
    ['Subordinada adjetiva', 'Subordinada adverbial', 'Coordenada', 'Principal'], 0,
    '"Que era jovem" é uma oração subordinada adjetiva (caracteriza).');
addP('7º Ano', 'Qual é a função do parágrafo em um texto?',
    ['Organizar ideias em blocos de sentido', 'Enfeitar o texto', 'Criar rimas', 'Aumentar o texto'], 0,
    'Parágrafo organiza e estrutura as ideias.');
addP('7º Ano', 'Em uma dissertação, a introdução deve:',
    ['Apresentar o tema e a tese', 'Concluir o assunto', 'Dar exemplos', 'Descrever dados'], 0,
    'Introdução apresenta o tema e a tese a ser defendida.');
addP('7º Ano', 'O que é um advérbio de intensidade?',
    ['Indica a intensidade de uma ação', 'Indica lugar', 'Indica tempo', 'Indica modo'], 0,
    'Advérbio de intensidade (ex: muito, pouco) modifica a intensidade.');
addP('7º Ano', 'Em "Ele estuda para passar no vestibular", a oração "para passar" expressa:',
    ['Finalidade', 'Causa', 'Consequência', 'Condição'], 0, '"Para passar" indica finalidade.');
addP('7º Ano', 'Qual é a função do elemento "que" em "Quero que você venha"?',
    ['Conjunção integrante', 'Pronome relativo', 'Conjunção causal', 'Advérbio'], 0,
    '"Que" introduz uma oração subordinada substantiva.');
addP('7º Ano', 'O que é um texto expositivo?',
    ['Apresenta informações objetivas sobre um tema', 'Conta uma história', 'Defende uma opinião', 'Dá instruções'], 0,
    'Texto expositivo tem caráter informativo e objetivo.');
addP('7º Ano', 'Em "Choveu, portanto não fomos ao parque", a conjunção "portanto" indica:',
    ['Conclusão', 'Causa', 'Alternância', 'Oposição'], 0, '"Portanto" é conjunção conclusiva.');
addP('7º Ano', 'Qual é a diferença entre discurso direto e indireto?',
    ['Direto transcreve falas; indireto as reporta', 'Não há diferença', 'Indireto é mais subjetivo', 'Direto é mais formal'],
    0, 'Discurso direto é literal; indireto é relatado.');
addP('7º Ano', 'O que é um texto jornalístico?',
    ['Texto que informa sobre fatos atuais', 'Texto literário', 'Texto técnico', 'Texto publicitário'], 0,
    'Jornalismo tem como principal função informar.');
addP('7º Ano', 'Em "Apesar do trânsito, cheguei a tempo", a expressão "apesar de" indica:',
    ['Concessão', 'Causa', 'Consequência', 'Finalidade'], 0, '"Apesar de" é concessiva (ideia de contrariedade).');
addP('7º Ano', 'Qual é a função do prefixo?',
    ['Modificar o sentido da palavra radical', 'Indicar gênero', 'Indicar número', 'Formar o plural'], 0,
    'Prefixo é colocado antes do radical para modificar seu sentido.');
addP('7º Ano', 'O que é uma oração subordinada substantiva?',
    ['Oração que funciona como substantivo', 'Oração que modifica o verbo', 'Oração que indica tempo', 'Oração independente'],
    0, 'Oração substantiva exerce função de substantivo na oração principal.');
addP('7º Ano', 'Em "Ele é muito inteligente", o termo "muito" é:',
    ['Advérbio de intensidade', 'Advérbio de modo', 'Advérbio de tempo', 'Adjetivo'], 0, '"Muito" intensifica a qualidade.');
addP('7º Ano', 'Qual é a característica de um texto publicitário?',
    ['Persuasão e apelo ao consumo', 'Informação objetiva', 'Narração de fatos', 'Descrição detalhada'], 0,
    'Publicidade busca convencer o leitor a agir.');
addP('7º Ano', 'O que é uma metáfora?',
    ['Comparação implícita entre dois termos', 'Comparação explícita', 'Exagero', 'Atribuição de características humanas'], 0,
    'Metáfora é uma comparação sem o uso de conectivos comparativos.');
addP('7º Ano', 'Em "O carro é novo", o predicativo do sujeito é:',
    ['novo', 'carro', 'é', 'O carro'], 0, '"Novo" caracteriza o sujeito "carro".');
addP('7º Ano', 'Qual é a função do sufixo?',
    ['Formar novas palavras a partir do radical', 'Indicar o gênero', 'Indicar número', 'Modificar o sentido'], 0,
    'Sufixo é colocado após o radical para formar novas palavras.');
addP('7º Ano', 'O que é intertextualidade?',
    ['Diálogo entre textos', 'Texto sem referências', 'Texto único', 'Texto sem contexto'], 0,
    'Intertextualidade é a relação entre diferentes textos.');
addP('7º Ano', 'Em "Ele trabalha e estuda", o verbo "trabalha" está no:',
    ['Presente do indicativo', 'Pretérito perfeito', 'Futuro', 'Pretérito imperfeito'], 0, 'Presente do indicativo.');
addP('7º Ano', 'Qual é a função da linguagem conativa?',
    ['Busca persuadir o interlocutor', 'Expressar emoções', 'Descrever objetos', 'Informar'], 0,
    'Função conativa (ou apelativa) tem foco no receptor.');
addP('7º Ano', 'O que é um texto de divulgação científica?',
    ['Texto que apresenta conhecimento científico de forma acessível', 'Artigo científico completo', 'Ficção', 'Poema'], 0,
    'Divulgação científica traduz a ciência para o público geral.');
addP('7º Ano', 'Em "Ele correu para o trabalho", o termo "para o trabalho" é:',
    ['Adjunto adverbial de lugar', 'Adjunto adverbial de tempo', 'Objeto direto', 'Predicativo'], 0,
    '"Para o trabalho" indica lugar (destino).');
addP('7º Ano', 'Qual é a função do vocativo?',
    ['Chamar ou invocar o interlocutor', 'Complementar o verbo', 'Modificar o sujeito', 'Indicar posse'], 0,
    'Vocativo é usado para chamar alguém.');
addP('7º Ano', 'O que é um texto dissertativo?',
    ['Texto que expõe e defende uma ideia', 'Texto que conta uma história', 'Texto que descreve', 'Texto que instrui'], 0,
    'Dissertação expõe e defende um ponto de vista.');
addP('7º Ano', 'Em "Ele foi ao cinema ontem", o termo "ontem" é:',
    ['Advérbio de tempo', 'Advérbio de modo', 'Advérbio de lugar', 'Adjetivo'], 0, '"Ontem" indica tempo.');
addP('7º Ano', 'Qual é a função da vírgula em "João, o professor, chegou"?',
    ['Isolar um aposto', 'Separar itens de uma lista', 'Indicar pergunta', 'Finalizar a frase'], 0,
    'A vírgula isola o aposto explicativo.');
addP('7º Ano', 'O que é uma oração coordenada?',
    ['Oração independente sintaticamente', 'Oração subordinada', 'Oração sem verbo', 'Oração principal'], 0,
    'Coordenada é independente e não exerce função sintática em outra.');
addP('7º Ano', 'Em "Ele chegou e foi embora", o período é:',
    ['Composto por coordenação', 'Composto por subordinação', 'Simples', 'Complexo'], 0,
    'Período composto por coordenação (orações independentes).');
addP('7º Ano', 'Qual é a função do adjunto adverbial?',
    ['Circunstância (tempo, lugar, etc.)', 'Complementar o verbo', 'Caracterizar o substantivo', 'Indicar posse'], 0,
    'Adjunto adverbial expressa circunstância.');
addP('7º Ano', 'O que é um texto literário?',
    ['Texto com função estética e artística', 'Texto informativo', 'Texto técnico', 'Texto jornalístico'], 0,
    'Literatura tem função estética e artística.');
addP('7º Ano', 'Em "Estudei muito, mas não passei", a conjunção "mas" indica:',
    ['Oposição', 'Adição', 'Alternância', 'Conclusão'], 0, '"Mas" é adversativa (oposição).');
addP('7º Ano', 'Qual é a função da linguagem metalinguística?',
    ['O código explica ele mesmo', 'Persuadir o receptor', 'Expressar emoções', 'Descrever objetos'], 0,
    'Metalinguagem é quando a linguagem fala sobre si mesma.');
addP('7º Ano', 'O que é um texto de opinião?',
    ['Expressa o ponto de vista do autor', 'Relata fatos', 'Descreve objetos', 'Dá instruções'], 0,
    'Texto de opinião apresenta a visão do autor sobre um tema.');

// ================================================================
//  LÓGICA DO JOGO
// ================================================================

const TOTAL_PERGUNTAS = 20;
const TEMPO_POR_QUESTAO = 20;
const PERGUNTAS_POR_ANO = 5;

let perguntasJogo = [];
let indiceAtual = 0;
let acertos = 0;
let erros = 0;
let tempoRestante = TEMPO_POR_QUESTAO;
let timerInterval = null;
let respostaSelecionada = false;
let jogoFinalizado = false;

// Elementos DOM
const elPergunta = document.getElementById('pergunta');
const elOpcoes = document.getElementById('opcoes');
const elFeedback = document.getElementById('feedback');
const elBtnProximo = document.getElementById('btnProximo');
const elAcertos = document.getElementById('acertos');
const elErros = document.getElementById('erros');
const elQuestaoAtual = document.getElementById('questaoAtual');
const elTotalQuestoes = document.getElementById('totalQuestoes');
const elPercentual = document.getElementById('percentual');
const elBadge = document.getElementById('badgeAno');
const elBtnReset = document.getElementById('btnReset');
const elTimerBar = document.getElementById('timerBar');
const elTimerText = document.getElementById('timerText');
const elProgressBar = document.getElementById('progressBar');

// Mapeamento de cores para badges
const badgeColors = {
    '4º Ano': 'ano-4',
    '5º Ano': 'ano-5',
    '6º Ano': 'ano-6',
    '7º Ano': 'ano-7'
};

// ================================================================
//  SELECIONAR PERGUNTAS
// ================================================================

function selecionarPerguntas() {
    const anos = ['4º Ano', '5º Ano', '6º Ano', '7º Ano'];
    let selecionadas = [];

    for (const ano of anos) {
        const questoes = perguntasPorAno[ano] || [];
        const shuffled = shuffle([...questoes]);
        const selecionadasAno = shuffled.slice(0, PERGUNTAS_POR_ANO);
        selecionadas = [...selecionadas, ...selecionadasAno];
    }

    return shuffle(selecionadas);
}

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// ================================================================
//  FUNÇÕES DO JOGO
// ================================================================

function iniciarJogo() {
    if (timerInterval) {
        clearInterval(timerInterval);
        timerInterval = null;
    }

    perguntasJogo = selecionarPerguntas();
    indiceAtual = 0;
    acertos = 0;
    erros = 0;
    jogoFinalizado = false;
    respostaSelecionada = false;
    tempoRestante = TEMPO_POR_QUESTAO;

    elTotalQuestoes.textContent = TOTAL_PERGUNTAS;
    atualizarStats();
    exibirPergunta();
}

function exibirPergunta() {
    if (indiceAtual >= perguntasJogo.length || jogoFinalizado) {
        exibirResultado();
        return;
    }

    const q = perguntasJogo[indiceAtual];
    
    // Aplicar classe de cor ao badge
    elBadge.className = 'badge';
    const corClasse = badgeColors[q.ano] || 'ano-4';
    elBadge.classList.add(corClasse);
    elBadge.textContent = q.ano;

    elPergunta.textContent = q.pergunta;

    const letras = ['A', 'B', 'C', 'D'];
    elOpcoes.innerHTML = '';
    q.opcoes.forEach((texto, idx) => {
        const div = document.createElement('div');
        div.className = 'option';
        div.dataset.index = idx;
        div.innerHTML = `<span class="letter">${letras[idx]}</span> ${texto}`;
        div.addEventListener('click', () => selecionarResposta(idx));
        elOpcoes.appendChild(div);
    });

    elFeedback.className = 'feedback';
    elFeedback.textContent = '';
    elBtnProximo.classList.remove('show');
    respostaSelecionada = false;
    tempoRestante = TEMPO_POR_QUESTAO;

    atualizarStats();
    iniciarTimer();
}

function iniciarTimer() {
    if (timerInterval) {
        clearInterval(timerInterval);
    }

    atualizarTimerVisual();

    timerInterval = setInterval(() => {
        tempoRestante--;
        atualizarTimerVisual();

        if (tempoRestante <= 0) {
            clearInterval(timerInterval);
            timerInterval = null;
            if (!respostaSelecionada) {
                tempoEsgotado();
            }
        }
    }, 1000);
}

function atualizarTimerVisual() {
    const percentual = (tempoRestante / TEMPO_POR_QUESTAO) * 100;
    elTimerBar.style.width = `${Math.max(0, percentual)}%`;
    elTimerText.textContent = `${tempoRestante}s`;

    elTimerBar.className = 'timer-bar-fill';
    elTimerText.className = 'timer-text';

    if (tempoRestante <= 5) {
        elTimerBar.classList.add('red');
        elTimerText.classList.add('red');
    } else if (tempoRestante <= 10) {
        elTimerBar.classList.add('orange');
        elTimerText.classList.add('orange');
    } else if (tempoRestante <= 15) {
        elTimerBar.classList.add('yellow');
        elTimerText.classList.add('yellow');
    } else {
        elTimerBar.classList.add('blue');
        elTimerText.classList.add('blue');
    }
}

function tempoEsgotado() {
    if (respostaSelecionada) return;
    respostaSelecionada = true;

    const q = perguntasJogo[indiceAtual];
    const opcoes = document.querySelectorAll('.option');

    opcoes.forEach((opt, i) => {
        opt.classList.add('disabled', 'timed-out');
        if (i === q.correta) {
            opt.classList.add('correct');
        }
    });

    erros++;
    elFeedback.innerHTML = `
        <span class="timeout-text">⏱ Tempo esgotado!</span><br>
        <strong>Resposta correta:</strong> ${q.opcoes[q.correta]}.<br>
        ${q.explicacao || ''}
    `;
    elFeedback.classList.add('show');
    atualizarStats();
    elBtnProximo.classList.add('show');

    if (timerInterval) {
        clearInterval(timerInterval);
        timerInterval = null;
    }
}

function selecionarResposta(idx) {
    if (respostaSelecionada) return;
    respostaSelecionada = true;

    if (timerInterval) {
        clearInterval(timerInterval);
        timerInterval = null;
    }

    const q = perguntasJogo[indiceAtual];
    const opcoes = document.querySelectorAll('.option');
    const correta = q.correta;

    opcoes.forEach(opt => opt.classList.add('disabled'));

    opcoes.forEach((opt, i) => {
        if (i === correta) {
            opt.classList.add('correct');
        } else if (i === idx && idx !== correta) {
            opt.classList.add('wrong');
        }
    });

    if (idx === correta) {
        acertos++;
        elFeedback.innerHTML = `
            <span class="correct-text">✓ Correta!</span> ${q.explicacao || 'Boa!'}
        `;
    } else {
        erros++;
        elFeedback.innerHTML = `
            <span class="wrong-text">✗ Incorreta.</span><br>
            <strong>Resposta correta:</strong> ${q.opcoes[correta]}.<br>
            ${q.explicacao || ''}
        `;
    }
    elFeedback.classList.add('show');
    atualizarStats();
    elBtnProximo.classList.add('show');
}

function proximaPergunta() {
    if (!respostaSelecionada) return;
    indiceAtual++;
    exibirPergunta();
}

function atualizarStats() {
    elAcertos.textContent = acertos;
    elErros.textContent = erros;
    elQuestaoAtual.textContent = Math.min(indiceAtual + 1, TOTAL_PERGUNTAS);

    const totalRespondidas = acertos + erros;
    const percentual = totalRespondidas > 0 ? Math.round((totalRespondidas / TOTAL_PERGUNTAS) * 100) : 0;
    elPercentual.textContent = `${percentual}%`;
    elProgressBar.style.width = `${percentual}%`;
}

// ================================================================
//  GRÁFICO DE PIZZA
// ================================================================

function desenharGraficoPizza(acertos, erros) {
    const canvas = document.getElementById('pizzaChart');
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    const width = canvas.width;
    const height = canvas.height;
    const radius = Math.min(width, height) / 2 - 10;
    const centerX = width / 2;
    const centerY = height / 2;

    ctx.clearRect(0, 0, width, height);

    const total = acertos + erros;
    if (total === 0) {
        // Nenhuma questão respondida
        ctx.beginPath();
        ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI);
        ctx.fillStyle = '#333333';
        ctx.fill();
        ctx.fillStyle = '#888888';
        ctx.font = '14px Inter, sans-serif';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText('Aguardando...', centerX, centerY);
        return;
    }

    const acertosPercent = acertos / total;
    const errosPercent = erros / total;

    const startAngle = -Math.PI / 2;
    const acertosAngle = acertosPercent * 2 * Math.PI;
    const errosAngle = errosPercent * 2 * Math.PI;

    // Desenhar fatia de acertos (verde)
    ctx.beginPath();
    ctx.moveTo(centerX, centerY);
    ctx.arc(centerX, centerY, radius, startAngle, startAngle + acertosAngle);
    ctx.closePath();
    ctx.fillStyle = '#4ade80';
    ctx.fill();
    ctx.strokeStyle = '#1a1a1a';
    ctx.lineWidth = 2;
    ctx.stroke();

    // Desenhar fatia de erros (vermelho)
    ctx.beginPath();
    ctx.moveTo(centerX, centerY);
    ctx.arc(centerX, centerY, radius, startAngle + acertosAngle, startAngle + acertosAngle + errosAngle);
    ctx.closePath();
    ctx.fillStyle = '#f87171';
    ctx.fill();
    ctx.strokeStyle = '#1a1a1a';
    ctx.lineWidth = 2;
    ctx.stroke();

    // Borda branca ao redor
    ctx.beginPath();
    ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI);
    ctx.strokeStyle = '#333333';
    ctx.lineWidth = 2;
    ctx.stroke();

    // Porcentagem central
    ctx.fillStyle = '#e8e8e8';
    ctx.font = 'bold 22px Inter, sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    const percentualAcertos = Math.round(acertosPercent * 100);
    ctx.fillText(`${percentualAcertos}%`, centerX, centerY - 6);

    ctx.fillStyle = '#888888';
    ctx.font = '11px Inter, sans-serif';
    ctx.fillText('acertos', centerX, centerY + 20);
}

// ================================================================
//  EXIBIR RESULTADO
// ================================================================

function exibirResultado() {
    jogoFinalizado = true;
    if (timerInterval) {
        clearInterval(timerInterval);
        timerInterval = null;
    }

    const total = acertos + erros;
    const percentualAcertos = total > 0 ? Math.round((acertos / total) * 100) : 0;

    let mensagem = '';
    if (percentualAcertos >= 80) mensagem = '🏆 Excelente! Você domina o conteúdo!';
    else if (percentualAcertos >= 60) mensagem = '👏 Bom trabalho! Continue praticando!';
    else if (percentualAcertos >= 40) mensagem = '📚 Estude mais e tente novamente!';
    else mensagem = '💪 Não desista! Revisando os conteúdos você melhora!';

    // Selecionar frase inspiradora aleatória
    const fraseEscolhida = frasesInspiradoras[Math.floor(Math.random() * frasesInspiradoras.length)];

    elPergunta.textContent = '';
    elBadge.className = 'badge';
    elBadge.textContent = '🏁 FINALIZADO';

    elOpcoes.innerHTML = `
        <div class="result-area">
            <div class="sub-score">${mensagem}</div>
            <div class="big-score">${percentualAcertos}%</div>
            <div class="detail-stats">
                <div>
                    <div class="label">Acertos</div>
                    <div class="value green">${acertos}</div>
                </div>
                <div>
                    <div class="label">Erros</div>
                    <div class="value red">${erros}</div>
                </div>
                <div>
                    <div class="label">Total</div>
                    <div class="value yellow">${total}</div>
                </div>
            </div>
            
            <div class="chart-container">
                <canvas id="pizzaChart" width="200" height="200"></canvas>
                <div class="chart-legend">
                    <div class="legend-item">
                        <span class="legend-color" style="background: #4ade80;"></span>
                        Acertos: ${acertos} (${total > 0 ? Math.round((acertos/total)*100) : 0}%)
                    </div>
                    <div class="legend-item">
                        <span class="legend-color" style="background: #f87171;"></span>
                        Erros: ${erros} (${total > 0 ? Math.round((erros/total)*100) : 0}%)
                    </div>
                </div>
            </div>

            <div class="inspirational-quote">
                "${fraseEscolhida.frase}"
                <span class="author">— ${fraseEscolhida.autor}</span>
            </div>

            <div class="result-sub">${TOTAL_PERGUNTAS} questões · 5 de cada ano (4º ao 7º)</div>
        </div>
    `;

    // Desenhar gráfico de pizza
    setTimeout(() => {
        desenharGraficoPizza(acertos, erros);
    }, 50);

    elFeedback.className = 'feedback';
    elFeedback.textContent = '';
    elBtnProximo.classList.remove('show');
    elPercentual.textContent = '100%';
    elProgressBar.style.width = '100%';
}

// Eventos
elBtnProximo.addEventListener('click', proximaPergunta);
elBtnReset.addEventListener('click', iniciarJogo);

// Iniciar
iniciarJogo();

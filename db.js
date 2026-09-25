// ================================================================
//  CONEXÃO FIREBASE (foguete-firebase)
// ================================================================

// O pacote é CommonJS: https-shim.js expõe require/module globais.
const FogueteFirebase = window.module.exports;

const db = new FogueteFirebase({ url: 'https://prreijwjfeiw-default-rtdb.firebaseio.com' });

function semResposta() {
    return new Promise((_, rejeitar) => {
        setTimeout(() => rejeitar(new Error('Sem resposta do Firebase')), 10000);
    });
}

async function salvarNoFirebase(caminho, valor) {
    db.writeData(caminho, valor);
    const pendentes = window.fogueteRequisicoes.splice(0);
    await Promise.all(pendentes);
}

function lerNoFirebase(caminho) {
    return Promise.race([db.getData(caminho), semResposta()]);
}

async function lerRanking() {
    try {
        const dados = await lerNoFirebase('ranking');
        return Object.values(dados || {});
    } catch (e) {
        console.error('Erro ao carregar ranking do Firebase:', e);
        return [];
    }
}

window.salvarNoFirebase = salvarNoFirebase;
window.lerNoFirebase = lerNoFirebase;
window.lerRanking = lerRanking;

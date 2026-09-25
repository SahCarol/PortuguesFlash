// ================================================================
//  SHIM "https" PARA NAVEGADOR (usado pelo foguete-firebase)
// ================================================================

window.fogueteRequisicoes = [];

function request(url, options, callback) {
    let corpo = '';

    return {
        write(chunk) {
            corpo += chunk;
        },
        end() {
            const requisicao = fetch(url, {
                method: options.method,
                headers: { 'Content-Type': 'application/json' },
                body: corpo || undefined
            })
                .then(resposta => resposta.text(),
                    erro => JSON.stringify({ error: erro.message }))
                .then(texto => {
                    callback({
                        on(evento, tratador) {
                            if (evento === 'data') tratador(texto);
                            if (evento === 'end') tratador();
                        }
                    });
                    return texto;
                });

            window.fogueteRequisicoes.push(requisicao);
        }
    };
}

export default { request };

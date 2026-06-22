// =====================================
// INTERNACIONALIZAÇÃO (PT / SR)
// =====================================

async function carregarIdioma(idioma) {

    try {

        const response = await fetch(`lang/${idioma}.json`);

        if (!response.ok) {
            throw new Error(`Erro ao carregar ${idioma}.json`);
        }

        const traducoes = await response.json();
        // Traduz textos
        document.querySelectorAll("[data-i18n]").forEach(el => {

            const chave = el.dataset.i18n;

            const partes = chave.split(".");

            let valor = traducoes;

            partes.forEach(parte => {
                valor = valor?.[parte];
            });

            if (valor) {
                el.textContent = valor;
            }

        });

        // Traduz placeholders
        document.querySelectorAll("[data-i18n-placeholder]").forEach(el => {

            const chave = el.dataset.i18nPlaceholder;

            const partes = chave.split(".");

            let valor = traducoes;

            partes.forEach(parte => {
                valor = valor?.[parte];
            });

            if (valor) {
                el.placeholder = valor;
            }

        });

        localStorage.setItem("idioma", idioma);

        console.log(`Idioma alterado para: ${idioma}`);

    } catch (erro) {

        console.error("Erro na tradução:", erro);

    }

}

// =====================================
// CARREGA O IDIOMA SALVO
// =====================================

window.addEventListener("DOMContentLoaded", () => {

    const idiomaSalvo =
        localStorage.getItem("idioma") || "pt";

    carregarIdioma(idiomaSalvo);

    // Bandeira PT
    const btnPt = document.getElementById("btn-pt");

    if (btnPt) {

        btnPt.addEventListener("click", () => {

            carregarIdioma("pt");

        });

    }

    // Bandeira SR
    const btnSr = document.getElementById("btn-sr");

    if (btnSr) {

        btnSr.addEventListener("click", () => {

            carregarIdioma("sr");

        });

    }

});

const btnPtMobile =
    document.getElementById("btn-pt-mobile");

const btnSrMobile =
    document.getElementById("btn-sr-mobile");

btnPtMobile?.addEventListener("click", () => {
    carregarIdioma("pt");
});

btnSrMobile?.addEventListener("click", () => {
    carregarIdioma("sr");
});
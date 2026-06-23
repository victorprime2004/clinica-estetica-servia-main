// Foi criado um arquivo dentro da pasta "js" que se chama  "auto-translate" que tem o código:


// Inicializa o Google Tradutor
function googleTranslateElementInit() {
    new google.translate.TranslateElement({
        pageLanguage: 'pt',
        includedLanguages: 'pt,sr',
        autoDisplay: false
    }, 'google_translate_element');
}

// Carrega o script do Google
(function () {
    const script = document.createElement("script");
    script.src = "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
    document.body.appendChild(script);
})();

// Função para trocar o idioma
function changeLanguage(lang) {

    // Volta para o idioma original (Português)
    if (lang === "pt") {

        document.cookie = "googtrans=/pt/pt;path=/";
        document.cookie = "googtrans=/pt/pt;path=/;domain=" + location.hostname;

        location.reload();

        return;
    }

    const combo = document.querySelector(".goog-te-combo");

    if (!combo) {
        setTimeout(() => changeLanguage(lang), 300);
        return;
    }

    combo.value = lang;
    combo.dispatchEvent(new Event("change"));
}

document.addEventListener("DOMContentLoaded", () => {

    const pt = document.querySelectorAll(".lang-pt");
    const sr = document.querySelectorAll(".lang-sr");

    pt.forEach(flag => {
        flag.addEventListener("click", () => changeLanguage("pt"));
    });

    sr.forEach(flag => {
        flag.addEventListener("click", () => changeLanguage("sr"));
    });

});
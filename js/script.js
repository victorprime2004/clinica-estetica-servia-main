
//   ===========================================
//         ELEMENTOS DO MENU MOBILE (página home!!!)
//   ===========================================
// botão hamburguer para abrir o menu
const openMenu = document.getElementById("openMenu");
// botão "X" para fechar o menu
const closeMenu = document.getElementById("closeMenu");

// menu mobile lateral
const mobileMenu = document.getElementById("mobileMenu");

// camada escura atrás do menu
const overlay = document.getElementById("overlay");

// ===========================================
// ABRIR MENU MOBILE
// ===========================================

// ao clicar no botão hamburguer
openMenu.addEventListener("click", () => {

    // adiciona a classe active no menu
    mobileMenu.classList.add("active");
    // adiciona a classe active no overlay
    overlay.classList.add("active");

});

// ===========================================
// FECHAR MENU MOBILE
// ===========================================

closeMenu.addEventListener("click", () => {

    mobileMenu.classList.remove("active");
    overlay.classList.remove("active");

});

// ===========================================
// FECHAR MENU AO CLICAR FORA
// ===========================================

// ao clicar no overlay escuro - fecha o menu
overlay.addEventListener("click", () => {

    // remove a classe active do menu (remove o overlay)
    mobileMenu.classList.remove("active");
    // remove a classe active do overlay
    overlay.classList.remove("active");

});

// ===========================================
// EFEITO DO HEADER AO ROLAR A PÁGINA
// ===========================================

// pegando o header pelo id
const header = document.getElementById("header");
// detecta o scroll da página
window.addEventListener("scroll", () => {
    // se o scroll passar de 20px
    if (window.scrollY > 20) {
        // adiciona classe scrolled no header
        header.classList.add("scrolled");
    } else {
        // remove a classe caso volte ao topo
        header.classList.remove("scrolled");
    }

});

// ========================================
// cards de serviço
//    ======================================
const servicos = {

    massagens: [
       {
    nome: "Massagem Relaxante (1h)",

    descricao: "Foco em alívio de tensão e bem-estar.",

    descricaoCompleta:
        "A massagem relaxante promove relaxamento muscular profundo, reduz o estresse do dia a dia e auxilia na melhora da circulação sanguínea, proporcionando sensação de bem-estar e equilíbrio corporal.",

    preco: "R$ 120",

    duracao: "60 minutos",

    beneficios: [
        "Reduz o estresse e a ansiedade.",
        "Melhora a circulação sanguínea.",
        "Promove relaxamento muscular."
    ],

    informacoes: [
        {
            icone: "fa-circle-check",
            classe: "info-verde",
            texto: "Indicado para pessoas com tensão muscular e rotina estressante."
        },

        {
            icone: "fa-triangle-exclamation",
            classe: "info-amarelo",
            texto: "Evitar em casos de inflamações agudas ou lesões recentes."
        },

        {
            icone: "fa-heart",
            classe: "info-vermelho",
            texto: "Recomenda-se boa hidratação após a sessão."
        },

        {
            icone: "fa-clock",
            classe: "info-azul",
            texto: "Os benefícios podem ser percebidos já na primeira sessão."
        }
    ],

    img: "../assets/images/services/img-massagem.jpg"
},
        {
            nome: "Massagem Modeladora Br",
            descricao: "Contorno corporal e redução de medidas.",
            preco: "R$ 150",
             beneficios: [],
            informacoes: [],
            img: "../assets/images/services/img-massagem.jpg"
        },
        {
            nome: "Massagem Butt Lift",
            descricao: "Levantamento e modelagem dos glúteos.",
            preco: "R$ 180",
            img: "../assets/images/services/img-massagem.jpg"
        },
        {
            nome: "Pacote Relaxantes",
            descricao: "10 sessões com valor promocional.",
            preco: "R$ 990",
            img: "../assets/images/services/img-massagem.jpg"
        },
        {
            nome: "Pacote Brasileiras ou Mistas",
            descricao: "Flexibilidade de escolha.",
            preco: "R$ 1190",
            img: "../assets/images/services/img-massagem.jpg"
        }
    ],

    corporais: [
        {
            nome: "Spa Detox Corporal",
            descricao: "Eliminação de toxinas.",
            preco: "R$ 180",
            img: "../assets/images/services/img-drenagem.jpg"
        },
        {
            nome: "Drenagem Linfática",
            descricao: "Redução de inchaço.",
            preco: "R$ 130",
            img: "../assets/images/services/img-drenagem.jpg"
        },
        {
            nome: "Drenagem Pós Operatória",
            descricao: "Recuperação especializada.",
            preco: "R$ 160",
            img: "../assets/images/services/img-drenagem.jpg"
        },
        {
            nome: "Tratamento Anticelulite",
            descricao: "Melhora da textura da pele.",
            preco: "R$ 220",
            img: "../assets/images/services/img-drenagem.jpg"
        },
        {
            nome: "Tratamento de Estrias",
            descricao: "Regeneração localizada.",
            preco: "R$ 250",
            img: "../assets/images/services/img-drenagem.jpg"
        }
    ],

    faciais: [
        {
            nome: "Limpeza de Pele Profunda",
            descricao: "Renovação facial.",
            preco: "R$ 120",
            img: "../assets/images/services/img-limpeza-de-pele.jpg"
        },
        {
            nome: "Peeling de Diamante",
            descricao: "Brilho e rejuvenescimento.",
            preco: "R$ 180",
            img: "../assets/images/services/img-limpeza-de-pele.jpg"
        },
        {
            nome: "Drenagem Facial",
            descricao: "Redução de inchaço.",
            preco: "R$ 100",
            img: "../assets/images/services/img-limpeza-de-pele.jpg"
        },
        {
            nome: "Design e Limpeza de Sobrancelhas",
            descricao: "Harmonização do olhar.",
            preco: "R$ 80",
            img: "../assets/images/services/img-limpeza-de-pele.jpg"
        }
    ],

    depilacoes: [
        {
            nome: "Depilação Completa de Pernas",
            descricao: "Pele lisa e macia.",
            preco: "R$ 90",
            img: "../assets/images/services/img-depilacao.jpg"
        },
        {
            nome: "Depilação Íntima",
            descricao: "Conforto e cuidado.",
            preco: "R$ 70",
            img: "../assets/images/services/img-depilacao.jpg"
        },
        {
            nome: "Depilação de Axilas",
            descricao: "Resultado duradouro.",
            preco: "R$ 35",
            img: "../assets/images/services/img-depilacao.jpg"
        },
        {
            nome: "Depilação de Nariz",
            descricao: "Procedimento rápido.",
            preco: "R$ 20",
            img: "../assets/images/services/img-depilacao.jpg"
        }
    ]

};

const carouselContent =
    document.getElementById("carousel-content");

function renderizar(categoria) {

    const itens = servicos[categoria];

    const porSlide =
        window.innerWidth <= 768 ? 1 : 3;

    let html = "";

    for (let i = 0; i < itens.length; i += porSlide) {

        const grupo =
            itens.slice(i, i + porSlide);

        html += `
        <div class="carousel-item ${i === 0 ? 'active' : ''}">
            <div class="cards-row">
        `;

        grupo.forEach(servico => {

            html += `
<div class="card-wrapper">

    <div class="card h-100">

        <img src="${servico.img}"
        class="card-img-top img-card-servico">

        <div class="card-body d-flex flex-column">

            <h5 class="card-title">${servico.nome}</h5>

            <p class="card-text">${servico.descricao}</p>

            <div class="mt-auto d-flex justify-content-between align-items-center">

                <span class="preco-servico">${servico.preco}</span>

                <a href="#"
   class="btn-vermais abrir-modal"
   data-servico='${JSON.stringify(servico)}'>
    Ver Mais
    <i class="fa-solid fa-arrow-right"></i>
</a>

            </div>

        </div>

    </div>

</div>
`;
        });

        html += `
            </div>
        </div>
        `;
    }

    carouselContent.style.opacity = 0;

    setTimeout(() => {

        carouselContent.innerHTML = html;
        carouselContent.style.opacity = 1;

    }, 150);
}

renderizar("massagens");

document
    .querySelectorAll(".btn-filtro")
    .forEach(btn => {

        btn.addEventListener("click", () => {

            document
                .querySelectorAll(".btn-filtro")
                .forEach(b => b.classList.remove("active"));

            btn.classList.add("active");

            renderizar(btn.dataset.category);

        });

    });

document.addEventListener("click", function (e) {

    const botao = e.target.closest(".abrir-modal");

    if (!botao) return;

    e.preventDefault();

    const servico =
        JSON.parse(botao.dataset.servico);

    document.getElementById("modalTitulo").textContent =
        servico.nome;

    document.getElementById("modalDescricao").textContent =
        servico.descricaoCompleta || servico.descricao;

    document.getElementById("modalPreco").textContent =
        servico.preco;

    document.getElementById("modalDuracao").textContent =
        servico.duracao || "Consultar";

    document.getElementById("modalImagem").src =
        servico.img;

        const beneficios =
    document.getElementById("modalBeneficios");

beneficios.innerHTML = "";

if (servico.beneficios) {

    servico.beneficios.forEach((item, index) => {

        beneficios.innerHTML += `
            <div class="beneficio-card">

                <div class="numero-beneficio">
                    ${index + 1}
                </div>

                <p>${item}</p>

            </div>
        `;
    });

}

const informacoes =
    document.getElementById("modalInformacoes");

informacoes.innerHTML = "";

if (servico.informacoes) {

    servico.informacoes.forEach(info => {

        informacoes.innerHTML += `
            <div class="info-item">

                <i class="fa-solid ${info.icone} ${info.classe}"></i>

                <p>${info.texto}</p>

            </div>
        `;
    });

}

    

 

    const modal =
        new bootstrap.Modal(
            document.getElementById("modalServico")
        );

    modal.show();

});

// modal

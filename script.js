const dados = {
  "VR": {
    15: [
      { nome: "CASAHORT SUPERMERCADO", pasta: "15.22" }
    ],
    20: [
      { nome: "MAIS VO SUPERMERCADO", pasta: "20.16" },
      { nome: "RONI FRIOS", pasta: "20.36" }
    ],
    25: [
      { nome: "BEM ATACAREJO", pasta: "25.8" }
    ],
    30: [
      { nome: "SUPERMERCADO BATISTA", pasta: "30.13" },
      { nome: "HIPER BATISTA", pasta: "30.13" },
      { nome: "RD COMERCIO ATACADISTA DE ALIMENTOS LTDA", pasta: "30.13" },
      { nome: "SUPERMERCADO SUPER BARROS", pasta: "30.17" },
      { nome: "SUPERMERCADO GOIAZ", pasta: "30.65" },
      { nome: "SUPERMERCADO IMPERIAL", pasta: "30.54" },
      { nome: "SUPER RIO BRANCO", pasta: "30.46" }
    ]
  },

  "SYSMO": {
    10: [
      { nome: "CM BOM PRECO", pasta: "10.28" },
      { nome: "Ville Mais", pasta: "10.24" },
      { nome: "SUPERMERCADO 20 V", pasta: "10.91" },
      { nome: "SUPERMERCADO ABC LTDA", pasta: "10.92" },
      { nome: "SUPERMERCADO BOM PRECO", pasta: "10.18" }
    ],
    15: [
      { nome: "REDE ADAO", pasta: "15.31" },
      { nome: "SUPERMERCADO IDEAL", pasta: "15.24" },
      { nome: "MERCADO MALDANER", pasta: "15.15" },
      { nome: "SUPERMERCADO SUPER NOBRE", pasta: "15.29" }
    ],
    20: [
      { nome: "CAMPEAO SUPERMERCADOS", pasta: "20.8" },
      { nome: "SUPERMERCADO J LIDER", pasta: "20.22" },
      { nome: "UNIAO SUPERMERCADO", pasta: "20.13" }
    ],
    25: [
      { nome: "O SEU VERDURAO", pasta: "25.19" }
    ],
    30: [
      { nome: "SUPERMERCADO DA VERDURA", pasta: "30.42" },
      { nome: "SUPERMERCADO HIPER GIRO", pasta: "30.34" },
      { nome: "SUPERMERCADO NELORE - LOJA 1", pasta: "30.12" }
    ]
  },

  "ATIMACOM": {
    10: [
      { nome: "COMERCIAL ESTEVAM", pasta: "10.12" }
    ],
    15: [
      { nome: "SUPERMERCADO ALVES", pasta: "15.30" },
      { nome: "SUPERMERCADO MOREIRA", pasta: "15.27" },
      { nome: "SUPERMERCADO E CASA DE CARNE RAIMUNDO FARINHA", pasta: "15.36" }
    ],
    20: [
      { nome: "ASTROS SUPERMERCADO", pasta: "20.31" },
      { nome: "SUPERMERCADO CAMPEAO", pasta: "20.29" },
      { nome: "PRATICO SUPERMERCADO", pasta: "20.17" }
    ],
    25: [
      { nome: "IGM MIX", pasta: "25.15" }
    ],
    30: [
      { nome: "SUPERMERCADO SKINAO", pasta: "30.31" },
      { nome: "SUPERMERCADO ZAGO", pasta: "30.39" }
    ]
  },

  "SIIT": {
    10: [
      { nome: "LU SUPERMERCADO", pasta: "10.58" }
    ],
    15: [
      { nome: "VILLA BRASILEIRA SUPERMERCADO", pasta: "15.54" }
    ],
    20: [
      { nome: "SUPERMERCADO ALMEIDA", pasta: "20.41" }
    ],
    30: [
      { nome: "SUPERMERCADO BARRETO", pasta: "30.32" },
      { nome: "MERCADO SAO JORGE", pasta: "30.48" },
      { nome: "SUPERMERCADO PONTO CERTO", pasta: "30.33" },
      { nome: "SUPERMERCADO PONTO CERTO", pasta: "30.33" },
      { nome: "HORTIFRUTI PARAISO", pasta: "30.33" }
    ]
  },

  "GR TECNOLOGIA": {
    15: [
      { nome: "SUPERMERCADO VS VALE DO SONHO III", pasta: "15.45" },
      { nome: "SUPERMERCADO VS", pasta: "15.26" }
    ],
    25: [
      { nome: "SUPER BARATEX", pasta: "25.29" }
    ],
    30: [
      { nome: "TOP 10 SUPERMERCADO", pasta: "30.23" }
    ]
  }
};

const status = [
  "Importei",
  "Exportei",
  "Arquivo na pasta",
  "Aguardando arquivo",
  "Em contato",
  "Não sei",
  "Com Erro"
];

let sistemaAtual = null;

function salvar() {
  localStorage.setItem("controleRevisao", JSON.stringify(progresso));
}

let progresso = JSON.parse(
  localStorage.getItem("controleRevisao") || "{}"
);

function chaveMercado(sistema, ciclo, indice) {
  return `${sistema}_${ciclo}_${indice}`;
}

function estaMarcado(chave, tipo) {
  return progresso[chave]?.[tipo] === true;
}

function marcar(chave, tipo, valor) {
  if (!progresso[chave]) {
    progresso[chave] = {};
  }

  progresso[chave][tipo] = valor;
  salvar();
}

function cicloConcluido(sistema, ciclo) {
  return progresso[`ciclo_${sistema}_${ciclo}`] === true;
}

function marcarCiclo(sistema, ciclo, valor) {
  progresso[`ciclo_${sistema}_${ciclo}`] = valor;
  salvar();
}

function mostrarSistema(sistema) {
  sistemaAtual = sistema;

  const inicio = document.getElementById("inicio");
  const telaSistema = document.getElementById("telaSistema");
  const titulo = document.getElementById("tituloSistema");
  const conteudo = document.getElementById("conteudo");

  inicio.classList.add("oculto");
  telaSistema.classList.remove("oculto");

  titulo.textContent = sistema;
  conteudo.innerHTML = "";

  const ciclos = dados[sistema];

  Object.keys(ciclos)
    .sort((a, b) => Number(a) - Number(b))
    .forEach(ciclo => {

      const blocoCiclo = document.createElement("div");
      blocoCiclo.className = "ciclo";

      const tituloCiclo = document.createElement("div");
      tituloCiclo.className = "ciclo-titulo";

      const textoCiclo = document.createElement("h2");
      textoCiclo.textContent = `Ciclo ${ciclo}`;

      const labelCiclo = document.createElement("label");
      labelCiclo.className = "check";

      const checkboxCiclo = document.createElement("input");
      checkboxCiclo.type = "checkbox";
      checkboxCiclo.checked = cicloConcluido(sistema, ciclo);

      checkboxCiclo.addEventListener("change", () => {
        marcarCiclo(sistema, ciclo, checkboxCiclo.checked);
      });

      labelCiclo.appendChild(checkboxCiclo);
      labelCiclo.appendChild(
        document.createTextNode(" Ciclo concluído")
      );

      tituloCiclo.appendChild(textoCiclo);
      tituloCiclo.appendChild(labelCiclo);

      blocoCiclo.appendChild(tituloCiclo);

      ciclos[ciclo].forEach((mercado, indice) => {

        const chave = chaveMercado(sistema, ciclo, indice);

        const divMercado = document.createElement("div");
        divMercado.className = "mercado";

        const info = document.createElement("div");
        info.className = "mercado-info";

        const nome = document.createElement("div");
        nome.className = "mercado-nome";
        nome.textContent = mercado.nome;

        const pasta = document.createElement("div");
        pasta.className = "pasta";
        pasta.textContent = `Pasta: ${mercado.pasta}`;

        info.appendChild(nome);
        info.appendChild(pasta);

        const checks = document.createElement("div");
        checks.className = "checks";

        status.forEach(tipo => {

          const label = document.createElement("label");
          label.className = "check";

          const checkbox = document.createElement("input");
          checkbox.type = "checkbox";

          checkbox.checked = estaMarcado(chave, tipo);

          checkbox.addEventListener("change", () => {
            marcar(chave, tipo, checkbox.checked);
          });

          label.appendChild(checkbox);
          label.appendChild(
            document.createTextNode(` ${tipo}`)
          );

          checks.appendChild(label);
        });

        divMercado.appendChild(info);
divMercado.appendChild(checks);

// Campo de observação
const observacaoContainer = document.createElement("div");
observacaoContainer.className = "observacao";

const observacaoLabel = document.createElement("label");
observacaoLabel.textContent = "Observação:";

const observacao = document.createElement("textarea");
observacao.maxLength = 200;
observacao.placeholder = "Digite uma observação (até 200 caracteres)...";
observacao.value = progresso[chave]?.observacao || "";

observacao.addEventListener("input", () => {
  if (!progresso[chave]) {
    progresso[chave] = {};
  }

  progresso[chave].observacao = observacao.value;
  salvar();
});

observacaoLabel.appendChild(observacao);
observacaoContainer.appendChild(observacaoLabel);

divMercado.appendChild(observacaoContainer);

blocoCiclo.appendChild(divMercado);
      });

      conteudo.appendChild(blocoCiclo);
    });
}

function voltarInicio() {
  document.getElementById("telaSistema").classList.add("oculto");
  document.getElementById("inicio").classList.remove("oculto");
  sistemaAtual = null;
}

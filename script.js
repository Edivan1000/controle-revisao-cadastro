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
  "Aguardando arquivo"
  "Aguardando arquivo",
  "Em contato",
  "Não sei",
  "Com Erro"
];

let sistemaAtual = null;

        });

        divMercado.appendChild(info);
        divMercado.appendChild(checks);
divMercado.appendChild(checks);

        blocoCiclo.appendChild(divMercado);
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

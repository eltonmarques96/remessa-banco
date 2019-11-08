//Importando biblioteca para geração de arquivo .REM
const geradorTXT = require('../../remessaTXT')

class bancoCaixa {
  gerarRemessa(
    loteServico,
    sequenciaLoteServico,
    tipoInscricao,
    numeroInscricao,
    Agencia,
    AgenciaDV,
    CodigoCedente,
    nomeEmpresa,
    codigoRemessaRetorno,
    dataGeracao,
    horaGeracao,
    NSA,
    tipoRemessa, //1-> REMESSA-TESTE, 2-> REMESSA-PRODUÇÃO
    tipoOperacao, //R -> Remesssa, T -> Retorno
    codigoConvenio,
    mensagem1,
    mensagem2,
    numRemessaRetornoNSA,
    dataGravacaoRemessaRetorno,
    dataCredito,
    codigoMovimentoRemessa,
    modalidadeCarteira,
    nossoNumero, //CCNNNNNNNNNNNNNNN
    codigoCarteira,
    formaDeCadastroTituloNoBanco,
    tipoDocumento,
    identificacaoEmisssaoBloqueto,
    identificacaoEntregaBloqueto,
    numeroDocumentoDeCobracao,
    dataVencimentoTitulo,
    valorTitulo,
    agenciaEncarregadaCobranca,
    agenciaDVEncarregadaCobranca,
    especieTitulo,
    identificaoTituloAceitacao,
    dataEmissaoTitulo,
    codigoJurosDeMora,
    dataJurosDeMora,
    juroDeMoraPorDiaTaxa,
    codigoDesconto1,
    dataDesconto1,
    valorPercentualDescontoConcedido,
    valorIOFRecolhido,
    valorAbatimento,
    identificacaoTituloEmpresa,
    codigoParaProtesto,
    numeroDeDiasParaProtesto,
    codigoParaBaixa_Devolucao,
    numeroDeDiasBaixa_Devolucao,
    tipoInscricaoSacado,
    numeroInscricaoSacado,
    nomeSacado,
    enderecoSacado,
    bairroSacado,
    cepSacado,
    sufixoCEPSacado,
    CidadeSacado,
    ufSacado,
    tipoInscricao_Sacador_Avalista,
    numeroInscricao_Sacador_Avalista,
    nomeSacador_Sacador_Avalista,
    nossoNumeroBancoCorrespondente,
    remessa_path) {

    try {
      // String que será provinda da conversão do lote de serviço
      var stringLoteServico = ''
      var stringSequencialLoteServico = ''
      var stringNumeroDeDiasBaixa_Devolucao = ''
      var stringNumeroDeDiasParaProtesto = ''
      var i;
      //String que adiciona conteudo de cada linha
      var stringLinha = "";
      var stringLinha2 = "";
      var stringLinha3 = "";
      var stringLinha4 = "";
      var stringLinha5 = "";
      var stringLinha6 = "";
      //Array de retorno
      var textoRemessa = [];
      //Passando lote de serviço de int para string formato XXXX

      //Conversão de valor do loteServiço de inteiro para string no formato XXXX
      loteServico = 10000 + loteServico
      stringLoteServico = loteServico.toString();
      stringLoteServico = stringLoteServico.slice(1);
      //Conversão de valor do sequecialLoteServiço de inteiro para string no formato XXXX
      sequenciaLoteServico = 10000 + sequenciaLoteServico
      stringSequencialLoteServico = sequenciaLoteServico.toString();
      stringSequencialLoteServico = stringSequencialLoteServico.slice(1);
      //Conversão de valor do numeroDeDiasParaProtesto de inteiro para string no formato XXX
      numeroDeDiasParaProtesto = 1000 + numeroDeDiasParaProtesto;
      stringNumeroDeDiasParaProtesto = numeroDeDiasParaProtesto.toString();
      stringNumeroDeDiasParaProtesto = stringNumeroDeDiasParaProtesto.slice(1);
      //Conversão de valor do numeroDeDiasBaixa_Devolucao de inteiro para string no formato XXX
      numeroDeDiasBaixa_Devolucao = 1000 + numeroDeDiasBaixa_Devolucao;
      stringNumeroDeDiasBaixa_Devolucao = numeroDeDiasBaixa_Devolucao.toString();
      stringNumeroDeDiasBaixa_Devolucao = stringNumeroDeDiasBaixa_Devolucao.slice(1)

      //Passando o strins para maiusculo
      nomeEmpresa = nomeEmpresa.toUpperCase()
      nomeEmpresa = nomeEmpresa.substring(0, 30)
      mensagem1 = mensagem1.toUpperCase()
      mensagem1 =  mensagem1.substring(0, 40)
      mensagem2 = mensagem2.toUpperCase()
      mensagem2 =  mensagem2.substring(0, 40)
      nomeSacado = nomeSacado.substring(0, 40)
      nomeSacado = nomeSacado.toUpperCase()
      enderecoSacado = enderecoSacado.substring(0, 40)
      enderecoSacado = enderecoSacado.toUpperCase()
      bairroSacado = bairroSacado.substring(0, 15)
      bairroSacado = bairroSacado.toUpperCase()
      CidadeSacado = CidadeSacado.substring(0, 15)
      CidadeSacado = CidadeSacado.toUpperCase()
      ufSacado = ufSacado.toUpperCase()
      ufSacado = ufSacado.substring(0, 2)




      /*
      CÓDIGO MOVIMENTO REMESSA
      01	= Entrada de Títulos
      02	= Pedido de Baixa
      04	= Concessão de Abatimento
      05	= Cancelamento de Abatimento
      06	= Alteração de Vencimento
      07	= Concessão de Desconto
      08	= Cancelamento de Desconto
      09	= Protestar
      10	= Sustar Protesto e Baixar Título
      31	= Alteração de Outros Dados
      */


      /*
      Modalidade da Carteira
      Se a CAIXA for responsável pela emissão do
      bloqueto, o campo Carteira/Nosso Número
      (posições 41-
      42/43-57) pode ser preenchido com zeros (‘0’),
      nesse caso, a numeração será feita pelo Banco.
      Quando informado pelo Cliente/Cedente, o Nosso
      Número deverá obedecer o seguinte :
      CC = 11 (título Registrado emissão CAIXA)
      CC = 14 (título Registrado emissão Cedente)
      CC = 21 (título Sem Registro emissão CAIXA)
      */

      /*
      Espécie do Título
      Preencher:
      01	-Cheque
      02	-Duplicata Mercantil
      03	- Duplicata Mercantil p/ Indicação
      04	- Duplicata de Serviço
      05	- Duplicata de Serviço p/ Indicação
      06	- Duplicata Rural
      07	- Letra de Câmbio
      08	- Nota de Crédito Comercial
      09	- Nota de Crédito a Exportação
      10	- Nota de Crédito Industrial
      11	- Nota de Crédito Rural
      12	- Nota Promissória         
      */

      //Linha 1
      //01.0 = Código Banco
      stringLinha = stringLinha.concat("104");
      //02.0 = Lote Serviços 
      stringLinha = stringLinha.concat("0000");
      //03.0 = Tipo Registro
      stringLinha = stringLinha.concat("0");
      //04.0 = Uso exclusivo
      for (i = 9; i <= 17; i++) {
        stringLinha = stringLinha.concat(" ");
      }
      //05.0 = Tipo Inscrição	
      // Preencher: 1-CPF, 2-CNPJ	Preenchido: 2
      stringLinha = stringLinha.concat(tipoInscricao);
      //06.0 Número de Inscrição
      if (tipoInscricao === "1") {
        stringLinha = stringLinha.concat("000");
        stringLinha = stringLinha.concat(numeroInscricao);
      }
      else if (tipoInscricao === "2") {
        stringLinha = stringLinha.concat(numeroInscricao);
      }
      //07.0 = Uso exclusivo
      for (i = 33; i <= 52; i++) {
        stringLinha = stringLinha.concat("0");
      }
      //08.0 = Agencia
      stringLinha = stringLinha.concat(Agencia);
      //09.0 = Agencia - DV
      stringLinha = stringLinha.concat(AgenciaDV);
      //10.0 = Agencia
      stringLinha = stringLinha.concat(CodigoCedente);
      //11.0 = Uso exclusivo
      for (i = 65; i <= 71; i++) {
        stringLinha = stringLinha.concat("0");
      }
      //12.0 = Uso exclusivo
      stringLinha = stringLinha.concat("0");
      // //12.0 = Nome da empresa
      // for (i = 65; i <= 71; i++) {
      //   stringLinha = stringLinha.concat("0");
      // }
      //13.0 = Nome da empresa
      stringLinha = stringLinha.concat(nomeEmpresa);
      // stringLinha = [stringLinha.slice(0, 72), nomeEmpresa, stringLinha.slice(72 + nomeEmpresa.length)].join('');
      for (i = (nomeEmpresa.length); i < 30; i++) {
        stringLinha = stringLinha.concat(" ");
      }
      //14.0 = Nome do banco -> CAIXA ECONOMICA FEDERAL
      stringLinha = stringLinha.concat("CAIXA ECONOMICA FEDERAL");
      stringLinha = stringLinha.concat("       ");
      //15.0 = Uso exclusivo
      for (i = 133; i <= 142; i++) {
        stringLinha = stringLinha.concat(" ");
      }
      //16.0 = Código remessa/retorno 1-Remessa, 2-Retorno
      stringLinha = stringLinha.concat(codigoRemessaRetorno);
      //17.0 = Data Geração Formato DDMMAAAA
      stringLinha = stringLinha.concat(dataGeracao);
      //18.0 = Hora Geração Formato HHMMSS
      stringLinha = stringLinha.concat(horaGeracao);
      //19.0 = NSA
      stringLinha = stringLinha.concat(NSA);
      //20.0 = Versão layout
      stringLinha = stringLinha.concat("050");
      //21.0 = Desidade gravação arquivo
      for (i = 167; i <= 171; i++) {
        stringLinha = stringLinha.concat("0");
      }
      //22.0 = Reservado Banco
      for (i = 172; i <= 191; i++) {
        stringLinha = stringLinha.concat(" ");
      }
      //23.0 = Reservado Empresa\
      if (tipoRemessa === 1) {
        stringLinha = stringLinha.concat("REMESSA-TESTE      ");
      }
      if (tipoRemessa === 2) {
        stringLinha = stringLinha.concat("REMESSA-PRODUCAO   ");
      }
      //24.0 = Uso exclusivo
      for (i = 212; i <= 215; i++) {
        stringLinha = stringLinha.concat(" ");
      }
      //25.0 = Uso exclusivo
      for (i = 216; i <= 240; i++) {
        stringLinha = stringLinha.concat(" ");
      }



      stringLinha = stringLinha.concat(" \n");

      //Linha 1
      //01.1 = Código Banco
      stringLinha2 = stringLinha2.concat("104");
      //02.1 = Lote Serviços 
      stringLinha2 = stringLinha2.concat(stringLoteServico);
      //03.1 = Tipo Registro
      stringLinha2 = stringLinha2.concat("1");
      //04.1 = Tipo Operação
      stringLinha2 = stringLinha2.concat(tipoOperacao);
      //05.1 = Tipo Serviço
      stringLinha2 = stringLinha2.concat("01");
      //06.1 Uso exclusivo
      stringLinha2 = stringLinha2.concat("00");
      //07.1 = Versão Layout Lote
      stringLinha2 = stringLinha2.concat("030");
      //08.1 = Uso exclusivo banco
      stringLinha2 = stringLinha2.concat(" ");
      //09.1 = Tipo Inscrição	
      // Preencher: 1-CPF, 2-CNPJ	Preenchido: 2
      stringLinha2 = stringLinha2.concat(tipoInscricao);
      //10.1 Número de Inscrição
      if (tipoInscricao === "1") {
        //CPF
        stringLinha2 = stringLinha2.concat("0000");
        stringLinha2 = stringLinha2.concat(numeroInscricao);
      }
      else if (tipoInscricao === "2") {
        //CNPJ
        stringLinha2 = stringLinha2.concat("0");
        stringLinha2 = stringLinha2.concat(numeroInscricao);
      }
      //11.1 = Código Convênio
      stringLinha2 = stringLinha2.concat(codigoConvenio);
      //12.1 = Uso exclusivo
      for (i = 40; i <= 53; i++) {
        stringLinha2 = stringLinha2.concat("0");
      }
      //13.1 = Agencia
      stringLinha2 = stringLinha2.concat(Agencia);
      //14.1 = Agencia DV
      stringLinha2 = stringLinha2.concat(AgenciaDV);
      //15.1 = Código Convênio
      stringLinha2 = stringLinha2.concat(codigoConvenio);
      //16.1 = Código modelo personalizado
      for (i = 66; i <= 72; i++) {
        stringLinha2 = stringLinha2.concat("0");
      }
      //17.1 = Uso exclusivo
      stringLinha2 = stringLinha2.concat("0");
      //18.1 = Nome empresa
      for (i = 74; i <= 103; i++) {
        stringLinha2 = stringLinha2.concat(" ");
      }
      stringLinha2 = [stringLinha2.slice(0, 74), nomeEmpresa, stringLinha2.slice(74 + nomeEmpresa.length)].join('');
      //19.1 - Mensagem 1
      for (i = 104; i <= 143; i++) {
        stringLinha2 = stringLinha2.concat(" ");
      }
      stringLinha2 = [stringLinha2.slice(0, 104), mensagem1, stringLinha2.slice(104 + mensagem1.length)].join('');
      //20.1 - Mensagem 2
      for (i = 144; i <= 183; i++) {
        stringLinha2 = stringLinha2.concat(" ");
      }
      stringLinha2 = [stringLinha2.slice(0, 144), mensagem2, stringLinha2.slice(144 + mensagem2.length)].join('');
      //21.1 = Número remessa/retorno/NSA
      stringLinha2 = stringLinha2.concat(numRemessaRetornoNSA);
      //22.1 = Data gravação remessa/retorno
      stringLinha2 = stringLinha2.concat(dataGravacaoRemessaRetorno);
      //23.1 = Data Crédito
      stringLinha2 = stringLinha2.concat(dataCredito);
      //24.1 = Uso exclusivo caixa
      for (i = 208; i <= 240; i++) {
        stringLinha2 = stringLinha2.concat(" ");
      }

      stringLinha2 = stringLinha2.concat("\n");


      //Segmento P
      //01.3P= Código Banco
      stringLinha3 = stringLinha3.concat("104");
      //02.3P = Lote Serviços 
      stringLinha3 = stringLinha3.concat(stringLoteServico);
      //03.3P = Tipo Registro
      stringLinha3 = stringLinha3.concat("3");
      //04.3P = Sequencial registro lote
      stringLinha3 = stringLinha3.concat('0' + stringSequencialLoteServico);
      //05.3P = Cód. Segmento Registro Detalhe
      stringLinha3 = stringLinha3.concat("P");
      //06.3P Uso Exclusivo Banco
      stringLinha3 = stringLinha3.concat(" ");
      //07.3P = Código Movimento Remessa:
      stringLinha3 = stringLinha3.concat(codigoMovimentoRemessa);
      //08.3P = Agencia
      stringLinha3 = stringLinha3.concat(Agencia);
      //09.3P = Agencia DV
      stringLinha3 = stringLinha3.concat(AgenciaDV);
      //10.3P = Código Convênio
      stringLinha3 = stringLinha3.concat(codigoConvenio);
      //11.3P = uso exclusivo
      for (i = 30; i <= 37; i++) {
        stringLinha3 = stringLinha3.concat("0");
      }
      //12.3P = Modalidade carteira
      for (i = 38; i <= 40; i++) {
        stringLinha3 = stringLinha3.concat("0");
      }
      //12.3P = Modalidade carteira
      stringLinha3 = stringLinha3.concat(modalidadeCarteira);
      //13.3P = Identificação Título Banco (Nosso Número)
      stringLinha3 = stringLinha3.concat(nossoNumero);
      //14.3P = Código Carteira
      stringLinha3 = stringLinha3.concat(codigoCarteira);
      //15.3P = Forma de Cadastr. do Título no Banco
      stringLinha3 = stringLinha3.concat(formaDeCadastroTituloNoBanco);
      //16.3P = Código modelo personalizado
      stringLinha3 = stringLinha3.concat(tipoDocumento);
      //17.3P = Identificação da Emissão do Bloqueto
      stringLinha3 = stringLinha3.concat(identificacaoEmisssaoBloqueto);
      //18.3P = Identificação da Entrega do Bloqueto
      stringLinha3 = stringLinha3.concat(identificacaoEntregaBloqueto);
      //19.3P = Número do Documento de Cobrança
      stringLinha3 = stringLinha3.concat(numeroDocumentoDeCobracao);
      //20.3P - Uso Exclusivo
      stringLinha3 = stringLinha3.concat("    ");
      //21.3P = Data Vencimento de titulo
      stringLinha3 = stringLinha3.concat(dataVencimentoTitulo);
      //22.3P = Valor titulo
      for (i = 0; i < 15 - (valorTitulo.length); i++) {
        stringLinha3 = stringLinha3.concat("0");
      }
      stringLinha3 = stringLinha3.concat(valorTitulo);
      //23.3P = Agencia encarregada da cobrança
      stringLinha3 = stringLinha3.concat(agenciaEncarregadaCobranca);
      //24.3P = DV-Agencia
      stringLinha3 = stringLinha3.concat(agenciaDVEncarregadaCobranca);
      //25.3P = Espécie do Título
      stringLinha3 = stringLinha3.concat(especieTitulo);
      //26.3P = Identific. de Título Aceito/Não Aceito
      stringLinha3 = stringLinha3.concat(identificaoTituloAceitacao);
      //27.3P = Data de emissão do titulo
      stringLinha3 = stringLinha3.concat(dataEmissaoTitulo);
      //29.3P = Data do Juros de Mora
      stringLinha3 = stringLinha3.concat(dataJurosDeMora);
      //30.3P = Juros de Mora por Dia/Taxa
      stringLinha3 = stringLinha3.concat(juroDeMoraPorDiaTaxa);
      //31.3P = Código do Desconto 1
      stringLinha3 = stringLinha3.concat(codigoDesconto1);
      //32.3P = Data do Desconto 1
      stringLinha3 = stringLinha3.concat(dataDesconto1);
      //33.3P = Valor/Percentual de Desconto a ser Concedido
      stringLinha3 = stringLinha3.concat(valorPercentualDescontoConcedido);
      //34.3P = Valor do IOF a ser Recolhido
      stringLinha3 = stringLinha3.concat(valorIOFRecolhido);
      //35.3P = Valor do Abatimento
      stringLinha3 = stringLinha3.concat(valorAbatimento);
      //36.3P= Identificação do Título na Empresa
      stringLinha3 = stringLinha3.concat(identificacaoTituloEmpresa);
      //37.3P = Código para Protesto
      stringLinha3 = stringLinha3.concat(codigoParaProtesto);
      //38.3P = Número de Dias para Protesto
      stringLinha3 = stringLinha3.concat(stringNumeroDeDiasParaProtesto);
      //39.3P = Código para Baixa/Devolução
      stringLinha3 = stringLinha3.concat(codigoParaBaixa_Devolucao);
      //40.3P = Número de Dias para Baixa/Devolução
      stringLinha3 = stringLinha3.concat(stringNumeroDeDiasBaixa_Devolucao);
      //41.3P = Código moeda
      stringLinha3 = stringLinha3.concat("09");
      //42.3P = Uso exclusivo
      for (i = 230; i <= 239; i++) {
        stringLinha3 = stringLinha3.concat("0");
      }
      //43.3P = Uso exclusivo
      stringLinha3 = stringLinha3.concat(" \n");



      //Segmento Q
      //01.3Q= Código Banco
      stringLinha4 = stringLinha4.concat("104");
      //02.3Q = Lote Serviços 
      stringLinha4 = stringLinha4.concat(stringLoteServico);
      //03.3Q = Tipo Registro
      stringLinha4 = stringLinha4.concat("3");
      //04.3Q = Sequencial registro lote
      stringLinha4 = stringLinha4.concat('0' + stringSequencialLoteServico);
      //05.3Q = Cód. Segmento Registro Detalhe
      stringLinha4 = stringLinha4.concat("Q");
      //06.3Q Uso Exclusivo Banco
      stringLinha4 = stringLinha4.concat(" ");
      //07.3Q = Código Movimento Remessa:
      stringLinha4 = stringLinha4.concat(codigoMovimentoRemessa);
      //08.3Q = Tipo Inscrição
      stringLinha4 = stringLinha4.concat(tipoInscricaoSacado);
      //09.3Q Número de Inscrição
      if (tipoInscricaoSacado === "1") {
        stringLinha4 = stringLinha4.concat("0000");
        stringLinha4 = stringLinha4.concat(numeroInscricaoSacado);
      }
      else if (tipoInscricao === "2") {
        stringLinha4 = stringLinha4.concat(numeroInscricaoSacado);
      }
      //10.3Q = Nome Sacado
      stringLinha4 = stringLinha4.concat(nomeSacado);
      for (i = (nomeSacado.length); i < 40; i++) {
        stringLinha4 = stringLinha4.concat(" ");
      }
      //11.3Q = Endereço Sacado
      stringLinha4 = stringLinha4.concat(enderecoSacado);
      for (i = (enderecoSacado.length); i < 40; i++) {
        stringLinha4 = stringLinha4.concat(" ");
      }
      //12.3Q = Bairro Sacado
      stringLinha4 = stringLinha4.concat(bairroSacado);
      for (i = (bairroSacado.length); i < 15; i++) {
        stringLinha4 = stringLinha4.concat(" ");
      }
      //13.3Q = CEP Sacado
      stringLinha4 = stringLinha4.concat(cepSacado);
      //14.3Q = Sufixo CEP Sacado
      stringLinha4 = stringLinha4.concat(sufixoCEPSacado);
      //15.3Q = Cidade Sacado
      stringLinha4 = stringLinha4.concat(CidadeSacado);
      for (i = (CidadeSacado.length); i < 15; i++) {
        stringLinha4 = stringLinha4.concat(" ");
      }
      //16.3Q = Estado Sacado
      stringLinha4 = stringLinha4.concat(ufSacado);
      //17.3Q = Tipo de Inscrição Sacador Avalista
      stringLinha4 = stringLinha4.concat(tipoInscricao_Sacador_Avalista);
      //18.3Q = Numero inscrição sacador avalista
      for (i = 0; i < 15 - (numeroInscricao_Sacador_Avalista.length); i++) {
        stringLinha4 = stringLinha4.concat("0");
      }
      stringLinha4 = stringLinha4.concat(numeroInscricao_Sacador_Avalista);
      //19.3Q = Nome Sacador Avalista
      stringLinha4 = stringLinha4.concat(nomeSacador_Sacador_Avalista);
      for (i = (nomeSacador_Sacador_Avalista.length); i < 40; i++) {
        stringLinha4 = stringLinha4.concat(" ");
      }
      //20.3Q - Uso Exclusivo
      stringLinha4 = stringLinha4.concat("   ");

      //NÃO SEI SE ESTÁ CERTO, ESTOU ME BASEANDO PELO SOFTWARE DE VALIDAÇÃO DA CAIXA
      stringLinha4 = stringLinha4.concat(nossoNumeroBancoCorrespondente);
      stringLinha4 = stringLinha4.concat("        ");
      stringLinha4 = stringLinha4.concat("\n");


      //Trailler de Lote
      //01.5= Código Banco
      stringLinha5 = stringLinha5.concat("104");
      //02.5 = Lote Serviços 
      stringLinha5 = stringLinha5.concat(stringLoteServico);
      //03.5 = Tipo Registro
      stringLinha5 = stringLinha5.concat("5");
      //04.5 = Uso exclusivo banco
      for (i = 9; i <= 17; i++) {
        stringLinha5 = stringLinha5.concat(" ");
      }
      //05.5 = Qtde. Registros Lote
      stringLinha5 = stringLinha5.concat("000200");
      //06.5 = Qtde Títulos Cobrança – Cobrança Simples
      //Atualmente a importação é feita um boleto por vez,
      //Futuramente a poderá ser feita a importação de multiplos boletos
      stringLinha5 = stringLinha5.concat("000001");
      //07.5 = Valor total Títulos Carteira - Cobrança Simples
      for (i = 0; i < 16 - (valorTitulo.length); i++) {
        stringLinha5 = stringLinha5.concat("0");
      }
      stringLinha5 = stringLinha5.concat(valorTitulo);
      //08.5 = TQuantidade de títulos em Cobrança - Cobrança Caucionada
      for (i = 47; i <= 52; i++) {
        stringLinha5 = stringLinha5.concat("0");
      }
      stringLinha5 = stringLinha5.concat(tipoInscricaoSacado);
      //09.5 = Valor Total dos títulos em carteiras - Cobrança caucionada
      for (i = 53; i <= 69; i++) {
        stringLinha5 = stringLinha5.concat("0");
      }
      //10.5 = Quantidade de títulos em cobrança - Cobrança descontada
      for (i = 70; i <= 75; i++) {
        stringLinha5 = stringLinha5.concat("0");
      }
      //11.5 = Valor Total dos títulos em carteiras - Cobrança descontada
      for (i = 76; i <= 92; i++) {
        stringLinha5 = stringLinha5.concat("0");
      }
      //12.5 = Uso Exclusivo Banco
      for (i = 93; i <= 123; i++) {
        stringLinha5 = stringLinha5.concat(" ");
      }
      //13.5 = Uso Exclusivo Banco
      for (i = 124; i <= 240; i++) {
        stringLinha5 = stringLinha5.concat(" ");
      }
      stringLinha5 = stringLinha5.concat("\n");

      //Trailler de Arquivo
      //01.9= Código Banco
      stringLinha6 = stringLinha6.concat("104");
      //02.9 = Lote Serviços (Preencher 9999)
      stringLinha6 = stringLinha6.concat("9999");
      //03.9 = Tipo Registro
      stringLinha6 = stringLinha6.concat("9");
      //04.9 = Uso exclusivo banco
      for (i = 9; i <= 17; i++) {
        stringLinha6 = stringLinha6.concat(" ");
      }
      //05.9 = Qtde. Lotes Arquivo
      stringLinha6 = stringLinha6.concat("000001");
      //06.9 = Qtde Registros Arquivos - Somatória total de linhas do arquivo
      stringLinha6 = stringLinha6.concat("000202");
      //07.9 = Uso exclusivo banco
      for (i = 30; i <= 35; i++) {
        stringLinha6 = stringLinha6.concat(" ");
      }
      //08.9 = Uso exclusivo banco
      for (i = 36; i <= 240; i++) {
        stringLinha6 = stringLinha6.concat(" ");
      }
      
      const linhas =
        stringLinha +
        stringLinha2 +
        stringLinha3 +
        stringLinha4 +
        stringLinha5 +
        stringLinha6;
      console.log(linhas)
      geradorTXT.generateTXT(remessa_path, linhas)
      console.log('processo de geração de arquivo remessa finalizado')
    } catch (error) {
      console.log(error)
    }
  }
}

module.exports = new bancoCaixa();
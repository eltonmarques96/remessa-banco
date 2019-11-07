const bancoCaixa = require('./index').gerarRemessaCaixa;
const geradorRemessa = require('./remessaTXT');
var PATH = require(`path`);

var loteServico = 1
var sequencialLoteServico = 1
const tipoInscricao = "1"
const numeroInscricao = "05554254527"
const agencia = "34495"
const agenciaDV = "X"
const codigoCedente = "362093"
const nomeEmpresa = "Marques Solutions"
const codigoRemessaRetorno = "1"
const dataGeracao = "29102019"
const horaGeracao = "051215"
const NSA = "123456"
const tipoRemessa = 2
const tipoOperacao = "R"
const codigoConvenio = "123456"
const mensagem1 = "Agradecemos a sua preferencia"
const mensagem2 = "Volte sempre"
const dataGravacaoRemessaRetorno = "28102019"
const dataCredito = "30102019"
const numRemessaRetornoNSA = "00000001"
const codigoMovimentoRemessa = "01"
const modalidadeCarteira = "14"
const nossoNumero = "111111111111111"
const codigoCarteira = "1"
const formaDeCadastroTituloNoBanco = "1"
const tipoDocumento = "2"
const identificacaoEmisssaoBloqueto = "2"
const identificacaoEntregaBloqueto = "0"
const numeroDocumentoDeCobracao = "00000000259"
const dataVencimentoTitulo = "31122019"
const valorTitulo = "1500"
const agenciaEncarregadaCobranca = "00000"
const agenciaDVEncarregadaCobranca = "0"
const especieTitulo = "04"
const identificaoTituloAceitacao = "N"
const dataEmissaoTitulo = "29102019"
const codigoJurosDeMora = "1"
const dataJurosDeMora = "03112019"
const juroDeMoraPorDiaTaxa = "000000000000000"
const codigoDesconto1 = "0"
const dataDesconto1 = "02112019"
const valorPercentualDescontoConcedido = "000000000000000"
const valorIOFRecolhido = "000000000000000"
const valorAbatimento = "000000000000000"
const identificacaoTituloEmpresa = "0000000000000000000000259"
const codigoParaProtesto = "1"
const numeroDeDiasParaProtesto = 10
const codigoParaBaixa_Devolucao = "2"
const numeroDeDiasBaixa_Devolucao = 120
const tipoInscricaoSacado = "1"
const numeroInscricaoSacado = "05554254527"
const nomeSacado = "Elton Marques dos Santos"
const enderecoSacado = "Rua Neide Gama, nº 116, Engenho Velho da Federação"
const bairroSacado = "Engenho Velho da Federação"
const cepSacado = "40220"
const sufixoCEPSacado = "085"
const CidadeSacado = "Salvador"
const ufSacado = "BA"
const tipoInscricao_Sacador_Avalista = "0"
const numeroInscricao_Sacador_Avalista = "05554254527"
const nomeSacador_Sacador_Avalista = "VLADEMIR VALENTIN NASCIMENTO DOS SANTOS"
const nossoNumeroBancoCorrespondente = "12345678912345678912"

const filepath = PATH.resolve(__dirname, 'uploads', `${new Date().getTime()}.REM`)
const remessa = bancoCaixa(
  loteServico,
  sequencialLoteServico,
  tipoInscricao,
  numeroInscricao,
  agencia,
  agenciaDV,
  codigoCedente,
  nomeEmpresa,
  codigoRemessaRetorno,
  dataGeracao,
  horaGeracao,
  NSA,
  tipoRemessa,
  tipoOperacao,
  codigoConvenio,
  mensagem1,
  mensagem2,
  numRemessaRetornoNSA,
  dataGravacaoRemessaRetorno,
  dataCredito,
  codigoMovimentoRemessa,
  modalidadeCarteira,
  nossoNumero,
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
  filepath
);

console.log(remessa)

geradorRemessa.generateTXT(filepath, remessa)
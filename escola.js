
function validarResposta(opcoesValidas, respostaUsuario) {
    return opcoesValidas.includes(respostaUsuario.toLowerCase());
  }
 
  function avaliarCandidato() {

    const capacidadesMagicas = ["fogo", "cura", "transformação", "ilusão"];
    const habilidadesEspecificas = ["controle de elementos", "invocação de criaturas místicas", "leitura de pergaminhos antigos", "feitiços de proteção"];
    const opcoesSimOuNao = ["sim", "não"];
  
    const capacidadeMagicaDominante = prompt("Qual é sua capacidade mágica dominante? (Fogo, Cura, Transformação ou Ilusão)");
    if (!validarResposta(capacidadesMagicas, capacidadeMagicaDominante)) {
      alert("Opção inválida para capacidade mágica dominante!");
      return;
    }
  
    const habilidadeEspecifica = prompt("Qual é sua habilidade específica? (Controle de Elementos, Invocação de Criaturas Místicas, Leitura de Pergaminhos Antigos ou Feitiços de Proteção)");
    if (!validarResposta(habilidadesEspecificas, habilidadeEspecifica)) {
      alert("Opção inválida para habilidade específica!");
      return;
    }
  
    const grauRespeitoMagia = parseInt(prompt("Em uma escala de 1 a 10, qual é o seu grau de respeito pela magia?"));
    if (isNaN(grauRespeitoMagia) || grauRespeitoMagia < 1 || grauRespeitoMagia > 10) {
      alert("Grau de respeito pela magia inválido!");
      return;
    }
  
    const adesaoEtica = prompt("Você adere à ética na utilização dos poderes? (Sim ou Não)");
    if (!validarResposta(opcoesSimOuNao, adesaoEtica)) {
      alert("Resposta inválida para adesão à ética!");
      return;
    }
  
    const trabalhoEmEquipe = prompt("Você está disposto a trabalhar em equipe? (Sim ou Não)");
    if (!validarResposta(opcoesSimOuNao, trabalhoEmEquipe)) {
      alert("Resposta inválida para trabalho em equipe!");
      return;
    }
  
    const aprendizadoConstante = prompt("Você tem desejo de aprender constantemente? (Sim ou Não)");
    if (!validarResposta(opcoesSimOuNao, aprendizadoConstante)) {
      alert("Resposta inválida para desejo de aprender constantemente!");
      return;
    }
  
    if (capacidadeMagicaDominante.toLowerCase() === "fogo" && habilidadeEspecifica.toLowerCase() === "controle de elementos") {
      alert("Parabéns! Você passou no teste e é aceito como um aprendiz oficial na Academia Arcana!");
    } else if (capacidadeMagicaDominante.toLowerCase() === "cura" && habilidadeEspecifica.toLowerCase() === "feitiços de proteção") {
      alert("Parabéns! Você passou no teste e é aceito como um aprendiz oficial na Academia Arcana!");
    } else if (capacidadeMagicaDominante.toLowerCase() === "transformação" && grauRespeitoMagia >= 8) {
      alert("Parabéns! Você passou no teste e é aceito como um aprendiz oficial na Academia Arcana!");
    } else if (capacidadeMagicaDominante.toLowerCase() === "ilusão" && adesaoEtica.toLowerCase() === "sim" && trabalhoEmEquipe.toLowerCase() === "sim") {
      alert("Parabéns! Você passou no teste e é aceito como um aprendiz oficial na Academia Arcana!");
    } else {
      alert("Infelizmente, você não atende aos requisitos para se tornar um aprendiz na Academia Arcana.");
    }
  }
  
  document.write (avaliarCandidato());
  
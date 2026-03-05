// Banco de dados de médias da turma
let medias = [0,6,8,6,6,3,8,7,9,6] ; 

// Variáveis de controle e estatísticas
let totalrecuperacao = 0 ;
let maiorNota = 0;
let alunoMaiorNota = 0;

// Percorre a lista de médias para análise individual
for (let i = 0; i < medias.length; i++) {
    
   let notaAtual = medias [i];
   
   let numeroExibicao = i + 1;// Ajuste para exibição humana (Aluno 1, 2...)
   
   // Verifica e atualiza o recorde de maior nota da sala
   if (notaAtual > maiorNota) {
       maiorNota = notaAtual;      
       alunoMaiorNota = numeroExibicao; 
   }
   
   // Lógica de classificação de status do aluno
   if (notaAtual>=7) {
       console.log('aluno ' + numeroExibicao + ' media: '+ notaAtual + '  aprovado');
   }else {
       // Alunos entre 5 e 6.9 entram em recuperação
       if(notaAtual >= 5 && notaAtual < 7){
           console.log('aluno ' + numeroExibicao + ' media: '+ notaAtual + '  recuperacao');
           totalrecuperacao++;
       } else {
           console.log('aluno ' + numeroExibicao + ' media: '+ notaAtual + '  reprovado');
       }
   }
}

// Relatório Final
console.log('---------------------------------------------------');
console.log('total de alunos em recuperacao: ' + totalrecuperacao);
console.log('a maior nota foi:'+ maiorNota + ' do aluno: ' + alunoMaiorNota);
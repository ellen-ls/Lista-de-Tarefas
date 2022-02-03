const buttonAddTarefa = document.querySelector('.formulariodetarefas button');
const campoAddTarefa = document.getElementById('inputadicionarTarefa');

const listaTarefa = document.querySelector('ul');

buttonAddTarefa.addEventListener('click',adicionarNovaTarefa);

function adicionarNovaTarefa(){
    const conteudoCampo = campoAddTarefa.value;
  
    const tarefa = document.createElement('li');
    const h2 = document.createElement('h2');
    const div = document.createElement('div');
    const botaoFinalizarTarefa = document.createElement('button');
    const botaoExcluirTarefa = document.createElement('button');
    const img = document.createElement('img');
    inputadicionarTarefa.value = '';

            
    h2.innerText = conteudoCampo;

    botaoFinalizarTarefa.classList.add('botaoFinalizarTarefa');
    botaoExcluirTarefa.classList.add('botaoExcluirTarefa');

    botaoFinalizarTarefa.addEventListener('click', finalizarTarefa);
    botaoExcluirTarefa.addEventListener('click', removerTarefa);
    
    img.src = './trash.svg';
    img.alt = 'imagem botao remover tarefa';

   
    botaoExcluirTarefa.appendChild(img);
    
    div.appendChild(botaoFinalizarTarefa);
    div.appendChild(botaoExcluirTarefa);

    tarefa.appendChild(h2);
    tarefa.appendChild(div);

    listaTarefa.appendChild(tarefa);
    
    }
    function removerTarefa(evento){
        const buttonClicado = evento.currentTarget;
        const tarefaClicada = buttonClicado.closest('li');
    
        tarefaClicada.remove();
    }
    
    function finalizarTarefa(evento){
        const buttonClicado = evento.currentTarget;
        const tarefaClicada = buttonClicado.closest('li');
    
        tarefaClicada.classList.toggle('tarefaFinalizada');
    }
    
    window.onload = function () {
        var btn1 = document.getElementById("btn1");
        var body = document.getElementsByTagName("body");
        btn1.addEventListener("change", function () {
          if (btn1.checked == true) {
            body[0].classList.add("dark");
          } else {
            body[0].classList.remove("dark");
          }
  
        })
  
      }

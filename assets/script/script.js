const inputTarefa = document.querySelector('.input-tarefa');
const addTarefa = document.querySelector('.add-tarefa');
const tarefa = document.querySelector('.lista-tarefas');
// vai cirar uma tag li
function criaLi() {
	const li = document.createElement('li');
	return li;
}
// vai não só limpar mas tbm dará foco no input
function limpaInput() {
	inputTarefa.value = '';
	inputTarefa.focus();
}
function criaBotaoApagar(li) {
	const botaoApagar = document.createElement('button');
	botaoApagar.setAttribute('class', 'apagar');
	botaoApagar.setAttribute('title', 'Apagar a tarefa');
	botaoApagar.innerText = 'Apagar';
	li.appendChild(botaoApagar);
}
// vai criar conteudo dentro da tag li
function criaTarefas(texto) {
	limpaInput();
	const li = criaLi();
	tarefa.appendChild(li);
	li.innerText = texto;
	criaBotaoApagar(li);
	salvarTarefas();
}
/* keyup é pressionar e soltar, keydown é precionar e manter e keypress é pressionar(podendo manter ou não precionando) */
inputTarefa.addEventListener('keyup', function (e) {
	// console.log(e) => vai servir prar vermos as teclas pressionadas
	if (e.keyCode === 13) {
		if (!inputTarefa.value) return;
		criaTarefas(inputTarefa.value);
	}
});

addTarefa.addEventListener('click', function (e) {
	if (!inputTarefa.value) return;
	criaTarefas(inputTarefa.value);
});

document.addEventListener('click', function (e) {
	const el = e.target;
	if (el.classList.contains('apagar')) {
		el.parentElement.remove();
		salvarTarefas();
	}
});
function salvarTarefas() {
	const liTarefas = tarefa.querySelectorAll('li');
	const listaDeTarefas = [];
	for (let tarefas of liTarefas) {
		let textoTarefas = tarefas.innerText;
		//esse trim é para remorer espaços sobrando
		textoTarefas = textoTarefas.replace('Apagar', '').trim();
		listaDeTarefas.push(textoTarefas);
	}
	// ele transforma JSON em string e nos permite salvar os dados onde quisermos e dps podemos converter de volta para array no caso atual
	const tarefasJSON = JSON.stringify(listaDeTarefas);
	// vai salvar numa mini base de dados do proprio navegador.
	localStorage.setItem('tarefas', tarefasJSON);
}
function addTarefasSalvas() {
	const tarefas = localStorage.getItem('tarefas');
	const listaDeTarefas = JSON.parse(tarefas);
	for (let tarefa of listaDeTarefas) {
		criaTarefas(tarefa);
	}
}
addTarefasSalvas();

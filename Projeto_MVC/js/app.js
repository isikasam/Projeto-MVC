/**
 * Arquivo principal da aplicação.
 */

import { TarefaModel } from "../js_models/TarefaModel.js";
import { TarefaView } from "../js_views/TarefaView.js";
import { TarefaController } from "../js_controllers/TarefaController.js";

// Instâncias MVC
const model = new TarefaModel();
const view = new TarefaView();
const controller = new TarefaController(model, view);

// Componentes
const input = document.querySelector("#tarefa-input");
const prioridade = document.querySelector("#prioridade");
const btnAdicionar = document.querySelector("#btn-adicionar");

const btnTodas = document.querySelector("#btn-todas");
const btnPendentes = document.querySelector("#btn-pendentes");
const btnConcluidas = document.querySelector("#btn-concluidas");

const toggleTema = document.querySelector("#toggle-tema");

// -------------------------
// Adicionar tarefa
// -------------------------

btnAdicionar.addEventListener("click", () => {

    controller.adicionarTarefa(
        input.value,
        prioridade.value
    );

});

input.addEventListener("keypress", (e) => {

    if (e.key === "Enter") {

        controller.adicionarTarefa(
            input.value,
            prioridade.value
        );

    }

});

// -------------------------
// Filtros
// -------------------------

btnTodas.addEventListener("click", () => {

    controller.alterarFiltro("todas");

});

btnPendentes.addEventListener("click", () => {

    controller.alterarFiltro("pendentes");

});

btnConcluidas.addEventListener("click", () => {

    controller.alterarFiltro("concluidas");

});

// -------------------------
// Tema Claro / Escuro
// -------------------------

toggleTema.addEventListener("change", () => {

    document.body.classList.toggle("dark");

});
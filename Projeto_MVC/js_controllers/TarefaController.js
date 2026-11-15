/**
 * Controller
 * Faz a comunicação entre o Model e a View.
 */

export class TarefaController {

    constructor(model, view) {

        this.model = model;
        this.view = view;

        this.filtroAtual = "todas";

        this.renderizar();

    }

    adicionarTarefa(texto, prioridade) {

        if (texto.trim() === "") return;

        this.model.adicionar(texto, prioridade);

        this.renderizar();

    }

    alternarConclusao(index) {

        this.model.alternarConclusao(index);

        this.renderizar();

    }

    alterarFiltro(filtro) {

        this.filtroAtual = filtro;

        this.renderizar();

    }

    renderizar() {

        let tarefas;

        switch (this.filtroAtual) {

            case "pendentes":
                tarefas = this.model.obterPendentes();
                break;

            case "concluidas":
                tarefas = this.model.obterConcluidas();
                break;

            default:
                tarefas = this.model.obterTodas();
                break;
        }

        this.view.renderizar(tarefas);

        this.adicionarEventos();

    }

    adicionarEventos() {

        const checkboxes =
            document.querySelectorAll(".checkbox-concluir");

        checkboxes.forEach((checkbox) => {

            checkbox.addEventListener("change", (e) => {

                const index =
                    e.target.dataset.index;

                this.alternarConclusao(index);

            });

        });

    }

}
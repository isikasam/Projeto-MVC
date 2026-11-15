/**
 * View
 * Responsável apenas por exibir as tarefas na tela.
 */

export class TarefaView {

    constructor() {

        this.container = document.querySelector("#lista-container");
        this.input = document.querySelector("#tarefa-input");

    }

    renderizar(tarefas) {

        this.container.innerHTML = "";

        tarefas.forEach((tarefa, index) => {

            const li = document.createElement("li");

            li.classList.add(tarefa.prioridade);

            if (tarefa.concluida) {
                li.classList.add("concluida");
            }

            li.innerHTML = `

                <div class="tarefa">

                    <label>

                        <input
                            type="checkbox"
                            class="checkbox-concluir"
                            data-index="${index}"
                            ${tarefa.concluida ? "checked" : ""}>

                        <span>${tarefa.texto}</span>

                    </label>

                </div>

                <span class="badge ${tarefa.prioridade}">
                    ${tarefa.prioridade === "alta" ? "🔴 Alta" :
 tarefa.prioridade === "media" ? "🟡 Média" :
 "🟢 Baixa"}
                </span>

            `;

            this.container.appendChild(li);

        });

        if (this.input) {

            this.input.value = "";

            this.input.focus();

        }

    }

}
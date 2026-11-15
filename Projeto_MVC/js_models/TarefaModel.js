/**
 * Model
 * Responsável por armazenar e manipular os dados das tarefas.
 */

export class TarefaModel {

    constructor() {

        this.tarefas = [

            {
                texto: "Estudar HTML",
                concluida: false,
                prioridade: "alta"
            },

            {
                texto: "Aprender CSS",
                concluida: false,
                prioridade: "media"
            },

            {
                texto: "Programar JavaScript",
                concluida: false,
                prioridade: "baixa"
            }

        ];

    }

    adicionar(texto, prioridade) {

        if (texto.trim() === "") return;

        this.tarefas.push({

            texto: texto,

            concluida: false,

            prioridade: prioridade

        });

    }

    alternarConclusao(index) {

        this.tarefas[index].concluida =
            !this.tarefas[index].concluida;

    }

    obterTodas() {

        return this.tarefas;

    }

    obterPendentes() {

        return this.tarefas.filter(t => !t.concluida);

    }

    obterConcluidas() {

        return this.tarefas.filter(t => t.concluida);

    }

}
import { useEffect, useState } from "react"
import ClientCollection from "../backend/db/ClientCollection"
import Client from "../core/Client"
import ClientRepository from "../core/ClientRepository"
import useTableOrForm from "./useTableOrForm"

export default function useClients() {
    const repo: ClientRepository = new ClientCollection()

    const { tabelaVisivel, exibirTabela, exibirFormulario } = useTableOrForm()

    const [client, setClient] = useState<Client>(Client.empty())
    const [clients, setClients] = useState<Client[]>([])

    useEffect(obterTodos, [])

    function obterTodos() {
        repo.obterTodos().then(clients => {
            setClients(clients)
            exibirTabela()
        })
    }

    function selecionarCliente(client: Client) {
        setClient(client)
        exibirFormulario()
    }

    async function excluirCliente(client: Client) {
        await repo.excluir(client)
        obterTodos()
    }

    function novoClient() {
        setClient(Client.empty())
        exibirFormulario()
    }

    async function salvarClient(client: Client) {
        await repo.salvar(client)
        obterTodos()
    }

    return {
        client,
        clients,
        novoClient,
        salvarClient,
        excluirCliente,
        selecionarCliente,
        obterTodos,
        tabelaVisivel,
        exibirTabela
    }
}
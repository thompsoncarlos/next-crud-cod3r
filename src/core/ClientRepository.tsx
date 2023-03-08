import Client from "./Client";

export default interface ClientRepository {
    salvar(client: Client): Promise<Client>
    excluir(client: Client): Promise<void>
    obterTodos(): Promise<Client[]>
}
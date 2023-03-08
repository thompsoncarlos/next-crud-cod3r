import Button from "../components/Button";
import Form from "../components/Form";
import Layout from "../components/Layout";
import Table from "../components/Table";
import Client from "../core/Client";

import useClients from "../hooks/useClients";

export default function Home() {
  const {
    client,
    clients,
    novoClient,
    salvarClient,
    selecionarClient,
    excluirClient,
    tabelaVisivel,
    exibirTabela,
  } = useClients();

  function clientSelected(client: Client) {
    console.log(client.name);
  }

  function clientDeleted(client: Client) {
    console.log(`Exclui... ${client.name}`);
  }

  return (
    <div
      className={`
     flex justify-center items-center h-screen
     bg-gradient-to-r from-blue-500 to-purple-500
    `}
    >
      <Layout title="Simple Register">
        {tabelaVisivel ? (
          <>
            <div className="flex justify-end">
              <Button color="green" className="mb-4" onClick={novoClient}>
                New Client
              </Button>
            </div>
            <Table
              clients={clients}
              clientSelected={clientSelected}
              clientDeleted={clientDeleted}
            />
          </>
        ) : (
          <Form
            client={client}
            changedClient={salvarClient}
            cancel={exibirTabela}
          />
        )}
      </Layout>
    </div>
  );
}

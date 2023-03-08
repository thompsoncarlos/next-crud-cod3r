import { useState } from "react";
import Client from "../core/Client";
import Button from "./Button";
import Entry from "./Entry";

interface FormProps {
    client: Client
    changedClient?: (client: Client) => void
    cancel?: () => void
}

export default function Form(props: FormProps) {
    const id = props.client?.id
    const [name, setName] = useState(props.client?.name ?? '')
    const [age, setAge] = useState(props.client?.age ?? 0)

    return (
        <div>
            {id ? (
                <Entry
                    onlyRead
                    text="Code"
                    value={id}
                    className="mb-5"
                />
            ) : false}
            <Entry 
                text="Name"
                value={name}
                changedValue={setName}
                className="mb-5"
            />
            <Entry
                text="Age"
                type="number"
                value={age}
                changedValue={setAge}
            />
            <div className="flex justify-end mt-7">
                <Button color="blue" className="mr-2"
                    onClick={() => props.changedClient?.(new Client(name, +age, id))}>
                    {id ? 'Alterar' : 'Salvar'}
                </Button>
                <Button onClick={props.cancel}>
                    Cancelar
                </Button>
            </div>
        </div>
    )
}
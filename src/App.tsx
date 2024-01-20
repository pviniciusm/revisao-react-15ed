import { useEffect, useState } from "react";
import { Container } from "./components/Container";
import { Header } from "./components/Header";
import { Aluno } from "./models/aluno.model";
import { listarAlunos } from "./services/api.service";

function App() {
    const [alunos, setAlunos] = useState<Aluno[]>([]);

    useEffect(() => {
        listarAlunos().then((result) => setAlunos(result));
    }, []);

    return (
        <>
            <Container>
                <Header />
                <h1>Listagem de alunos</h1>

                <ul>
                    {alunos.map((item) => {
                        return (
                            <li>
                                Aluno #{item.id} - {item.nome} - {item.email}
                            </li>
                        );
                    })}
                </ul>
            </Container>
        </>
    );
}

export default App;

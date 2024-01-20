import axios from "axios";
import { Aluno } from "../models/aluno.model";
import { tratarErro } from "../util/error.helper";

const api = axios.create({
    baseURL: "http://localhost:3335",
});

export async function listarAlunos(): Promise<Aluno[]> {
    try {
        const result = await api.get("/aluno");

        console.log(result.data);

        return result.data.data;
    } catch (error: any) {
        tratarErro(error);

        return [];
    }
}

export function tratarErro(error: any) {
    console.log(error);

    let message = "Algo de errado não está certo! Tente novamente mais tarde.";

    if (error?.response?.data?.message) {
        message = error?.response?.data?.message;
    }

    alert(message);
}

function instalarAplicativo(espacoDisponivel, conexaoInternet) {
    // Verificar se há espaço disponível no dispositivo
    if (espacoDisponivel >= tamanhoDoAplicativo) {
        // Verificar a conexão com a internet
        if (conexaoInternet) {
            console.log("Baixar e instalar o aplicativo");
            console.log("O aplicativo foi instalado com sucesso!");
        } else {
            return "Conectar-se à internet para instalar o aplicativo";
        }
    } else {
        return "Liberar espaço no dispositivo para instalar o aplicativo";
    }
}

// Tamanho aproximado do aplicativo em MB
const tamanhoDoAplicativo = 50;
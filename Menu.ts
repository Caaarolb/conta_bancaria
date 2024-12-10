import readlinesync = require("readline-sync");
import { colors } from './src/util/Colors';

export function main() {

    let opcao: number;

    while (true) {
        console.log(colors.bg.white, colors.fg.red,)
        console.log("*****************************************************");
        console.log("                                                     ");
        console.log("                BANCO DO BRAZIL COM Z                ");
        console.log("                                                     ");
        console.log("*****************************************************");
        console.log("                                                     ");
        console.log("            1 - Criar Conta                          ");
        console.log("            2 - Listar todas as Contas               ");
        console.log("            3 - Buscar Conta por Numero              ");
        console.log("            4 - Atualizar Dados da Conta             ");
        console.log("            5 - Apagar Conta                         ");
        console.log("            6 - Sacar                                ");
        console.log("            7 - Depositar                            ");
        console.log("            8 - Transferir valores entre Contas      ");
        console.log("            9 - Sair                                 ");
        console.log("                                                     ");
        console.log("*****************************************************");
        console.log("                                                     ",
        colors.reset);

        console.log("Entre com a opção desejada: ");
        opcao = readlinesync.questionInt("");

        if (opcao == 9) {
            console.log("\nBanco do Brazil com Z - O seu Futuro começa aqui!");
            sobre();
            process.exit(0);
        }

        switch (opcao) {
            case 1:
                console.log(colors.fg.blue,
                    "\n\nCriar Conta\n\n", colors.reset);

                break;
            case 2:
                console.log(colors.fg.blue,
                    "\n\nListar todas as Contas\n\n", colors.reset);

                break;
            case 3:
                console.log(colors.fg.blue,
                    "\n\nConsultar dados da Conta - por número\n\n", colors.reset);

                break;
            case 4:
                console.log(colors.fg.blue,
                    "\n\nAtualizar dados da Conta\n\n" , colors.reset);

                break;
            case 5:
                console.log(colors.fg.blue,
                    "\n\nApagar uma Conta\n\n", colors.reset);

                break;
            case 6:
                console.log(colors.fg.blue,
                    "\n\nSaque\n\n", colors.reset);

                break;
            case 7:
                console.log(colors.fg.blue,
                    "\n\nDepósito\n\n", colors.reset);

                break;
            case 8:
                console.log(colors.fg.blue,
                    "\n\nTransferência entre Contas\n\n", colors.reset);

                break;
            default:
                console.log(colors.fg.blue,
                    "\nOpção Inválida!\n", colors.reset);

                break;
        }
    }

}

function keypress(): void {
    console.log(colors.reset,"");
    console.log("\nPressione entre para continuar...");
    readlinesync.prompt();
}
/* Função com os dados da pessoa desenvolvedora */

export function sobre(): void {
    console.log("\n*****************************************************");
    console.log("Projeto Desenvolvido por: Jeisa Caroline ");
    console.log("Linkedin - https://www.linkedin.com/in/-caroline-boaventura");
    console.log("https://github.com/Caaarolb");
    console.log("*****************************************************");
}

main();
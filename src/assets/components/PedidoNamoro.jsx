import "../styles/PedidoNamoro.css"

import { useState } from "react";

function PedidoNamoro() {
    const [fontSize, setFontSize] = useState(15); // Tamanho inicial da fonte do "Sim"

    const handleSimClick = () => {

        alert("você fez sua melhor escolha ❤️!")

    };

    const handleNaoClick = () => {
        setFontSize((prevSize) => prevSize + 2); // Aumenta o tamanho da fonte do "Sim"
    };

    return (
        <div style={{ textAlign: "center", marginTop: "50px" }}>
            <div>
                <button className="BotaoSim"
                    onClick={handleSimClick}
                    style={{ fontSize: `${fontSize}px` }} // Aplica o tamanho da fonte ao botão "Sim"
                >
                    Sim
                </button>

                <button className="BotaoNao"
                    onClick={handleNaoClick}
                    style={{ marginLeft: "20px" }}
                >
                    Não
                </button>

            </div>
        </div>
    );
}
    export default PedidoNamoro;

import "../styles/MelhorEscolha.css"

import { useState } from "react";
import MelhorEscolha from "./MelhorEscolha"; // Importe a classe

function PedidoNamoro() {
  const [mostrarEscolha, setMostrarEscolha] = useState(false); // Estado para controlar a visibilidade

  const handleSimClick = () => {
    setMostrarEscolha(true); // Muda o estado para `true` ao clicar em "Sim"
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <div>
        <button onClick={handleSimClick}>Sim</button>
        <button style={{ marginLeft: "20px" }}>Não</button>
      </div>
      
      {mostrarEscolha && <MelhorEscolha />} {/* Exibe `MelhorEscolha` apenas se `mostrarEscolha` for `true` */}
    </div>
  );
}

export default PedidoNamoro;

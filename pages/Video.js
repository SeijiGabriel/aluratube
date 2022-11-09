import React from "react";
import { ColorModeContext } from "../components/Menu/componentes/ColorMode";


export default function Video() {
    const contexto = React.useContext(ColorModeContext);

    return (
        <div>
            Video!
            {contexto.mode}
            <button onClick={() => contexto.toggleMode()}>
                Trocar modo
            </button>
        </div>
    )
}
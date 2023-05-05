

import "./ListaOpciones.css"

export const Lista = (props) => {

    const { actualizarEquipo } = props

    const manejarCambio = (e) => {
        //console.log("cambio", e.target.value)
        actualizarEquipo(e.target.value)
    }

    return <div className="lista-opciones">
        <label>Equipos</label>
        <select value={props.valor} onChange={manejarCambio}>
            <option value="" disabled defaultValue="" hidden>Seleccionar equipo</option>
            {props.equipos.map((team, index) => <option key={index} valor={team}>{team}</option>)}
        </select>
    </div>
}
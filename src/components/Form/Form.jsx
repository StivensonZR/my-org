
import './Form.css'
import { useState } from 'react'
import { Input } from './Input/Input'
import { Lista } from '../ListaOpciones/lista'
import { Boton } from '../Boton/Boton'

export const Form = (props) => {

    const [nombre, setNombre] = useState("")
    const [puesto, setPuesto] = useState("")
    const [foto, setFoto] = useState("")
    const [team, setTeam] = useState("")

    const [nombreEquipo, setNombreEquipo] = useState("")
    const [color, setColor] = useState("")

    const { registrarColaborador, crearTeam } = props

    /*   const chooseTeam = (event) => {
          setTeam(event.target.value)
      } */

      
    const create = (event) => {
        event.preventDefault()
        let datosEnviar = { 
            team,
            foto,
            nombre,
            puesto
        }
        
        registrarColaborador(datosEnviar)
    }


    const createTeam = (event) => {
        event.preventDefault()
        // console.log({nombreEquipo, colorPri: color})
        crearTeam({nombre: nombreEquipo, colorPri: color})
    }

    return (
        <section className="form">
            <form onSubmit={create}>
                <h2>Rellena el formulario para crear el colaborador</h2>

                <Input
                    name="Nombre"
                    placeholder="Ingresar nombre"
                    valor={nombre}
                    setValor={setNombre}
                    required
                />
                <Input
                    name="Puesto"
                    placeholder="Ingresar puesto"
                    valor={puesto}
                    setValor={setPuesto}
                    required
                />
                <Input
                    name="Foto"
                    placeholder="Ingresar enlace foto"
                    valor={foto}
                    setValor={setFoto}
                    required
                />

                <Lista
                    valor={team}
                    actualizarEquipo={setTeam}
                    equipos={props.teams}
                />

                {/*  <div className='campo'>
                    <label>Equipo</label>
                    <select
                        valor={team}
                        onChange={chooseTeam}
                        teams={props.team}
                    >
                        <option
                            value=""
                            defaultValue=""
                            hidden
                        >
                            Selecciona el equipo
                        </option>

                        {
                            props.team.map((team, index) => {
                                return <option
                                    key={index}
                                    value={team}
                                >
                                    {team}
                                </option>
                            })
                        }

                    </select>
                </div> */}


                <Boton>
                    Crear
                </Boton>
            </form>

            <form onSubmit={createTeam}>
                <h2>Rellena el formulario para crear el equipo</h2>

                <Input
                    name="Nombre equipo"
                    placeholder="Ingresar nombre del equipo"
                    valor={nombreEquipo}
                    setValor={setNombreEquipo}
                    required
                />
                <Input
                    type="color"
                    name="Color"
                    placeholder="Ingresar el color en hex"
                    valor={color}
                    setValor={setColor}
                    required
                />
                <Boton>
                    Crear
                </Boton>
            </form>
        </section>
    )
}

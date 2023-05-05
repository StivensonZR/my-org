
import './Team.css'
import { Colaborador } from '../Card/Colaborador'
import hexToRgba from 'hex-to-rgba'

export const Team = (props) => {



    const { id, nombre, colorPri, colorSec } = props.data
    const { colaboradores, eliminarColaborador, actualizarColor, like } = props


    const styleNombre = { borderColor: colorPri }
    const styleBack = { backgroundColor: hexToRgba(colorPri, 0.6)}

    return <>
        {
            colaboradores.length > 0 &&
            <section
                className='team'
                style={styleBack}
            >

                <input
                    type='color'
                    className="input-color"
                    value={colorPri}
                    onChange={(evento) => {
                        actualizarColor(evento.target.value, id)
                    }}
                />

                <h3 style={styleNombre}>
                    {nombre}
                </h3>

                <div className='colaboradores'>
                    {
                        colaboradores.map((colaborador, index) => <Colaborador
                            key={index}
                            datos={colaborador}
                            colorPri={colorPri}
                            eliminarColaborador={eliminarColaborador}
                            like={like}
                        />
                        )
                    }
                </div>

            </section >
        }
    </>


}




import './Org.css'

export const Org = (props) => {
    return (
        <section className='orgSection'>
            <h3>Mi Organización</h3>
            <img
                src='/boton+.png'
                alt='add'
                onClick={props.cambiarMostrar}
            />
        </section>
    )
}

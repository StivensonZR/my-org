
import './Input.css'

export const Input = (props) => {

    const { placeholder, required, valor } = props

    const { type = "text" } = props

    const handleChange = (event) => {
        props.setValor(event.target.value)
    }

    return (
        <div className={`campo campo-${type}`}>
            <label>{props.name}</label>
            <input
                type={type}
                placeholder={placeholder}
                required={required}
                value={valor}
                onChange={handleChange}
            />

        </div>
    )

    
}

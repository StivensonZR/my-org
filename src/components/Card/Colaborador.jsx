import "./Colaborador.css";
import { AiFillCloseCircle, AiOutlineHeart, AiFillHeart } from "react-icons/ai";

export const Colaborador = (props) => {
  const { nombre, puesto, foto, id, fav } = props.datos;
  const { styleNombre, colorPri, eliminarColaborador, like } = props;

  return (
    <div className="colaborador">
      <AiFillCloseCircle
        width={100}
        className="eliminar"
        onClick={() => eliminarColaborador(id)}
      />
      <div className="colaborador-header" style={{ backgroundColor: colorPri }}>
        <img src={foto} alt={nombre} />
      </div>
      <div className="info">
        <h4 style={styleNombre}>{nombre}</h4>
        <h5>{puesto}</h5>
        {
          fav ? <AiFillHeart 
                  className="heart" 
                  color="red" 
                    onClick={() => like(id)}
                /> 
              : <AiOutlineHeart  
                  className="heart"  
                  onClick={() => like(id)}
              />
             }
      </div>
    </div>
  );
};

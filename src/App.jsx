
import './App.css'
import { Form } from './components/Form/Form'
import { Header } from "./components/Header/Header"
import { Footer } from "./components/Footer/Footer"
import { Org } from './components/Org/Org'
import { Team } from './components/Team/Team'
import { useState } from 'react'
import { v4 as uuid } from 'uuid'

function App() {

  const [mostrarForm, setMostrarForm] = useState(true)
  const [colaboradores, setColaboradores] = useState([
  /*   {
      id: uuid(),
      team: "Front End",
      foto: "https://github.com/harlandlohora.png",
      nombre: "Harland Lohora",
      puesto: "Instructor",
      fav: true
    },
    {
      id: uuid(),
      team: "Programación",
      foto: "https://github.com/genesysaluralatam.png",
      nombre: "Genesys Rondón",
      puesto: "Desarrolladora de software e instructora",
      fav: false
    },
    {
      id: uuid(),
      team: "UX y Diseño",
      foto: "https://github.com/JeanmarieAluraLatam.png",
      nombre: "Jeanmarie Quijada",
      puesto: "Instructora en Alura Latam",
      fav: false
    },
    {
      id: uuid(),
      team: "Programación",
      foto: "https://github.com/christianpva.png",
      nombre: "Christian Velasco",
      puesto: "Head de Alura e Instructor",
      fav: false
    },
    {
      id: uuid(),
      team: "Innovación y Gestión",
      foto: "https://github.com/JoseDarioGonzalezCha.png",
      nombre: "Jose Gonzalez",
      puesto: "Dev FullStack",
      fav: false
    } */
  ])


  const [teams, setTeams] = useState([
   /* 
    {
      id: uuid(),
      nombre: "Programación",
      colorPri: "#57C278",
      colorSec: "#D9F7E9"
    },
    {
      id: uuid(),
      nombre: "Front End",
      colorPri: "#82CFFA",
      colorSec: "#E8F8FF"
    },
     
    {
      id: uuid(),
      nombre: "Data Science",
      colorPri: "#A6D157",
      colorSec: "#F0F8E2"
    },
    {
      id: uuid(),
      nombre: "Devops",
      colorPri: "#E06B69",
      colorSec: "#FDE7E8"
    },
    {
      id: uuid(),
      nombre: "UX y Diseño",
      colorPri: "#DB6EBF",
      colorSec: "#FAE9F5"
    },

    {
      id: uuid(),
      nombre: "Movil",
      colorPri: "#FFBA05",
      colorSec: "#FFF5D9"
    },

    {
      id: uuid(),
      nombre: "Innovación y Gestión",
      colorPri: "#FF8A29",
      colorSec: "#FFEEDF"
    } */
  ])


  const cambiarMostrar = () => {
    setMostrarForm(!mostrarForm)
  }


  const registrarColaborador = (colaborador) => {
    //console.log('nuevo colaborador', colaborador)
    setColaboradores([...colaboradores, colaborador])
  }

  //Eliminar colaborador
  const eliminarColaborador = (id) => {
    //console.log("Eliminar colaborador", id)
    const nuevosColaboradores = colaboradores.filter(
      (colaborador) => colaborador.id !== id)
    setColaboradores(nuevosColaboradores)
  }

  //Actualizar color de equipo
  const actualizarColor = (color, id) => {
    //console.log("Actualizar: ", color, id)
    const equiposActualizados = teams.map((team) => {
      if (team.id === id) {
        team.colorPri = color
      }

      return team
    })

    setTeams(equiposActualizados)
  }

  const crearTeam = (nuevoTeam) => {
    setTeams([...teams, { ...nuevoTeam, id: uuid() }])
    alert('Se ha creado el equipo')
  }

  const like = (id) => {
    //console.log(id)
    const colaboradoresActualizados = colaboradores.map((colaborador) => {
      if (colaborador.id === id) {
        colaborador.fav = !colaborador.fav
      }
      return colaborador
    })
    setColaboradores(colaboradoresActualizados)
  }

  return (
    <div >
      <Header />

      {
        mostrarForm && <Form
          teams={teams.map((team) => team.nombre)}
          registrarColaborador={registrarColaborador}
          crearTeam={crearTeam}
        />
      }

      <Org cambiarMostrar={cambiarMostrar} />

      {
        teams.map((team) => <Team
          key={team.nombre}
          data={team}
          colaboradores={colaboradores.filter(colaborador => colaborador.team === team.nombre)}
          eliminarColaborador={eliminarColaborador}
          actualizarColor={actualizarColor}
          like={like}
        />)
      }

      <Footer />
    </div>
  )
}

export default App

import React from 'react'
import './styles/AddButton.css'
import buttonImg from '../images/add.png'
import { Link } from 'react-router-dom'

//Babel
const AddButton = () => (
    <Link to="/exercise/new">
        <img src={buttonImg} className="Fitness-Add" alt="exercise"/>
    </Link> 
)

//EC6
// function AddButton = () => (
//     <Link to="/exercise/new">
//         <img src={buttonImg} className="Fitness-Add" alt="exercise"/>
//     </Link>
// )

export default AddButton
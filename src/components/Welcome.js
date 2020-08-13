import React from 'react'
import './styles/Welcome.css'


// Componente funcional, solo mostrara un mensaje.
function Welcome(props){

    return(
        <div className='container'>
            <div className='Fitness-User-Info'>
                <h1>Hello {props.username}!</h1>
                <p>
                    Let´s workout to get some gains!
                </p>
            </div>
        </div>
    )
}

export default Welcome
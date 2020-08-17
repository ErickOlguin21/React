import React from 'react'
import './styles/Welcome.css'


//Babel
const Welcome = ({username}) => (
    <div className='container'>
            <div className='Fitness-User-Info'>
                <h1>Hello {username}!</h1>
                <p>
                    Let´s workout to get some gains!
                </p>
            </div>
        </div>
)
// Componente funcional, solo mostrara un mensaje.
// function Welcome(props){
//     return(
//         <div className='container'>
//             <div className='Fitness-User-Info'>
//                 <h1>Hello {props.username}!</h1>
//                 <p>
//                     Let´s workout to get some gains!
//                 </p>
//             </div>
//         </div>
//     )
// }

export default Welcome
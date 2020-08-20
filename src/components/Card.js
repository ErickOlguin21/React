import React from 'react'
import circlesImg from '../images/circles.png'
import emptyImg from '../images/empty.png'
import './styles/Card.css'

//Creacion de componentes de clase, puede ver el estado del componente y trabajar con el ciclo de vida de este.
const Card = ({title,description,img,leftColor,rightColor}) => (
            <div className='card mx-auto Fitness-Card' 
            style = {{
                backgroundImage: `url(${circlesImg}), linear-gradient(to right, ${leftColor || '#56CCF2'}  , ${rightColor|| '#2F80ED'}`
            }}
            >

                <div className='card-body'>
                    <div className='row center'>
                        <div className='col-6'>
                            <img src= {img || emptyImg} className='float-right' />
                        </div>
                        <div className='col-6 Fitness-Card-Info'>
                            <h1>
                                {title}
                            </h1>
                            <p>
                                {description}
                            </p>
                        </div>
                    </div>
                </div>
            </div>

)

// class Card extends React.Component {
//     // constructor(props){
//     //     super(props)
//     //     this.state = {
//     //         image: 'https://firebasestorage.googleapis.com/v0/b/tutoriales-e4830.appspot.com/o/bulbasaur.png?alt=media&token=567caf19-af47-414e-a9d4-3854ab24c7dc'
//     //     }
//     // }
//     // componentDidCatch() Cacha errores que lleguen a surgir
//     // enlazar un evento
//     // componentDidMount(){
//     //     setTimeout(() =>{
//     //         this.setState({
//     //             image: 'https://github.com/rulpalacios/FitnessApp/blob/master/src/images/exercise.png'
//     //         })
//     //     }, 5000)
//     // }
//     render() {
//         const {title,description,img,leftColor,rightColor} = this.props
//         return (
//         )
//     }
// }

export default Card

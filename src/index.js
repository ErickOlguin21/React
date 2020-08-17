import React from 'react'
import ReactDOM from 'react-dom'
import 'bootstrap/dist/css/bootstrap.css'
import App from './components/App'

const container = document.getElementById('root')

ReactDOM.render(<App />, container)

// const user = {
//     firstName: 'Erick',
//     lastName: 'Olguin',
//     avatar: 'http'
// }
// function getName(user){
//     return `${user.firstName} ${user.lastName}`
// }

// function getGreeting(user){
//     if(user){
//         return <h1>Hello {getName(user)}</h1>
//     }
//     return <h1>Hello Stranger</h1>
// }

// const name = 'Erick'
// // const element = <img src= {user.avatar} />
// const element = (
//     <div>
//         <h1>{getGreeting(user)}</h1>
//         <img src= {user.avatar} />
//     </div>
//     )
// const container = document.getElementById('root')

// // ReactDOM.render(__QUE__,__DONDE__)

// ReactDOM.render(element,container)
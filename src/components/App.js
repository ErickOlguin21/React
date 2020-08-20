import React from 'react'
import Exercises from '../pages/Exercises'
import ExerciseNewContainer from '../pages/ExerciseNewContainer'
import { BrowserRouter, Route, Switch} from 'react-router-dom'
import NotFound from '../pages/NotFound'

// Babel
const App = () =>(
    <BrowserRouter>
        <Switch>
            <Route exact path = '/exercise' component = {Exercises}/>
            <Route exact path = '/exercise/new' component = {ExerciseNewContainer}/>
            <Route component = {NotFound}/>
        </Switch>
    </BrowserRouter>


)

// EC6
// function App(){
//     return (
//     <BrowserRouter>
//         <Switch>
//             <Route exact path = '/exercise' component = {Exercises}/>
//             <Route exact path = '/exercise/new' component = {ExercisesNew}/>
//             <Route component = {NotFound}/>
//         </Switch>
//     </BrowserRouter>
//     )

// }

export default App
import React from 'react'
import ExerciseList from '../components/ExerciseList'
import Welcome from '../components/Welcome'
import AddButton from '../components/AddButton'
import Loading from '../components/Loading'
import FatalError from './500'

class Exercises extends React.Component {
    // constructor(props){
    //     super(props)
    //     this.state = {
        state = {
            data: [],
            loading: true,
            error: null,    
        // }
    }

    async componentDidMount(){
        await this.fetchExercises()
    }

    fetchExercises = async () => {
        try {
            let res = await fetch('http://localhost:8000/api/exercises')
            let data = await res.json()
            this.setState({
                data,
                loading: false
            })
            
        } catch (error) {
            this.setState({
                loading: false,
                error
            })  
        }
    }

    render(){
        if (this.state.loading)
            return <Loading />
        if(this.state.error)
            return <FatalError /> 
        return (
            // Sirve para pasar mas de un componente sin un div, eliminar elementos inecesarios dede el DOM
            <React.Fragment> 
                <Welcome 
                username = 'Erick'
                />
                <ExerciseList 
                exercises = {this.state.data}/>
                <AddButton />
            </React.Fragment> )
    
    }

}

export default Exercises
import React from 'react'
import ExerciseList from '../components/ExerciseList'
import Welcome from '../components/Welcome'
import AddButton from '../components/AddButton'

class Exercises extends React.Component {
    // constructor(props){
    //     super(props)
    //     this.state = {
        state = {
            data: []            
        // }
    }

    async componentDidMount(){
        await this.fetchExercises()

    }

    fetchExercises = async () => {
        let res = await fetch('http://localhost:8000/api/exercises')
    }

    render(){
        return (
            <div>
                <Welcome 
                username = 'Erick'
                />
                <ExerciseList 
                exercises = {this.state.data}/>
                <AddButton />
            </div> )
    
    }

}

export default Exercises
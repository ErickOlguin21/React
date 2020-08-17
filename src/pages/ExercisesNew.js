import React from 'react'
import ExercisesForm from '../components/ExercisesForm'
import Card from '../components/Card'

// class ExercisesNew extends React.Component{
    // constructor(props){
    //     super(props)
    //     this.handleClick = this.handleClick.bind(this)
    // }
    // Public class field
    // handleClick = ()=> {
    //     console.log(this)
    // }
    // handleClick = ()=> {
    //     console.log('Clicked')
    // }
    // render(){
const ExercisesNew = ({form, onChange, onSubmit}) => (
                <div className="ExerciseNew_Lateral_Spaces row">
                    <div className="col-sm ExerciseNew_Card_Space">
                        <Card 
                            {...form}
                        />
                    </div>
                    <div className="col-sm ExerciseNew_Form_Space">
                        <ExercisesForm
                            onChange={onChange}
                            onSubmit={onSubmit}
                            form={form}
                        />            
                    </div>
                </div>
            )
            
export default ExercisesNew
        // <button onClick = {this.handleClick}>
        //     Send
        // </button>
//         )
//     }

// }

// export default ExercisesNew

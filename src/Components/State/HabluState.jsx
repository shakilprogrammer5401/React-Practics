
import React from "react";

class HabluSate extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            firstName : 'Md Shakil'
        }
    }

    fullName = ()=>{
        this.setState({
            firstName :  'Md Shakil Hossain'
        })
    }
    render(){
        const {firstName} = this.state
        return(
            <>
            <h2 className="text-4xl text-red-500 font-semibold">Hey my Name is  : {firstName}</h2>
            <button onClick={this.fullName} className="bg-red-600 text-white font-semibold text-xl py-2 px-5 rounded-full mt-4">Click to full Name</button>
            
            </>
        )
    }
}

export default HabluSate
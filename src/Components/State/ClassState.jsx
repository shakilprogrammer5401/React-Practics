import React from "react";

class ClassState extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            count : 0
        }
    }
          incrementCount = ()=>{
            this.setState({
                count : this.state.count + 1
            })
          }
        decrementCount = ()=>{
            if(this.state.count > 0){
                this.setState({
                    count : this.state.count - 1
                })
            }
        }
    render(){
        const {count} = this.state
        return(
            <>
            <h2 className="text-4xl text-red-600 font-semibold " >Count: {count} </h2>
            <button onClick={this.incrementCount} className="py-2 px-4  bg-red-600 text-white font-bold rounded-md ml-5 mt-3">+</button>
            <button onClick={this.decrementCount} className="py-2 px-4  bg-red-600 text-white font-bold rounded-md ml-5 mt-3">-</button>
            
            
            </>
        )
    }
}

export default ClassState;
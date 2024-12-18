import React from "react";

class ClassComponent  extends React.Component{
    render(){
        return(
            <>
                    <h1>Name : {this.props.name} </h1>
                    <p>Age: {this.props.age} </p>
            
            </>
        )
    }
}

export default  ClassComponent

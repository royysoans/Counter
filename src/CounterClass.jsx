import React from 'react'

class CounterClass extends React.Component{
    constructor(props){
        super(props);
        this.state={count:0};
    }


increment=()=>{
    this.setState({count:this.state.count +1});
};

decrement=()=>{
    this.setState({count:this.state.count>0?this.state.count-1:0 });
};

render(){
    return (
        <div>
            <h1>Class Componenet Counter</h1>
            <p>{this.state.count}</p>
            <button onClick={this.increment}>+</button>
            <button onClick={this.decrement}>-</button>
        </div>
    )
}
}
export default CounterClass;
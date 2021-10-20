import React,{Component}  from "react";

class ErrorBoundaries extends Component {
    constructor(props){
        super();
        this.state={
            hasError:false
        }
    }
    componentDidCatch(error,info){
        this.setState({hasError:true})
    }
    render(){
        if(this.state.hasError){
            return (<h1>oooopps ,unexpected Error</h1>)
        }
        return this.props.children;
    }
}
export default ErrorBoundaries;
import React from "react";

class Counter extends React.Component{

    state = {
        title : "Loading...",
        prevTitle : "",
        count : 0,
    };

    componentDidMount() {
        setTimeout(() => {
            this.setState({
                ...this.state,
                title: "Counter Page",
            })
        }, 2000);
        
        this.setState({
            ...this.state,
            prevTitle: document.title,
        })
        document.title = "Counter Page";
    }

    componentWillUnmount() {
        document.title = this.state.prevTitle;
    }
    onPlus = () => {
        this.setState((prevState) => {
            return {
                ...prevState,
                count : prevState.count + 1,
            };
        });
    };
    onReset = () => {
        this.setState({
            ...this.state,
            count: 0,
        });
    };
    onMinus = () => {
        this.setState((prevState) => {
            return {
                ...prevState,
                count : prevState.count - 1,
            };
        });
    };


    
    render() {
        const { title, count } = this.state;

        return(
        <div className="row mt-3">
            <h2>{title} - {count} </h2>
            <div className="col-2 d-flex justify-content-between">
                <button className="btn btn-primary btn-lg" onClick={this.onPlus}>+</button>
                <button className="btn btn-secondary btn-lg" onClick={this.onReset}>0</button>
                <button className="btn btn-warning btn-lg" onClick={this.onMinus}>-</button>
            </div>
        </div>
        );
    }
}

export default Counter;
import React, { Component } from 'react';

class App extends Component {

    constructor(props) {
        super(props);
        // Don't call this.setState() here!
        this.state = { 
            residenceID: 0,
            homeType: "single",
            income: "medium",
            residents: [
                {
                    name: "Jeremy",
                    incomeImpact: "medium",
                    travel: "bike",
                    resientID: 1,    
                },
                {
                    name: "Kimmel",
                    incomeImpact: "high",
                    travel: "bike",
                    resientID: 1,
                },
            ],
            residenceWorth: 0,
            worthColor: "yellow",
        };
        this.modifyWorth = this.modifyWorth.bind(this);
    }

    getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
    }

    modifyWorth() {
        let currentWorth = this.state.residenceWorth;
        // make a random roll to determine amount to adjust
        let modifyAmount = this.getRandomInt(3);
        // set positive or negative
        let sign = Math.random() >= 0.5;
        // modify residence
        if(sign) {
            console.log(`Changing worth by +${modifyAmount}`);
            this.setState({
                residenceWorth: (currentWorth + modifyAmount)
              });
        } else if(!sign) {
            console.log(`Changing worth by ${modifyAmount}`);
            this.setState({
                residenceWorth: (currentWorth - modifyAmount)
              });
        }
        this.setWorthColor(currentWorth);
    }

    setWorthColor() {
        const {residenceWorth} = this.state;
        if(residenceWorth > 5) {
            this.setState({
                worthColor: "green"
            });
        } else if(residenceWorth > 0 && residenceWorth < 5) {
            this.setState({
                worthColor: "yellow"
            });
        } else if(residenceWorth < -5) {
            this.setState({
                worthColor: "red"
            });
        }
    }

    // decreaseWorth() {
    //     this.setState({
    //         residenceWorth: this.state.residenceWorth - 1
    //     });
    //     this.setWorthColor();
    //     console.log("Worth: -1");
    //     console.log(`Total Worth: ${this.state.residenceWorth}`);
    // }

    // increaseWorth() {
    //     this.setState({
    //         residenceWorth: this.state.residenceWorth + 1
    //     });
    //     this.setWorthColor();
    //     console.log("Worth: +1");
    //     console.log(`Total Worth: ${this.state.residenceWorth}`);
    // }

    componentDidMount() {
        this.interval = setInterval(this.modifyWorth, 1000);
        console.log(this.state.residenceWorth);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render() {

        const {
            worthColor 
        } = this.state;

        return (

            <li 
                className={`residence house ${worthColor}`}
            >
            </li>

        );
    }
}

export default App;



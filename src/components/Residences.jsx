import React, { Component } from 'react';
import Residence from './Residence';

class App extends Component {

    constructor(props) {
        super(props);

        this.state = { 
            residenceTotal: 10,
            residences: [],
        };

      }

    getResidences = () => {
    
        const {
            residences,
            residenceTotal
        } = this.state;
        
        for (let i = 0; i < residenceTotal; i++) {
            residences.push(      
                <Residence
                    key={i}
                />
            )
        }
        
        return residences;
    
    }
  
    componentDidMount() {
        console.log("Creating residences.");
    }

    render() {

        return (

            <ul>
                { this.getResidences() }
            </ul>

        );
    }
}

export default App;



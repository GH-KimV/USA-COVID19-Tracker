import React, { Component } from 'react';
import './App.css';
import USAMap from 'react-usa-map';
import USStateItem from './components/USStateItem';
import USTotal from './components/USTotal';
import { Line } from 'react-chartjs-2';

const covid = require('novelcovid');
const axios = require('axios');

class App extends Component {
    state = {
        US:{},
        USState: {},
        historical: {}
    };

    async componentDidMount() {

        let specificCountry = await covid.getCountry({
            country: 'United States'
        });
        this.setState({ US: specificCountry });

        let specificState = await covid.getState({ state: 'California' });
        this.setState({ USState: specificState });

        let res = await axios.get('https://corona.lmao.ninja/v2/historical/us');
        const cases = res.data.timeline.cases;
        const deaths = res.data.timeline.deaths;

        var dataInfo = [];
        var deathData = [];
        var labels = [];

        for (const date in cases) {
            dataInfo.push(cases[date]);
            labels.push(date);
        }

        for (const deathDates in deaths) {
            deathData.push(deaths[deathDates]);
        }

        this.setState({
            historical: {
                labels: labels,
                datasets: [
                    {
                        label: 'cases',
                        yAxisID: 'cases',
                        data: dataInfo,
                        fill: true,
                        lineTension: 0.5,
                        backgroundColor: 'rgba(75,192,192,1)',
                        borderColor: 'rgba(0,0,0,1)',
                        borderWidth: 1
                    },
                    {
                        label: 'deaths',
                        yAxisID: 'deaths',
                        data: deathData,
                        fill: true,
                        lineTension: 0.5,
                        backgroundColor: 'red',
                        borderColor: 'red',
                        borderWidth: 1
                    }
                ]
            }
        });
    }

    getNY = async () => {
        let specificState = await covid.getState({ state: 'New York' });
        this.setState({ USState: specificState });
    };

    getNJ = async () => {
        let specificState = await covid.getState({ state: 'New Jersey' });
        this.setState({ USState: specificState });
    };

    getVT = async () => {
        let specificState = await covid.getState({ state: 'Vermont' });
        this.setState({ USState: specificState });
    };

    getNH = async () => {
        let specificState = await covid.getState({ state: 'New Hampshire' });
        this.setState({ USState: specificState });
    };

    getMA = async () => {
        let specificState = await covid.getState({ state: 'Massachusetts' });
        this.setState({ USState: specificState });
    };

    getME = async () => {
        let specificState = await covid.getState({ state: 'Maine' });
        this.setState({ USState: specificState });
    };

    getRI = async () => {
        let specificState = await covid.getState({ state: 'Rhode Island' });
        this.setState({ USState: specificState });
    };

    getCT = async () => {
        let specificState = await covid.getState({ state: 'Connecticut' });
        this.setState({ USState: specificState });
    };

    getPA = async () => {
        let specificState = await covid.getState({ state: 'Pennsylvania' });
        this.setState({ USState: specificState });
    };

    getDE = async () => {
        let specificState = await covid.getState({ state: 'Delaware' });
        this.setState({ USState: specificState });
    };

    getMD = async () => {
        let specificState = await covid.getState({ state: 'Maryland' });
        this.setState({ USState: specificState });
    };

    getVA = async () => {
        let specificState = await covid.getState({ state: 'Virginia' });
        this.setState({ USState: specificState });
    };

    getWV = async () => {
        let specificState = await covid.getState({ state: 'West Virginia' });
        this.setState({ USState: specificState });
    };

    getDC = async () => {
        let specificState = await covid.getState({
            state: 'District Of Columbia'
        });
        this.setState({ USState: specificState });
    };

    getNC = async () => {
        let specificState = await covid.getState({ state: 'North Carolina' });
        this.setState({ USState: specificState });
    };

    getSC = async () => {
        let specificState = await covid.getState({ state: 'South Carolina' });
        this.setState({ USState: specificState });
    };

    getGA = async () => {
        let specificState = await covid.getState({ state: 'Georgia' });
        this.setState({ USState: specificState });
    };

    getFL = async () => {
        let specificState = await covid.getState({ state: 'Florida' });
        this.setState({ USState: specificState });
    };

    getOH = async () => {
        let specificState = await covid.getState({ state: 'Ohio' });
        this.setState({ USState: specificState });
    };

    getKY = async () => {
        let specificState = await covid.getState({ state: 'Kentucky' });
        this.setState({ USState: specificState });
    };

    getTN = async () => {
        let specificState = await covid.getState({ state: 'Tennessee' });
        this.setState({ USState: specificState });
    };

    getAL = async () => {
        let specificState = await covid.getState({ state: 'Alabama' });
        this.setState({ USState: specificState });
    };

    getMI = async () => {
        let specificState = await covid.getState({ state: 'Michigan' });
        this.setState({ USState: specificState });
    };

    getIN = async () => {
        let specificState = await covid.getState({ state: 'Indiana' });
        this.setState({ USState: specificState });
    };

    getMS = async () => {
        let specificState = await covid.getState({ state: 'Mississippi' });
        this.setState({ USState: specificState });
    };

    getWI = async () => {
        let specificState = await covid.getState({ state: 'Wisconsin' });
        this.setState({ USState: specificState });
    };

    getIL = async () => {
        let specificState = await covid.getState({ state: 'Illinois' });
        this.setState({ USState: specificState });
    };

    getLA = async () => {
        let specificState = await covid.getState({ state: 'Louisiana' });
        this.setState({ USState: specificState });
    };

    getAR = async () => {
        let specificState = await covid.getState({ state: 'Arkansas' });
        this.setState({ USState: specificState });
    };

    getMO = async () => {
        let specificState = await covid.getState({ state: 'Missouri' });
        this.setState({ USState: specificState });
    };

    getIA = async () => {
        let specificState = await covid.getState({ state: 'Iowa' });
        this.setState({ USState: specificState });
    };

    getMN = async () => {
        let specificState = await covid.getState({ state: 'Minnesota' });
        this.setState({ USState: specificState });
    };

    getND = async () => {
        let specificState = await covid.getState({ state: 'North Dakota' });
        this.setState({ USState: specificState });
    };

    getSD = async () => {
        let specificState = await covid.getState({ state: 'South Dakota' });
        this.setState({ USState: specificState });
    };

    getNE = async () => {
        let specificState = await covid.getState({ state: 'Nebraska' });
        this.setState({ USState: specificState });
    };

    getKS = async () => {
        let specificState = await covid.getState({ state: 'Kansas' });
        this.setState({ USState: specificState });
    };

    getOK = async () => {
        let specificState = await covid.getState({ state: 'Oklahoma' });
        this.setState({ USState: specificState });
    };

    getTX = async () => {
        let specificState = await covid.getState({ state: 'Texas' });
        this.setState({ USState: specificState });
    };

    getHI = async () => {
        let specificState = await covid.getState({ state: 'Hawaii' });
        this.setState({ USState: specificState });
    };

    getAK = async () => {
        let specificState = await covid.getState({ state: 'Alaska' });
        this.setState({ USState: specificState });
    };

    getMT = async () => {
        let specificState = await covid.getState({ state: 'Montana' });
        this.setState({ USState: specificState });
    };

    getWY = async () => {
        let specificState = await covid.getState({ state: 'Wyoming' });
        this.setState({ USState: specificState });
    };

    getCO = async () => {
        let specificState = await covid.getState({ state: 'Colorado' });
        this.setState({ USState: specificState });
    };

    getNM = async () => {
        let specificState = await covid.getState({ state: 'New Mexico' });
        this.setState({ USState: specificState });
    };

    getAZ = async () => {
        let specificState = await covid.getState({ state: 'Arizona' });
        this.setState({ USState: specificState });
    };

    getUT = async () => {
        let specificState = await covid.getState({ state: 'Utah' });
        this.setState({ USState: specificState });
    };

    getID = async () => {
        let specificState = await covid.getState({ state: 'Idaho' });
        this.setState({ USState: specificState });
    };

    getNV = async () => {
        let specificState = await covid.getState({ state: 'Nevada' });
        this.setState({ USState: specificState });
    };

    getCA = async () => {
        let specificState = await covid.getState({ state: 'California' });
        this.setState({ USState: specificState });
    };

    getOR = async () => {
        let specificState = await covid.getState({ state: 'Oregon' });
        this.setState({ USState: specificState });
    };

    getWA = async () => {
        let specificState = await covid.getState({ state: 'Washington' });
        this.setState({ USState: specificState });
    };

    mapHandler = e => {};

    statesFilling = () => {
        return {
            NJ: {
                clickHandler: () => this.getNJ()
            },
            NY: {
                clickHandler: () => this.getNY()
            },
            VT: {
                clickHandler: () => this.getVT()
            },
            NH: {
                clickHandler: () => this.getNH()
            },
            MA: {
                clickHandler: () => this.getMA()
            },
            ME: {
                clickHandler: () => this.getME()
            },
            RI: {
                clickHandler: () => this.getRI()
            },
            CT: {
                clickHandler: () => this.getCT()
            },
            PA: {
                clickHandler: () => this.getPA()
            },
            DE: {
                clickHandler: () => this.getDE()
            },
            MD: {
                clickHandler: () => this.getMD()
            },
            VA: {
                clickHandler: () => this.getVA()
            },
            WV: {
                clickHandler: () => this.getWV()
            },
            DC: {
                clickHandler: () => this.getDC()
            },
            NC: {
                clickHandler: () => this.getNC()
            },
            SC: {
                clickHandler: () => this.getSC()
            },
            GA: {
                clickHandler: () => this.getGA()
            },
            FL: {
                clickHandler: () => this.getFL()
            },
            OH: {
                clickHandler: () => this.getOH()
            },
            KY: {
                clickHandler: () => this.getKY()
            },
            TN: {
                clickHandler: () => this.getTN()
            },
            AL: {
                clickHandler: () => this.getAL()
            },
            MI: {
                clickHandler: () => this.getMI()
            },
            IN: {
                clickHandler: () => this.getIN()
            },
            MS: {
                clickHandler: () => this.getMS()
            },
            WI: {
                clickHandler: () => this.getWI()
            },
            IL: {
                clickHandler: () => this.getIL()
            },
            LA: {
                clickHandler: () => this.getLA()
            },
            AR: {
                clickHandler: () => this.getAR()
            },
            MO: {
                clickHandler: () => this.getMO()
            },
            IA: {
                clickHandler: () => this.getIA()
            },
            MN: {
                clickHandler: () => this.getMN()
            },
            ND: {
                clickHandler: () => this.getND()
            },
            SD: {
                clickHandler: () => this.getSD()
            },
            NE: {
                clickHandler: () => this.getNE()
            },
            KS: {
                clickHandler: () => this.getKS()
            },
            OK: {
                clickHandler: () => this.getOK()
            },
            TX: {
                clickHandler: () => this.getTX()
            },
            HI: {
                clickHandler: () => this.getHI()
            },
            AK: {
                clickHandler: () => this.getAK()
            },
            MT: {
                clickHandler: () => this.getMT()
            },
            WY: {
                clickHandler: () => this.getWY()
            },
            CO: {
                clickHandler: () => this.getCO()
            },
            NM: {
                clickHandler: () => this.getNM()
            },
            AZ: {
                clickHandler: () => this.getAZ()
            },
            UT: {
                clickHandler: () => this.getUT()
            },
            ID: {
                clickHandler: () => this.getID()
            },
            NV: {
                clickHandler: () => this.getNV()
            },
            CA: {
                fill: '#CC0000',
                clickHandler: () => this.getCA()
            },
            OR: {
                clickHandler: () => this.getOR()
            },
            WA: {
                clickHandler: () => this.getWA()
            }
        };
    };

    render() {
        return (
            <div className='App'>
                <h1>USA COVID-19 Tracker</h1>
                <USTotal  US={this.state.US} />
                <div className='container'>
                    <div className='map'>
                    <USAMap
                        customize={this.statesFilling()}
                        width={900}
                        height={700}
                    />
                    </div>
                    <div className='state-stats'>
                        <h3>
                            {this.state.USState.state} Current COVID-19 Stats
                        </h3>
                        <USStateItem USState={this.state.USState} />
                    </div>
                </div>
                <div className='chart'>
                    <Line
                        data={this.state.historical}
                        options={{
                            maintainAspectRatio: true,
                            title: {
                                display: true,
                                text: 'Historical Timeline for US Cases',
                                fontSize: 20
                            },
                            legend: {
                                display: true
                            },
                            scales: {
                                yAxes: [
                                    {
                                        id: 'cases',
                                        type: 'linear'
                                    },
                                    {
                                        id: 'deaths',
                                        type: 'linear'
                                    }
                                ]
                            }
                        }}
                    />
                </div>
            </div>
        );
    }
}

export default App;

import React, { Component, useRef } from 'react';
import './App.css';
import USAMap from 'react-usa-map';
import USStateItem from './components/USStateItem';
import USTotal from './components/USTotal';
import { Zoom, ZoomVariants } from './components/styles';
import { Line } from 'react-chartjs-2';

import ReactDOM from 'react-dom';
import Modal from 'react-modal';




const { NovelCovid } = require('novelcovid');
const track = new NovelCovid();
// const axios = require('axios');



const customStateModalStyles = {
    content: {
        animationName: 'zoom',
        animationDuration:'1s',
        animationTimingFunction: 'ease-out',
        animationDelay: '0',
        animationDirection: 'alternate',
        backgroundColor: '#6d8bf7',
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
  
    },
};

const customChartModalStyles = {
    content: {
        animationName: 'zoom',
        animationDuration:'1s',
        animationTimingFunction: 'ease-out',
        animationDelay: '0',
        animationDirection: 'alternate',
        backgroundColor: '#6d8bf7',
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        width: '70%'
    },
};

var subtitle;

// Modal.setAppElement('#root');
Modal.setAppElement(document.getElementById('root'));

class App extends Component {
    state = {
        US: {},
        USState: {},
        historical: {},
        stateModalIsOpen: false,
        chartModalIsOpen: false,
    };

    async componentDidMount() {
        let specificCountry = await track.countries('United States');
        this.setState({ US: specificCountry });
  
        let res = await track.historical(null, 'United States');
        track.historical(true);
        console.log(res);
        const cases = res.timeline.cases;
        const deaths = res.timeline.deaths;

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
                        borderWidth: 1,
                    },
                    {
                        label: 'deaths',
                        yAxisID: 'deaths',
                        data: deathData,
                        fill: true,
                        lineTension: 0.5,
                        backgroundColor: 'red',
                        borderColor: 'red',
                        borderWidth: 1,
                    },
                ],
            },
        });
    }

    getNY = async () => {
        let specificState = await track.states('New York');
        this.setState({ USState: specificState });
    };

    getNJ = async () => {
        let specificState = await track.states('New Jersey');
        this.setState({ USState: specificState });
    };

    getVT = async () => {
        let specificState = await track.states('Vermont');
        this.setState({ USState: specificState });
    };

    getNH = async () => {
        let specificState = await track.states('New Hampshire');
        this.setState({ USState: specificState });
    };

    getMA = async () => {
        let specificState = await track.states('Massachusetts');
        this.setState({ USState: specificState });
    };

    getME = async () => {
        let specificState = await track.states('Maine');
        this.setState({ USState: specificState });
    };

    getRI = async () => {
        let specificState = await track.states('Rhode Island');
        this.setState({ USState: specificState });
    };

    getCT = async () => {
        let specificState = await track.states('Connecticut');
        this.setState({ USState: specificState });
    };

    getPA = async () => {
        let specificState = await track.states('Pennsylvania');
        this.setState({ USState: specificState });
    };

    getDE = async () => {
        let specificState = await track.states('Delaware');
        this.setState({ USState: specificState });
    };

    getMD = async () => {
        let specificState = await track.states('Maryland');
        this.setState({ USState: specificState });
    };

    getVA = async () => {
        let specificState = await track.states('Virginia');
        this.setState({ USState: specificState });
    };

    getWV = async () => {
        let specificState = await track.states('West Virginia');
        this.setState({ USState: specificState });
    };

    getDC = async () => {
        let specificState = await track.states('District Of Columbia');
        this.setState({ USState: specificState });
    };

    getNC = async () => {
        let specificState = await track.states('North Carolina');
        this.setState({ USState: specificState });
    };

    getSC = async () => {
        let specificState = await track.states('South Carolina');
        this.setState({ USState: specificState });
    };

    getGA = async () => {
        let specificState = await track.states('Georgia');
        this.setState({ USState: specificState });
    };

    getFL = async () => {
        let specificState = await track.states('Florida');
        this.setState({ USState: specificState });
    };

    getOH = async () => {
        let specificState = await track.states('Ohio');
        this.setState({ USState: specificState });
    };

    getKY = async () => {
        let specificState = await track.states('Kentucky');
        this.setState({ USState: specificState });
    };

    getTN = async () => {
        let specificState = await track.states('Tennessee');
        this.setState({ USState: specificState });
    };

    getAL = async () => {
        let specificState = await track.states('Alabama');
        this.setState({ USState: specificState });
    };

    getMI = async () => {
        let specificState = await track.states('Michigan');
        this.setState({ USState: specificState });
    };

    getIN = async () => {
        let specificState = await track.states('Indiana');
        this.setState({ USState: specificState });
    };

    getMS = async () => {
        let specificState = await track.states('Mississippi');
        this.setState({ USState: specificState });
    };

    getWI = async () => {
        let specificState = await track.states('Wisconsin');
        this.setState({ USState: specificState });
    };

    getIL = async () => {
        let specificState = await track.states('Illinois');
        this.setState({ USState: specificState });
    };

    getLA = async () => {
        let specificState = await track.states('Louisiana');
        this.setState({ USState: specificState });
    };

    getAR = async () => {
        let specificState = await track.states('Arkansas');
        this.setState({ USState: specificState });
    };

    getMO = async () => {
        let specificState = await track.states('Missouri');
        this.setState({ USState: specificState });
    };

    getIA = async () => {
        let specificState = await track.states('Iowa');
        this.setState({ USState: specificState });
    };

    getMN = async () => {
        let specificState = await track.states('Minnesota');
        this.setState({ USState: specificState });
    };

    getND = async () => {
        let specificState = await track.states('North Dakota');
        this.setState({ USState: specificState });
    };

    getSD = async () => {
        let specificState = await track.states('South Dakota');
        this.setState({ USState: specificState });
    };

    getNE = async () => {
        let specificState = await track.states('Nebraska');
        this.setState({ USState: specificState });
    };

    getKS = async () => {
        let specificState = await track.states('Kansas');
        this.setState({ USState: specificState });
    };

    getOK = async () => {
        let specificState = await track.states('Oklahoma');
        this.setState({ USState: specificState });
    };

    getTX = async () => {
        let specificState = await track.states('Texas');
        this.setState({ USState: specificState });
    };

    getHI = async () => {
        let specificState = await track.states('Hawaii');
        this.setState({ USState: specificState });
    };

    getAK = async () => {
        let specificState = await track.states('Alaska');
        this.setState({ USState: specificState });
    };

    getMT = async () => {
        let specificState = await track.states('Montana');
        this.setState({ USState: specificState });
    };

    getWY = async () => {
        let specificState = await track.states('Wyoming');
        this.setState({ USState: specificState });
    };

    getCO = async () => {
        let specificState = await track.states('Colorado');
        this.setState({ USState: specificState });
    };

    getNM = async () => {
        let specificState = await track.states('New Mexico');
        this.setState({ USState: specificState });
    };

    getAZ = async () => {
        let specificState = await track.states('Arizona');
        this.setState({ USState: specificState });
    };

    getUT = async () => {
        let specificState = await track.states('Utah');
        this.setState({ USState: specificState });
    };

    getID = async () => {
        let specificState = await track.states('Idaho');
        this.setState({ USState: specificState });
    };

    getNV = async () => {
        let specificState = await track.states('Nevada');
        this.setState({ USState: specificState });
    };

    getCA = async () => {
        let specificState = await track.states('California');
        this.setState({ USState: specificState });
    };

    getOR = async () => {
        let specificState = await track.states('Oregon');
        this.setState({ USState: specificState });
    };

    getWA = async () => {
        let specificState = await track.states('Washington');
        this.setState({ USState: specificState });
    };

    selectState = () => {
        let select = false;
        if (!select) {
        }
    };

    statesFilling = () => {
        this.selectState();
        return {
            NJ: {
                clickHandler: () => this.getNJ() && this.openStateModal(),
            },
            NY: {
                clickHandler: () => this.getNY() && this.openStateModal(),
            },
            VT: {
                clickHandler: () => this.getVT() && this.openStateModal(),
            },
            NH: {
                clickHandler: () => this.getNH() && this.openStateModal(),
            },
            MA: {
                clickHandler: () => this.getMA() && this.openStateModal(),
            },
            ME: {
                clickHandler: () => this.getME() && this.openStateModal(),
            },
            RI: {
                clickHandler: () => this.getRI() && this.openStateModal(),
            },
            CT: {
                clickHandler: () => this.getCT() && this.openStateModal(),
            },
            PA: {
                clickHandler: () => this.getPA() && this.openStateModal(),
            },
            DE: {
                clickHandler: () => this.getDE() && this.openStateModal(),
            },
            MD: {
                clickHandler: () => this.getMD() && this.openStateModal(),
            },
            VA: {
                clickHandler: () => this.getVA() && this.openStateModal(),
            },
            WV: {
                clickHandler: () => this.getWV() && this.openStateModal(),
            },
            DC: {
                clickHandler: () => this.getDC() && this.openStateModal(),
            },
            NC: {
                clickHandler: () => this.getNC() && this.openStateModal(),
            },
            SC: {
                clickHandler: () => this.getSC() && this.openStateModal(),
            },
            GA: {
                clickHandler: () => this.getGA() && this.openStateModal(),
            },
            FL: {
                clickHandler: () => this.getFL() && this.openStateModal(),
            },
            OH: {
                clickHandler: () => this.getOH() && this.openStateModal(),
            },
            KY: {
                clickHandler: () => this.getKY() && this.openStateModal(),
            },
            TN: {
                clickHandler: () => this.getTN() && this.openStateModal(),
            },
            AL: {
                clickHandler: () => this.getAL() && this.openStateModal(),
            },
            MI: {
                clickHandler: () => this.getMI() && this.openStateModal(),
            },
            IN: {
                clickHandler: () => this.getIN() && this.openStateModal(),
            },
            MS: {
                clickHandler: () => this.getMS() && this.openStateModal(),
            },
            WI: {
                clickHandler: () => this.getWI() && this.openStateModal(),
            },
            IL: {
                clickHandler: () => this.getIL() && this.openStateModal(),
            },
            LA: {
                clickHandler: () => this.getLA() && this.openStateModal(),
            },
            AR: {
                clickHandler: () => this.getAR() && this.openStateModal(),
            },
            MO: {
                clickHandler: () => this.getMO() && this.openStateModal(),
            },
            IA: {
                clickHandler: () => this.getIA() && this.openStateModal(),
            },
            MN: {
                clickHandler: () => this.getMN() && this.openStateModal(),
            },
            ND: {
                clickHandler: () => this.getND() && this.openStateModal(),
            },
            SD: {
                clickHandler: () => this.getSD() && this.openStateModal(),
            },
            NE: {
                clickHandler: () => this.getNE() && this.openStateModal(),
            },
            KS: {
                clickHandler: () => this.getKS() && this.openStateModal(),
            },
            OK: {
                clickHandler: () => this.getOK() && this.openStateModal(),
            },
            TX: {
                clickHandler: () => this.getTX() && this.openStateModal(),
            },
            HI: {
                clickHandler: () => this.getHI() && this.openStateModal(),
            },
            AK: {
                clickHandler: () => this.getAK() && this.openStateModal(),
            },
            MT: {
                clickHandler: () => this.getMT() && this.openStateModal(),
            },
            WY: {
                clickHandler: () => this.getWY() && this.openStateModal(),
            },
            CO: {
                clickHandler: () => this.getCO() && this.openStateModal(),
            },
            NM: {
                clickHandler: () => this.getNM() && this.openStateModal(),
            },
            AZ: {
                clickHandler: () => this.getAZ() && this.openStateModal(),
            },
            UT: {
                clickHandler: () => this.getUT() && this.openStateModal(),
            },
            ID: {
                clickHandler: () => this.getID() && this.openStateModal(),
            },
            NV: {
                clickHandler: () => this.getNV() && this.openStateModal(),
            },
            CA: {
                // fillColor: '#6d8bf7',
                clickHandler: () => this.getCA() && this.openStateModal(),
            },
            OR: {
                clickHandler: () => this.getOR() && this.openStateModal(),
            },
            WA: {
                clickHandler: () => this.getWA() && this.openStateModal(),
            },
        };
    };

    openStateModal = () => {
        this.setState({
            stateModalIsOpen: true,
        });
    };

    afterOpenStateModal() {
        // references are now sync'd and can be accessed.
        // subtitle.style.color = '#6d8bf7';
    }

    closeStateModal = () => {
        this.setState({
            stateModalIsOpen: false,
        });
    };

    openChartModal = () => {
        this.setState({
            chartModalIsOpen: true,
        });
    };

    afterOpenChartModal() {
        // references are now sync'd and can be accessed.
        // subtitle.style.color = '#6d8bf7';
    }

    closeChartModal = () => {
        this.setState({
            chartModalIsOpen: false,
        });
    };

    render() {
        return (
            <div className='App'>
                <h3 className='app-title'>COVID-19 UNITED STATES TRACKER</h3>
                <div className='total-stats-container'>
                    <USTotal US={this.state.US} />
                    <Modal
                        isOpen={this.state.chartModalIsOpen}
                        onAfterOpen={this.afterOpenChartModal}
                        onRequestClose={this.state.closeChartModal}
                        style={customChartModalStyles}
                        contentLabel='Example Modal'
                    >
                        <div className='chart'>
                            <button onClick={this.closeChartModal} className='close-button'>x</button>
                            <Line
                                data={this.state.historical}
                                width={900}
                                height={720}
                                options={{
                                    maintainAspectRatio: true,
                                    title: {
                                        display: true,
                                        text:
                                            'Historical Timeline for US Cases',
                                        fontSize: 15,
                                        fontColor: 'white',
                                    },
                                    legend: {
                                        display: true,
                                        labels: {
                                            display: true,
                                            fontColor: 'white',
                                            fontSize: 13,
                                        },
                                    },
                                    scales: {
                                        display: true,
                                        fontSize: 15,

                                        fontColor: 'white',
                                        yAxes: [
                                            {
                                                id: 'cases',
                                                type: 'linear',
                                                ticks: {
                                                    fontColor: 'white',
                                                },
                                            },
                                            {
                                                id: 'deaths',
                                                type: 'linear',
                                                ticks: {
                                                    fontColor: 'white',
                                                },
                                            },
                                        ],
                                        xAxes: [
                                            {
                                                ticks: {
                                                    fontColor: 'white',
                                                },
                                            },
                                        ],
                                    },
                                }}
                            />
                        </div>
                    </Modal>
                    <button
                        className='open-chart'
                        onClick={this.openChartModal}
                    >
                        Historical Timeline
                    </button>
                </div>
                <div className='map'>
                    <USAMap
                        className='us-map'
                        customize={this.statesFilling()}
                        defaultFill='rgb(180, 192, 233)'
                        title='USA Map'
                        width={1000}
                        height={700}
                    />
                </div>

                <Modal
                    isOpen={this.state.stateModalIsOpen}
                    onAfterOpen={this.afterOpenStateModal}
                    onRequestClose={this.state.closeStateModal}
                    style={customStateModalStyles}
                    contentLabel='Example Modal'
                >
                    <div className='state-stats'>
                        <h3 ref={(_subtitle) => (subtitle = _subtitle)}>
                            {/* {this.state.USState.state} current COVID-19 stats */}
                            <button onClick={this.closeStateModal} className='close-button'>x</button>
                        </h3>
                        <USStateItem USState={this.state.USState} />
                    </div>
                </Modal>
            </div>
        );
    }
}

export default App;

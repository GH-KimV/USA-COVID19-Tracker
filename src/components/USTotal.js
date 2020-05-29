import React from 'react';

const USTotal = ({
    US: { cases, active, recovered, deaths, todayCases, todayDeaths }
}) => {
    return (
        <div className='total-stats'>
            <p>
                <strong>Total Cases</strong><br/><span> {cases}</span>
            </p>
            <hr />
            <p>
                <strong>Active Cases</strong><br/><span> {active}</span>
            </p>
            <hr />

            <p>
                <strong>Recovered</strong><br/><span> {recovered}</span>
            </p>
            <hr />

            <p>
                <strong>Total Deaths</strong><br/><span> {deaths}</span>
            </p>
            <hr />

            <p>
                <strong>Recent Cases</strong><br/> <span> {todayCases}</span>
            </p>
            <hr />

            <p>
                <strong>Recent Deaths</strong><br/><span> {todayDeaths}</span>
            </p>
        </div>
    );
};

export default USTotal;

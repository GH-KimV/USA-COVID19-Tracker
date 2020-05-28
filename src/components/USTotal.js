import React from 'react';

const USTotal = ({
    US: { cases, active, recovered, deaths, todayCases, todayDeaths }
}) => {
    return (
        <div className='total-stats'>
            <p>
                <strong>Total Cases</strong> {cases}
            </p>
            <hr />
            <p>
                <strong>Active Cases</strong> {active}
            </p>
            <hr />

            <p>
                <strong>Recovered</strong> {recovered}
            </p>
            <hr />

            <p>
                <strong>Total Deaths</strong> {deaths}
            </p>
            <hr />

            <p>
                <strong>Recent Cases</strong> {todayCases}
            </p>
            <hr />

            <p>
                <strong>Recent Deaths</strong> {todayDeaths}
            </p>
        </div>
    );
};

export default USTotal;

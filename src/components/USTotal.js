import React from 'react';

const USTotal = ({
    US: { cases, active, recovered, deaths, todayCases, todayDeaths }
}) => {
    return (
        <div className='total-stats'>
            <p>
                <strong>Total Cases:</strong> {cases}
            </p>
            <p>
                <strong>Active Cases:</strong> {active}
            </p>
            <p>
                <strong>Recovered</strong> {recovered}
            </p>
            <p>
                <strong>Total Deaths:</strong> {deaths}
            </p>
            <p>
                <strong>Recent Cases:</strong> {todayCases}
            </p>
            <p>
                <strong>Recent Deaths:</strong> {todayDeaths}
            </p>
        </div>
    );
};

export default USTotal;

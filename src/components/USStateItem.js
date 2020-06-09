import React from 'react';

const USStateItem = ({
    USState: { state, cases, todayCases, deaths, todayDeaths, active },
}) => {
    return (
      <>
                <p>
                    <strong>State:</strong> {state}
                </p>
                <p>
                    <strong>Total Cases:</strong> {cases}
                </p>
                <p>
                    <strong>Recent Cases:</strong> {todayCases}
                </p>
                <p>
                    <strong>Total Deaths:</strong> {deaths}
                </p>
                <p>
                    <strong>Recent Deaths:</strong> {todayDeaths}
                </p>
                <p>
                    <strong>Current Active Cases:</strong> {active}
                </p>
    </>
    );
};

export default USStateItem;

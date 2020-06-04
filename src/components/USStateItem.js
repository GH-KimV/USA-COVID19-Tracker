import React from 'react';

const USStateItem = ({
    USState: { state, cases, todayCases, deaths, todayDeaths, active },
}) => {
    return (
        <>
            <p>
                <strong>State</strong>
                <br />
                <span>{state}</span>
            </p>
            <hr />
            <p>
                <strong>Total Cases</strong>
                <br />
                <span>{cases}</span>
            </p>
            <hr />
            <p>
                <strong>Recent Cases</strong>
                <br />
                <span>{todayCases}</span>
            </p>
            <hr />
            <p>
                <strong>Total Deaths</strong>
                <br />
                <span>{deaths}</span>
            </p>
            <hr />
            <p>
                <strong>Recent Deaths</strong>
                <br />
                <span>{todayDeaths}</span>
            </p>
            <hr />
            <p>
                <strong>Current Active Cases</strong>
                <br />
                <span>{active}</span>
            </p>
        </>
    );
};

export default USStateItem;

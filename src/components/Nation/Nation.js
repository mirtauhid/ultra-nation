import React from 'react';

const Nation = (props) => {
    const nation = props.nation;
    let totalPopulation = 0;
    for (let i = 0; i < nation.length; i++) {
        const country = nation[i];
        totalPopulation += country.population;
        
    }
    return (
        <div>
            <h2>This is nation: {nation.length}</h2>
            <p><small>Total Population: {totalPopulation}</small></p>
        </div>
    );
};

export default Nation;
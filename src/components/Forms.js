import React from 'react';

const Forms = props => (
    <form onSubmit={props.getWeather}>
                <input type="text" name="City" placeholder="City..." ></input>
                <input type="text" name="Country" placeholder="Country..."></input>
                <button>Get Weather</button>
            </form>
);
 
export default Forms;
import React from 'react';
// import ReactDom from "react-dom";

const Weather = (props) => (
    <div>

        {props.Temperature && props.City && <p>Location:{props.City}, {props.Temperature}</p>}
        {props.Humidity && <p>Humidity:{props.Humidity}</p>}
        {props.Wind && <p>Wind: {props.Wind}</p>}
        {props.Description && <p>Condition:{props.Description}</p>}
        {props.error && <p>DO THE NEEDFUL:{props.error}</p>}        
            
    </div>
);
 
export default Weather;
import React from 'react';
import Titles from "./components/Titles";
import Forms from "./components/Forms";
import Weather from "./components/Weather";
import style from "./Style/style.css";

const API_KEY = "d1cdc1688b6b92801576b69c8082e104";

class App extends React.Component{

  state = {
    Temperature: undefined,
    Humidity: undefined,
    Wind: undefined,
    City: undefined,
    Country: undefined,
    Description: undefined,
    error: undefined
  }
  

  getWeather = async(e) => {
    e.preventDefault();
    const city = e.target.elements.City.value;
    const country = e.target.elements.Country.value;
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&APPID=${API_KEY}`);

    const data = await api_call.json();

    if (country && city){
      console.log(data);

      this.setState({
      Temperature: data.main.temp,
      Humidity: data.main.humidity,
      Wind: data.wind,
      City: data.sys.name,
      Country: data.sys.country,
      Description: data.weather[0].description,
      error: undefined
    });

    }else{
      this.setState({
        Temperature: undefined,
        Humidity: undefined,
        Wind: undefined,
        City: undefined,
        Country: undefined,
        Description: undefined,
        error: "Please fill out the form...."
      });
    }
    
  }

  render(){
  
    return( <div>
       <Titles />
       <style />
      <Forms getWeather = {this.getWeather} />
      <Weather

      Temperature={this.state.Temperature}
      Humidity={this.state.Humidity}
      Wind={this.state.Wind}
      City={this.state.City}
      Country={this.state.Country}
      Description={this.state.Description}
      error={this.state.error}
      
      />
    </div>
    );
  }
}

export default App;
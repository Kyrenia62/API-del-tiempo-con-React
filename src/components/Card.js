import React from 'react';
import Spinner from './Spinner';

const Card = ({loadingData, showData, weather, forecast}) => {

    var today = new Date();
    var day = today.getDate();
    var month = today.getMonth() + 1;
    var year = today.getFullYear();
    var date = day + '/' + month + '/' + year;

    var url = "";
    var iconUrl = "";

    var iconUrl7 = "";
    var iconUrl15 = "";
    var iconUrl23 = "";

    var forecastDate7 = "";
    var forecastDate15 = "";
    var forecastDate23 = "";

    if(loadingData){
        return  <Spinner />;
    }

    if(showData){
        url = "http://openweathermap.org/img/w/";
        iconUrl = url + weather.weather[0].icon + ".png";
        
        iconUrl7 = url + forecast.list[1].weather[0].icon + ".png";
        iconUrl15 = url + forecast.list[2].weather[0].icon + ".png";
        iconUrl23 = url + forecast.list[3].weather[0].icon + ".png";

        forecastDate7 = forecast.list[1].dt_txt.substring(8, 10) + '/' + forecast.list[1].dt_txt.substring(5, 7) + '/' + forecast.list[1].dt_txt.substring(0, 4) + ' ' +  forecast.list[1].dt_txt.substring(11, 13);
        forecastDate15 = forecast.list[2].dt_txt.substring(8, 10) + '/' + forecast.list[2].dt_txt.substring(5, 7) + '/' + forecast.list[2].dt_txt.substring(0, 4) + ' ' +  forecast.list[2].dt_txt.substring(11, 13);
        forecastDate23 = forecast.list[3].dt_txt.substring(8, 10) + '/' + forecast.list[3].dt_txt.substring(5, 7) + '/' + forecast.list[3].dt_txt.substring(0, 4) + ' ' +  forecast.list[3].dt_txt.substring(11, 13);
    }

    return (
        <div className="my-5">

            {
                showData === true ? (

                    <div className="container">
                        <div className="card mb-3 mx-auto text-light">
                            <div className="row g-0">
                                <div className="col-md-4">
                                    <h3 className="card-title">{weather.name}</h3>
                                    <p className="card-date">{date}</p>
                                    <h1 className="card-temp">{(weather.main.temp - 273.15).toFixed(1)}ºC</h1>
                                    <p className="card-desc"><img src={iconUrl} alt="icon"/>{weather.weather[0].description}</p>
                                    <img src="https://img.freepik.com/foto-gratis/hermosa-foto-cielo-nubes_58702-11501.jpg?t=st=1737293705~exp=1737297305~hmac=4fe886e195b29b5092ee46f8c55c7e02632508fd49a0fb74730e9975143eb2a6&w=740" className="img-fluid rounded-start" alt="..."/>
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body text-start p-5">
                                        <p className="card-text"><b>Temperatura máxima:</b> {(weather.main.temp_max - 273.15).toFixed(1)} ºC</p>
                                        <p className="card-text"><b>Temperatura mínima:</b> {(weather.main.temp_min - 273.15).toFixed(1)} ºC</p>
                                        <p className="card-text"><b>Sensación térmica:</b> {(weather.main.feels_like- 273.15).toFixed(1)} ºC</p>
                                        <p className="card-text"><b>Humedad:</b> {weather.main.humidity} %</p>
                                        <p className="card-text"><b>Velocidad del viento:</b> {weather.wind.speed} m/s</p>
                                    </div>
                                    <hr/>

                                    <div className="row m-3">
                                        <div className="col m-1">
                                            <p>{forecastDate7}h</p>
                                            <p className="description"><img src={iconUrl7} alt="icon"/>{forecast.list[1].weather[0].description}</p>
                                            <p className="temp">{(forecast.list[1].main.temp - 273.15).toFixed(1)}ºC</p>
                                        </div>
                                        <div className="col m-1">
                                            <p>{forecastDate15}h</p>
                                            <p className="description"><img src={iconUrl15} alt="icon"/>{forecast.list[2].weather[0].description}</p>
                                            <p className="temp">{(forecast.list[2].main.temp - 273.15).toFixed(1)}ºC</p>
                                        </div>
                                        <div className="col m-1">
                                            <p>{forecastDate23}h</p>
                                            <p className="description"><img src={iconUrl23} alt="icon"/>{forecast.list[3].weather[0].description}</p>
                                            <p className="temp">{(forecast.list[3].main.temp - 273.15).toFixed(1)}ºC</p>
                                        </div>


                                    </div>


                                </div>

                            </div>
                        </div>

                    </div>

                ):(
                    <h2 className="text-light">Sin datos para mostrar.</h2>
                )
            }



        </div>

    );
}

export default Card;
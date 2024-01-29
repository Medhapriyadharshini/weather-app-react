import React, { useEffect, useState } from 'react'
import { MDBInput } from 'mdb-react-ui-kit';
import axios from 'axios';



function WeatherApp() {

    const [city,setCity]=useState('')
    const [weatherData, setWeatherData] = useState(null)

    const base_url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=d67ad03167f959ba4dbc918477ca72df&units=metric`;

   
    const fetchData = async () => {
       try{
        const result = await axios.get(base_url);
        setWeatherData(result.data)
        console.log(result.data);
       }catch(error){
        console.error("Error fetching data:",error);
       }
    }
    
    useEffect(() => {
        function fetchData(){

        }
        fetchData()
    }, [city]);

    const cityChange=(e)=>{
        setCity(e.target.value);
        fetchData()
    }



    return (
        
            <div className='container' >
                    <div className=' p-5' style={{ alignItems: 'center', marginTop: '150px', }}>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                            <MDBInput label='search here' id='formControlLg' type='text' value={city} size='lg' style={{ backgroundColor: 'white' }} onChange={cityChange} />   
                        </div>
                        <div>
                            <h1 className='text-center mt-5 text-dark'>{weatherData?.name} {weatherData?.sys?.country}</h1>
                            <p className='text-center  text-dark'>Feels like : {weatherData?.main?.feels_like} °c </p>
                        </div>
                        <div>
                            <p className='text-center  m-5  text-dark' style={{fontSize:'55px'}}>{weatherData?.main?.temp} °c </p>
                            <p className='text-center m-5  text-dark' style={{fontSize:'35px'}}>{weatherData?.weather[0]?.description}</p>

                        </div>
                        <div className='d-flex justify-content-center'>
                            <div className='mx-5'>
                                <div className='text-center  text-dark'>{weatherData?.main?.humidity}</div>
                                <p className='text-center  text-dark'><i className="fa-sharp fa-solid fa-droplet-degree"></i> Humidity</p>
                            </div>
                            <div className='mx-5'>
                                <div className='text-center  text-dark'>{weatherData?.wind?.speed}</div>
                                <p className='text-center text-dark '><i className="fa-sharp fa-solid fa-wind"></i> Wind Speed</p>
                            </div>
                        </div>
                    </div>
       
        </div>

    )
}

export default WeatherApp
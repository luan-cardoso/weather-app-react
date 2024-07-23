import { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import Location from './components/Location/Location';
import Content from './components/Content/Content';
import { LocationContext} from './Context/LocationContext';

function App() {

const { location } = useContext(LocationContext);

const key = '3244691e18c274414eed509b5b88e6fa';
const apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${key}&lang=pt_br&units=metric`;

const [weatherData, setWeatherData] = useState(null);

useEffect(() => {
  axios
    .get(apiURL)
    .then((res) => {
      setWeatherData(res.data);
    })
}, [location]);

return (
    <div className="container mx-auto my-16">
      <div className="w-1/3 mx-auto bg-zinc-900 p-8 rounded-3xl">
        <Location/>
          {weatherData && weatherData.weather && (
            <Content 
              temp={Number(weatherData.main.temp.toFixed(1))}
              description={weatherData.weather[0].description}
              feels={Number(weatherData.main.feels_like.toFixed(1))}
              wind={Number(weatherData.wind.speed.toFixed(1))}
              humidity={weatherData.main.humidity}
            />
          )}
      </div>
    </div>
  );
}

export default App;

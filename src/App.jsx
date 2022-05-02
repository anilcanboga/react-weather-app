import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";
import City from "./City";

function App() {
  const key = "d870cd99c8d3e51b1966d30fb37de14c";
  const [search, setSearch] = useState("");
  const [city, setCity] = useState();

  useEffect(() => {
    async function getApi() {
      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${key}&units=metric`
        );
        setCity(response.data);
      } catch (error) {}
    }
    getApi();
  }, [search]);

  return (
    <div className="App">
      <div>
        <h1 style={{ fontSize: "3rem" }}>Hava Durumu Öğrenme</h1>
        <input
          onChange={(e) => setSearch(e.target.value)}
          type="text"
          placeholder="Lütfen bir şehir ismi giriniz..."
          className=" my-5 px-3 w-[250px] py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring "
        />
        {city && <City city={city} />}
      </div>
    </div>
  );
}

export default App;

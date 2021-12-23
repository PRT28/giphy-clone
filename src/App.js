import './App.css';
import {useState} from 'react';
import {GiphyFetch} from "@giphy/js-fetch-api";
import {Grid} from "@giphy/react-components";

function App() {

  const gif= new GiphyFetch("mn94VdD9OLlBNXiUg0fQ52JNlSMZcJCY");
  const width = window.innerWidth;
  const[text,setText]=useState("");

  function Giphy(){
    const fetchGifs = (offset) => gif.trending({ offset, limit: 10 });
    return(
        <div>
            <Grid
            fetchGifs={fetchGifs}
            width={width}
            columns={5}
            gutter={15}
            />
            
        </div>
      );
    }
  
  function changeData(e){
    setText(e.target.value);
  }

  function GridSearch(){
    const fetchGifs = (offset)=> gif.search(text,{sort:'relevant',limit: 10,offset:offset});
    return(
      <div>
          <Grid
          fetchGifs={fetchGifs}
          width={width}
          columns={5}
          gutter={15}
          />
          
      </div>
    );

  }

  return (
    <div className="App">
      <h1>Giphy</h1>
      <input className="search" type="text" placeholder="Search..." onInput={(e)=>changeData(e)}></input>
      <div className="gifs">
        {text===""?<Giphy  />: <GridSearch />}
      </div>
    </div>
  );
}

export default App;

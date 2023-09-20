//import { useEffect } from 'react';
import './App.css';
import video from './food.mp4';
//https://api.edamam.com/api/recipes/v2?type=public&q=cocktail&app_id=7f05e9a1&app_key=9d711c11df64e5935baca9496984fd61
function App() {
  const MY_ID = "7f05e9a1";
  const MY_KEY = "9d711c11df64e5935baca9496984fd61";
  useEffect(() => {
    const getRecipe = async()=> {
      const response = await fetch('https://api.edamam.com/api/recipes/v2?type=public&q=cocktail&app_id=`${MY_ID}`&app_key=`${MY_KEY}`');
      const data = await response.json();
      console.log(data);
    }
    getRecipe()
  }, [])
  return (
    <div className="App">
      <div className="container"> 
      <video autoPlay muted loop>
        <source src={video} type="video/mp4"/>
      </video>
      <h1>Find a Recipe</h1>
    </div>
    <div className="container">
      <form>
        <input/>
      </form>
    </div>
    <div className="container">
      <button> 
        <img src="https://img.icons8.com/fluency/48/000000/fry.png" alt="icon"/>
      </button>
    </div>
    </div>
  );
}
export default App;

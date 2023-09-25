function MyRecipesKomponent(props) {
    return(
        <div>
        <div  className="container">
            <h2>{props.label}</h2>
        </div>
        <div className="container">
            <img src={props.image} alt="dish"/>
        </div>
        <div className="container">
            <p>{props.calories.toFixed()} calories</p>
        </div>
        <ul className="container list">
            <p>{props.ingredients.map((ingredient, index) => (
                <li key={index}>
                    <img className="icon" alt="icon" src="https://img.icons8.com/external-kiranshastry-gradient-kiranshastry/64/000000/external-check-multimedia-kiranshastry-gradient-kiranshastry.png"/>
                {ingredient}</li>
            ))}</p>
        </ul>
        
        </div>
    )
}
export default MyRecipesKomponent;
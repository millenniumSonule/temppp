import React, { useState } from 'react'
import axios from 'axios'

const App = () => {

  const [response, setResponse] = useState([]);

  const btn = async () => {
    try {
      const result = await axios.get('https://www.themealdb.com/api/json/v1/1/search.php?f=a');
      setResponse(result.data.meals || []);
    } catch (err) {
      alert('Error: ' + err);
    }
  }

  return (
    <div>
      <button onClick={btn}>Click</button>
      <div className="meal-list">
        {response.map((meal) => (
          <div key={meal.idMeal} className="meal-item">
            <h2>{meal.strMeal}</h2>
            <img src={meal.strMealThumb} alt={meal.strMeal} style={{ width: '200px' }} />
            <p><strong>Category:</strong> {meal.strCategory}</p>
            <p><strong>Area:</strong> {meal.strArea}</p>
            <p><strong>Instructions:</strong> {meal.strInstructions.substring(0, 100)}...</p>
            <a href={meal.strYoutube} target="_blank" rel="noopener noreferrer">Watch on YouTube</a>
          </div>
        ))}
      </div>
    </div>
  )
}

export default App

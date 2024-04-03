import './App.css';
import ommlateimg from './assets/image-omelette.jpeg';

function App() {
  return (
    <div className="container">
      <div className="img">
        <img src={ommlateimg} alt="Omelette" />
      </div>
      <div className="recipe">
        <h2>Simple Omelette Recipe</h2>
        <p>An easy and quick dish, perfect for any meal. This classic omelette combines beaten eggs cooked to perfection, optionally filled with your choice of cheese, vegetables, or meats.</p>
        <div className="prep-time">
          <h3>Preparation Time</h3>
          <ul>
            <li><span>Total</span>: Approximately 10 minutes</li>
            <li><span>Preparation</span>: 5 minutes</li>
            <li><span>Cooking</span>: 5 minutes</li>
          </ul>
        </div>

        <div className="ingred">
          <h3>Ingredients</h3>
          <ul>
            <li>2-3 large eggs</li>
            <li>Salt, to taste</li>
            <li>Pepper, to taste</li>
            <li>1 tablespoon of butter or oil</li>
            <li>Optional fillings: cheese, diced vegetables, cooked meats, herbs</li>
          </ul>
        </div>

        <div className="instruction">
          <h3>Instructions</h3>
          <ol>
            <li><span>Beat the eggs</span>: In a bowl, beat the eggs with a pinch of salt and pepper until they are well mixed. You can add a tablespoon of water or milk for a fluffier texture.</li>
            <li><span>Heat the pan</span>: Place a non-stick frying pan over medium heat and add butter or oil.</li>
            <li><span>Cook the omelette</span>: Once the butter is melted and bubbling, pour in the eggs. Tilt the pan to ensure the eggs evenly coat the surface.</li>
            <li><span>Add fillings (optional)</span>: When the eggs begin to set at the edges but are still slightly runny in the middle, sprinkle your chosen fillings over one half of the omelette.</li>
            <li><span>Fold and serve</span>: As the omelette continues to cook, carefully lift one edge and fold it over the fillings. Let it cook for another minute, then slide it onto a plate.</li>
            <li><span>Enjoy</span>: Serve hot, with additional salt and pepper if needed.</li>
          </ol>
        </div>

        <div className="nutrition">
          <h3>Nutrition</h3>
          <p>The table below shows nutritional values per serving without the additional fillings.</p>
          <table>
            <tbody>
              <tr>
                <td>Calories</td>
                <td>277kcal</td>
              </tr>
              <tr>
                <td>Carbs</td>
                <td>0g</td>
              </tr>
              <tr>
                <td>Protein</td>
                <td>20g</td>
              </tr>
              <tr>
                <td>Fat</td>
                <td>22g</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default App;

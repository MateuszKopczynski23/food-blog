import {Link} from 'react-router-dom';

const RecipeList = ({ recipes, title }) => {
  return (
      <div className="recipe-list">
        <h2>{ title }</h2>

        { recipes.map((recipe) => (
            <div
                key={recipe.id}
                className="recipe-preview"
            >
              <Link to={`/recipes/${recipe.id}`}>
                <h2>{ recipe.title }</h2>
                <p>Written by { recipe.author }</p>
              </Link>
            </div>
        ))}
      </div>
  );
};

export default RecipeList;

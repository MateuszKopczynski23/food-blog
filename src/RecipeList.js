const RecipeList = ({ recipes, title }) => {
  return (
      <div className="recipe-list">
        <h2>{ title }</h2>

        { recipes.map((recipe) => (
            <div
                key={recipe.id}
                className="recipe-preview"
            >
              <h2>{ recipe.title }</h2>
              <p>Written by { recipe.author }</p>
            </div>
        ))}
      </div>
  );
};

export default RecipeList;

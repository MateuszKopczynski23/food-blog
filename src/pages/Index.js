import RecipeList from '../components/RecipeList';
import useFetch from '../hooks/useFetch';

const Index = () => {
  const { data: recipes, isLoading, error } = useFetch('http://localhost:8000/recipes');

  return (
      <div className="home">
        { error && <div className="error">{ error }</div> }
        { isLoading && <div>Loading...</div> }
        { recipes && <RecipeList title="All recipes" recipes={recipes} /> }
      </div>
  );
}

export default Index;
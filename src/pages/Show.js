import {useNavigate, useParams} from 'react-router-dom';
import useFetch from '../hooks/useFetch';

const Show = () => {
  const { recipeId } = useParams();
  const { data: recipe, isLoading, error } = useFetch(`http://localhost:8000/recipes/${recipeId}`);

  const navigate = useNavigate();

  const handleDelete = () => {
    fetch(`http://localhost:8000/recipes/${recipeId}`, { method: 'DELETE' })
      .then(() => { navigate('/') });
  }

  return (
      <div className="recipe-show">
        { isLoading && <div>Loading...</div> }
        { error && <div className="error">{ error }</div> }
        { recipe && (
          <article>
            <h2>{ recipe.title }</h2>
            <p>Written by { recipe.author }</p>
            <div>{ recipe.content }</div>
            <button onClick={handleDelete}>Delete Recipe</button>
          </article>
        )}
      </div>
  );
};

export default Show;

import {useParams} from 'react-router-dom';

const Show = () => {
  const { recipeId } = useParams();

  return (
      <div className="recipe-details">
        <h2>Recipe details { recipeId }</h2>
      </div>
  );
};

export default Show;

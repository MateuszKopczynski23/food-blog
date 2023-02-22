import {useRef, useState} from 'react';
import {useNavigate} from 'react-router-dom';

const Create = () => {
  const titleRef = useRef('');
  const contentRef = useRef('');
  const authorRef = useRef('Mark');
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const recipe = {
      title: titleRef.current.value,
      content: contentRef.current.value,
      author: authorRef.current.value
    };

    setIsLoading(true);

    fetch('http://localhost:8000/recipes', {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(recipe)
    }).then(() => {
      setIsLoading(false)
      navigate('/');
    })
  }

  return (
      <div className="create">
        <h2>Add a New Recipe</h2>

        <form
            action="#"
            onSubmit={handleSubmit}
        >
          <label htmlFor="title">Title:</label>
          <input
              ref={titleRef}
              type="text"
              id="title"
              required
          />

          <label htmlFor="content">Content:</label>
          <textarea
              ref={contentRef}
              id="content"
              rows="5"
              required
          ></textarea>

          <label htmlFor="author">Author:</label>
          <select
              ref={authorRef}
              name="author"
              id="author"
          >
            <option value="Mark">Mark</option>
            <option value="Bob">Bob</option>
            <option value="Anthony">Anthony</option>
          </select>

          { !isLoading && <button type="submit">Add Recipe</button> }
          { isLoading && <button type="submit" disabled>Adding Recipe...</button> }
        </form>
      </div>
  );
};

export default Create;

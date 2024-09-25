import { ChangeEvent } from 'react';

interface MediaTypeInputProps {
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  name: string;
  value: string;
}

function MediaTypeInput({ onChange, name, value }: MediaTypeInputProps) {
  return (
    <div>
      <input
        type="radio"
        name={name}
        value="movie"
        onChange={onChange}
        checked={value === 'movie'}
        id="sf-type-movie"
      />
      <label htmlFor="sf-type-movie">Movie</label>
      <br />
      <input
        type="radio"
        name={name}
        value="tv"
        onChange={onChange}
        checked={value === 'tv'}
        id="sf-type-tv"
      />
      <label htmlFor="sf-type-tv">TV Show</label>
    </div>
  );
}

export default MediaTypeInput;

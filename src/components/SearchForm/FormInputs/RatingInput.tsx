import { ChangeEvent } from 'react';

interface RatingInputProps {
  name: string;
  label: string;
  onChange: (event: ChangeEvent<HTMLSelectElement>) => void;
}

function RatingInput({ name, onChange, label }: RatingInputProps) {
  return (
    <div className="form-group">
      <label htmlFor="rating">{label}</label>
      <select className="rounded border" name={name} onChange={onChange}>
        <option>All</option>
        <option>0 - 49</option>
        <option>50 - 69</option>
        <option>70 - 100</option>
      </select>
    </div>
  );
}

export default RatingInput;

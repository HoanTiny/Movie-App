/* eslint-disable react-hooks/exhaustive-deps */
import { useFetch } from '@hooks/useFetch';
import { useEffect } from 'react';
import { useWatch, Control } from 'react-hook-form';

interface GenresInputProps {
  control: Control;
  value: number[];
  onChange: (value: number[]) => void;
}

interface Genre {
  id: number;
  name: string;
}

interface GenresResponse {
  genres: Genre[];
}

function GenresInput({ control, value = [], onChange }: GenresInputProps) {
  console.log(`value`, value);
  const mediaType = useWatch({ name: 'mediaType', control });

  const { data: GenresList } = useFetch<GenresResponse>({
    url: `/genre/${mediaType}/list`,
  });

  useEffect(() => {
    onChange([]);
  }, [GenresList]);

  console.log(GenresList);

  return (
    <div className="flex flex-wrap gap-1">
      {GenresList.genres?.map((genre: { id: number; name: string }) => (
        <p
          key={genre.id}
          className={`cursor-pointer rounded-lg border px-2 py-1 ${
            value.includes(genre.id) ? 'bg-black text-white' : ''
          }`}
          onClick={() => {
            if (value.includes(genre.id)) {
              onChange(value.filter((id) => id !== genre.id));
              return;
            }

            onChange([...value, genre.id]);
          }}
        >
          {genre.name}
        </p>
      ))}
    </div>
  );
}

export default GenresInput;

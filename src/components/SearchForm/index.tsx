/* eslint-disable @typescript-eslint/no-explicit-any */
import { useForm } from 'react-hook-form';
import FormField from './FormField';
import MediaTypeInput from './FormInputs/MediaTypeInput';
import GenresInput from './FormInputs/GenresInput';
import RatingInput from './FormInputs/RatingInput';

function SearchForm() {
  const { handleSubmit, control } = useForm({
    defaultValues: {
      mediaType: 'movie',
      genres: [],
      rating: 'All',
    },
  });

  const onSubmit = (data: any) => {
    console.log(data);
  };
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* <label htmlFor="">Media Type</label>
        <br />
        <input type="radio" {...register('MediaType')} value="movie" />
        <label>Movie</label>
        <br />

        <input type="radio" {...register('MediaType')} value="tv" />
        <label>TV Show</label>
        <br /> */}

        <FormField
          name="mediaType"
          label="Media Type"
          control={control}
          Component={MediaTypeInput}
        />

        <FormField
          name="genres"
          label="Genres"
          control={control}
          Component={GenresInput}
        />

        <FormField
          name="rating"
          label="Rating"
          control={control}
          Component={RatingInput}
        />

        <input className="mt-2" type="submit" />
      </form>
    </div>
  );
}

export default SearchForm;

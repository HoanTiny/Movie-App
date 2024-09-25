import SearchForm from '@components/SearchForm';

const SearchPage: React.FC = () => {
  return (
    <div className="container flex-col text-black">
      <p className="text-2xl font-bold">Search</p>
      <div className="flex gap-6">
        <div className="flex-1">
          <SearchForm />
        </div>
        <div className="flex-[3]">
          Result
          {/* <RelatedMediaList mediaList={data.results || []} /> */}
        </div>
      </div>
    </div>
  );
};

export default SearchPage;

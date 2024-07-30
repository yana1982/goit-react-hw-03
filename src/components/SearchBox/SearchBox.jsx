const SearchBox = ({ value, onFilter }) => {
  return (
    <div>
      <label>Find contacts by name</label>
      <input
        type="text"
        value={value}
        onChange={(evt) => {
          onFilter(evt.target.value);
        }}
      />
      <p>{value}</p>
    </div>
  );
};

export default SearchBox;

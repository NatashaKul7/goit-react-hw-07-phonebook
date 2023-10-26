import { FilterBox } from './Filter.styled';

export const Filter = ({ name, onChange }) => {
  return (
    <FilterBox>
      <h3>Find contact by name</h3>
      <input
        type="text"
        name="name"
        value={name}
        onChange={e => onChange(e.target.value)}
      />
    </FilterBox>
  );
};

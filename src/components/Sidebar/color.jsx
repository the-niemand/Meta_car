import { useContext } from 'react';
import { FilterContext } from '../../pages/Models';


const Input = ({ handleChange, value, title, name, color }) => {
  return (
    <label className="sidebar-label-container">
      <input onChange={handleChange} type="radio" value={value} name={name} />
      <span className="checkmark" style={{ backgroundColor: color }}></span>
      {title}
    </label>
  );
};

const Colors = () => {

  const { filter, setFilter } = useContext(FilterContext);
  const handleChange = (e) => {
    const newFilter = { ...filter, color: e.target.value };
    setFilter(newFilter)
  }

  return (
    <>
      <div>
        <h2 className="sidebar-title color-title" style={{ marginTop: '2rem' }} >Colors</h2>
        <label className="sidebar-label-container">
          <input onChange={handleChange} type="radio" value="all" name="test1" />
          <span className="checkmark all"></span>
          All
        </label>

        <Input
          handleChange={handleChange}
          value="black"
          title="Black"
          name="test1"
          color="black"
        />

        <Input
          handleChange={handleChange}
          value="silver"
          title="silver"
          name="test1"
          color="#C0C0C0"
        />
        <Input
          handleChange={handleChange}
          value="Gray"
          title="Gray"
          name="test1"
          color="#808080"
        />

        <Input
          handleChange={handleChange}
          value="red"
          title="Red"
          name="test1"
          color="red"
        />

        <Input
          handleChange={handleChange}
          value="green"
          title="Green"
          name="test1"
          color="green"
        />

        <label className="sidebar-label-container">
          <input
            onChange={handleChange}
            type="radio"
            value="white"
            name="test1"

          />
          <span
            className="checkmark"
            style={{ background: "white", border: "2px solid black" }}
          ></span>
          White
        </label>
      </div>
    </>
  );
};

export default Colors;
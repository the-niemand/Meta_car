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

const Price = () => {

     const { filter, setFilter } = useContext(FilterContext);
     const handleChange = (e) => {
          const newFilter = { ...filter, price: e.target.value };
          setFilter(newFilter)
     }

     return (
          <>
               <div className="ml" style={{ marginLeft: '20px' }}>
                    <h2 className="sidebar-title price-title" style={{ marginTop: '2rem' }}>Price / day</h2>

                    <label className="sidebar-label-container">
                         <input onChange={handleChange} type="radio" value="all" name="test2" />
                         <span className="checkmark"></span>All
                    </label>

                    <Input
                         handleChange={handleChange}
                         value={50}
                         title="$0 - 50"
                         name="test2"
                    />

                    <Input
                         handleChange={handleChange}
                         value={100}
                         title="$50 - $100"
                         name="test2"
                    />

                    <Input
                         handleChange={handleChange}
                         value={150}
                         title="$100 - $150"
                         name="test2"
                    />

                    <Input
                         handleChange={handleChange}
                         value={200}
                         title="Over $150"
                         name="test2"
                    />
               </div>
          </>
     );
};

export default Price;
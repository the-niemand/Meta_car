
import './category.css'
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

function Category() {
     const { filter, setFilter } = useContext(FilterContext);
     const handleChange = (e) => {
          const newFilter = { ...filter, brand: e.target.value };
          setFilter(newFilter)
     }

     return (
          <div>
               <h2 className="sidebar-title">Category</h2>

               <div>
                    <label className="sidebar-label-container">
                         <input onChange={handleChange} type="radio" value="all" name="brand" />
                         <span className="checkmark"></span>All
                    </label>
                    <Input
                         handleChange={handleChange}
                         value="Audi"
                         title="Audi"
                         name="brand"
                    />
                    <Input
                         handleChange={handleChange}
                         value="BMW"
                         title="BMW"
                         name="brand"
                    />
                    <Input
                         handleChange={handleChange}
                         value="Mercedes"
                         title="Mercedes"
                         name="brand"
                    />
                    <Input
                         handleChange={handleChange}
                         value="Volkswagen"
                         title="Volkswagen"
                         name="brand"

                    />
                    <Input
                         handleChange={handleChange}
                         value="Other"
                         title="Other"
                         name="brand"
                    />
               </div>
          </div>
     );
}

export default Category;
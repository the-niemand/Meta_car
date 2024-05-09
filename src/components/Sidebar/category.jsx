
import './category.css'

const Input = ({ handleChange, value, title, name, color }) => {
     return (
          <label className="sidebar-label-container">
               <input onChange={handleChange} type="radio" value={value} name={name} />
               <span className="checkmark" style={{ backgroundColor: color }}></span>
               {title}
          </label>
     );
};

function Category({ handleChange }) {
     return (
          <div>
               <h2 className="sidebar-title">Category</h2>

               <div>
                    <label className="sidebar-label-container">
                         <input onChange={handleChange} type="radio" value="" name="test" />
                         <span className="checkmark"></span>All
                    </label>
                    <Input
                         handleChange={handleChange}
                         value="sneakers"
                         title="Audi"
                         name="test"
                    />
                    <Input
                         handleChange={handleChange}
                         value="flats"
                         title="BMW"
                         name="test"
                    />
                    <Input
                         handleChange={handleChange}
                         value="sandals"
                         title="Mercedes"
                         name="test"
                    />
                    <Input
                         handleChange={handleChange}
                         value="heels"
                         title="Volkswagen"
                         name="test"
                         
                    />
                    <Input
                         handleChange={handleChange}
                         value="heels"
                         title="Other"
                         name="test"
                         
                    />
               </div>
          </div>
     );
}

export default Category;
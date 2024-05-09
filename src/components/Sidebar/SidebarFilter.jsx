import Category from "./category";
import Price from "./Price";
import Colors from "./color";


const Sidebar = ({ handleChange }) => {

     const sidebar = {
          height: '100%',
          borderRight: '2px solid #e5e5e5',
          zIndex: '3',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
     }

     const logoContainer = {
          marginBottom: '4rem',
     }


     return (
          <div style={{ width: '20%'}}>
               <section style={sidebar}>
                    <Category handleChange={handleChange} />
                    <Price handleChange={handleChange} />
                    <Colors handleChange={handleChange} />
               </section>
          </div>
     );
};

export default Sidebar;
import Category from "./category";
import Price from "./Price";
import Colors from "./color";


const Sidebar = () => {

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
                    <Category />
                    <Price />
                    <Colors />
               </section>
          </div>
     );
};

export default Sidebar;
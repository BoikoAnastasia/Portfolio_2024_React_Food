// components
import { menu_list } from "../../assets/assets";

// styles
import "./ExploreMenuStyle.css";

const ExploreMenu = ({category, setCategory}) => {

  return (
    <div className="exploreMenu" id="explore_menu">
      <h1>Explore our menu</h1>
      <p className="exploreMenu_text">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Non explicabo
        architecto hic, itaque eum natus, quaerat ex ab consectetur assumenda ut
        dolorem molestias officiis, atque doloribus veniam quibusdam iure.
        Incidunt.
      </p>
      <div className="exploreMenu_list">
        {menu_list.map((item, index) => {
          return (
            <div onClick={()=>setCategory(prev=>prev===item.menu_name ? "All" : item.menu_name)} key={index} className="exploreMenu_list_item">
              <img className={category===item.menu_name? "active":""} src={item.menu_image} alt="menu_image" />
              <p>{item.menu_name}</p>
            </div>
          );
        })}
      </div>
      <hr />
    </div>
  );
};

export default ExploreMenu;

import { Helmet } from "react-helmet-async";
import Cover from "../../Shared/Cover/Cover";
import menuImg from "../../../assets/menu/banner3.jpg";
import dessertImg from "../../../assets/menu/dessert-bg.jpeg";
import pizzaImg from "../../../assets/menu/pizza-bg.jpg";
import saladImg from "../../../assets/menu/salad-bg.jpg";
import soupImg from "../../../assets/menu/soup-bg.jpg";
import useMenu from "../../../hooks/useMenu";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuCategory from "../MenuCategory/MenuCategory";

const Menu = () => {
  const [menu] = useMenu();
  const dessert = menu.filter((item) => item.category === "dessert");
  const soup = menu.filter((item) => item.category === "soup");
  const salad = menu.filter((item) => item.category === "salad");
  const pizza = menu.filter((item) => item.category === "pizza");
  const offered = menu.filter((item) => item.category === "offered");

  return (
    <div>
      <Helmet>
        <title>Menu | Bistro Boss Restaurant</title>
      </Helmet>
      {/* main cover */}
      <Cover img={menuImg} title="Our Menu" />
      <SectionTitle subHeading="Don't Miss" heading="Today's Offer" />
      {/* offer menu items*/}
      <MenuCategory items={offered} />
      {/* dessert menu items
       */}
      <SectionTitle subHeading="Don't Miss" heading="Today's Offer" />
      <MenuCategory items={dessert} title="Dessert" img={dessertImg} />
      <MenuCategory items={salad} title="Salad" img={saladImg} />
      <MenuCategory items={pizza} title="Pizza" img={pizzaImg} />
      <MenuCategory items={soup} title="Soup" img={soupImg} />
    </div>
  );
};

export default Menu;

import { Link } from "react-router-dom";
import MenuItem from "../../Home/MenuItem/MenuItem";
import Cover from "../../Shared/Cover/Cover";

const MenuCategory = ({ items, img, title }) => {
  return (
    <div className="py-5">
      {title && <Cover img={img} title={title} />}
      <div className="grid md:grid-cols-2 gap-4 my-16">
        {items.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
      <Link to={`/order/${title}`}>
        <button className="btn btn-outline border-0 border-b-4 text-neutral mt-3 hover:bg-white hover:border-b-white">
          Order Now
        </button>
      </Link>
    </div>
  );
};

export default MenuCategory;

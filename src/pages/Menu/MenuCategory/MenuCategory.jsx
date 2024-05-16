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
    </div>
  );
};

export default MenuCategory;

import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuItem from "../MenuItem/MenuItem";
import useMenu from "../../../hooks/useMenu";

const PopularMenu = () => {
  // const [menu, setMenu] = useState([]);
  // useEffect(() => {
  //   fetch("/menu.json")
  //     .then((res) => res.json())
  //     .then((data) => setMenu(data));
  // }, []);
  const [menu] = useMenu();

  const popular = menu.filter((item) => item.category === "popular");

  return (
    <section>
      <div>
        <SectionTitle heading={"From Our Menu"} subHeading={"Popular Items"} />
      </div>
      <div className="grid md:grid-cols-2 gap-4">
        {popular.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
    </section>
  );
};

export default PopularMenu;

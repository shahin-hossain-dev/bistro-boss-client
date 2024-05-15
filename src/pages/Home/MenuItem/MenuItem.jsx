const MenuItem = ({ item }) => {
  const { name, image, price, recipe } = item;
  console.log(name);
  return (
    <div className="flex space-x-3">
      <img
        src={image}
        className="w-[100px]"
        style={{ borderRadius: "0 200px 200px 200px" }}
        alt=""
      />
      <div>
        <h2 className="uppercase">{name}-------- </h2>
        <p>{recipe}</p>
      </div>
      <p className="text-yellow-500">${price}</p>
    </div>
  );
};

export default MenuItem;

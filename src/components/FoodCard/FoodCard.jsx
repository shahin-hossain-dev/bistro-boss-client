const FoodCard = ({ item }) => {
  const { name, image, price, recipe } = item;

  const handleAddToCart = (data) => {
    console.log(data);
  };

  return (
    <div>
      <div className="card bg-base-100 shadow-xl relative">
        <figure>
          <img src={image} className="w-full" alt="food" />
        </figure>
        <p className="bg-neutral text-white absolute top-4 right-4 px-2 py-1 rounded-md">
          ${price}
        </p>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>{recipe}</p>
          <div className="card-actions justify-center">
            <button
              onClick={() => handleAddToCart(item)}
              className="btn btn-outline border-0 border-b-4 text-neutral mt-3 bg-slate-200 border-orange-400"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;

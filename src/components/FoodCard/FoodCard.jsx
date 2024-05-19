import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";

const FoodCard = ({ item }) => {
  const { user } = useAuth();
  const { name, image, price, recipe } = item;
  const navigate = useNavigate();
  const handleAddToCart = (data) => {
    if (user && user.email) {
      //todo: send cart info to database
    } else {
      Swal.fire({
        title: "Your are not logged in",
        text: "Please Login to add to the cart",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, Login!",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login");
        }
      });
    }
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

import useCart from "../../../hooks/useCart";

const Cart = () => {
  const [carts] = useCart();

  const totalPrice = carts.reduce((total, items) => {
    return total + items.price;
  }, 0);

  return (
    <div>
      <h1 className="6xl"> My Cart</h1>
      <div className="flex justify-evenly">
        <h2 className="text-4xl">Total Items: {carts.length}</h2>
        <h2 className="text-4xl">Total Price: {totalPrice}</h2>
        <button className="btn btn-neutral uppercase">Pay</button>
      </div>
      {/* cart table  */}
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Image</th>
              <th>Name</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {carts.map((cart) => (
              <tr key={cart._id}>
                <th>#</th>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src={cart.image}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">Hart Hagerty</div>
                      <div className="text-sm opacity-50">United States</div>
                    </div>
                  </div>
                </td>
                <td>
                  Zemlak, Daniel and Leannon
                  <br />
                  <span className="badge badge-ghost badge-sm">
                    Desktop Support Technician
                  </span>
                </td>
                <td>Purple</td>
                <th>
                  <button className="btn btn-ghost btn-xs">details</button>
                </th>
              </tr>
            ))}
          </tbody>
          {/* foot */}
          <tfoot>
            <tr>
              <th></th>
              <th>Image</th>
              <th>Name</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
};

export default Cart;

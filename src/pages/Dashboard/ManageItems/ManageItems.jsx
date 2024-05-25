import { FaEdit, FaPen, FaPenAlt, FaTrashAlt } from "react-icons/fa";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useMenu from "../../../hooks/useMenu";

const ManageItems = () => {
  const [menu] = useMenu();

  const handleDeleteItems = (id) => {
    console.log(id);
  };
  return (
    <div>
      <SectionTitle heading={"Manage All Items"} subHeading={"Hurry up"} />
      <div>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>#</th>
                <th>Image</th>
                <th>Items Name</th>
                <th>Price</th>
                <th>Update</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {menu.map((item, idx) => (
                <tr key={item._id}>
                  <th>{idx + 1}</th>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img
                            src={item.image}
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>{item.name}</td>
                  <td>${item.price}</td>
                  <td>
                    <button onClick={() => {}} className="btn btn-ghost ">
                      <FaEdit className="text-yellow-600 text-xl" />
                    </button>
                  </td>
                  <th>
                    <button
                      onClick={() => handleDeleteItems(item._id)}
                      className="btn btn-ghost "
                    >
                      <FaTrashAlt className="text-red-500 text-xl" />
                    </button>
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManageItems;
<h2>Manage Items</h2>;

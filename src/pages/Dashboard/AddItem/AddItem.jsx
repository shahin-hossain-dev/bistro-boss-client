import { useForm } from "react-hook-form";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { FaUtensils } from "react-icons/fa";
const AddItem = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => console.log(data);
  return (
    <div>
      <SectionTitle
        heading="Add a Items"
        subHeading={"What's new"}
      ></SectionTitle>
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label className="form-control w-full my-6">
            <div className="label">
              <span className="label-text font-bold ">Recipe Name*</span>
            </div>
            <input
              {...register("name", { required: true })}
              placeholder="Recipe Name"
              className="input input-bordered w-full "
            />
          </label>
          <div className="flex gap-6">
            {/* select */}
            <label className="form-control w-full   ">
              <div className="label">
                <span className="label-text font-bold ">Category*</span>
              </div>
              <select
                {...register("category", { required: true })}
                className="select select-bordered w-full "
              >
                <option value="salad">Salad</option>
                <option value="pizza">Pizza</option>
                <option value="soup">Soup</option>
                <option value="dessert">Dessert</option>
                <option value="drinks">Drinks</option>
              </select>
            </label>
            {/* price */}
            <label className="form-control w-full  ">
              <div className="label">
                <span className="label-text font-bold ">Price*</span>
              </div>
              <input
                type="number"
                {...register("price", { required: true })}
                placeholder="Price"
                className="input input-bordered w-full "
              />
            </label>
          </div>
          {/* recipe details */}
          <label className="form-control mt-6">
            <div className="label">
              <span className="label-text font-bold">Recipe Details*</span>
            </div>
            <textarea
              {...register("recipe", { required: true })}
              className="textarea textarea-bordered h-24"
              placeholder="Bio"
            ></textarea>
          </label>
          <div className="form-control mt-6 w-full">
            <input
              {...register("image", { required: true })}
              type="file"
              className="file-input w-full max-w-xs"
            />
          </div>
          <button className="btn mt-5">
            Add Item <FaUtensils />
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddItem;

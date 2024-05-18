import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

const SignUp = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  // console.log(errors);
  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div>
      <div className=" w-full flex justify-center items-center min-h-screen">
        <div className="hero-content mx-10 md:mx-0 w-full md:w-1/2 lg:w-1/3">
          <div className="card border  w-full shadow-2xl bg-base-100 p-6 text-center">
            <h1 className="text-3xl font-bold">Sign Up</h1>
            <form onSubmit={handleSubmit(onSubmit)} className="w-full">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Full Name</span>
                </label>
                <input
                  type="text"
                  {...register("name", { required: true })}
                  name="name"
                  placeholder="Enter your name"
                  className="input input-bordered"
                />
                {errors.name && (
                  <span className="text-red-500 mt-1 text-start">
                    Please fill up name field
                  </span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  {...register("email", { required: true })}
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                />
                {errors.email && (
                  <span className="text-red-500 mt-1 text-start">
                    Please fill up email field
                  </span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  {...register("password", {
                    required: true,
                    minLength: 6,
                    maxLength: 16,
                  })}
                  name="password"
                  placeholder="password"
                  className={`input input-bordered ${
                    errors.password && "border-red-500"
                  }`}
                />
                {(errors.password?.type === "required" && (
                  <span className="text-red-500 mt-1 text-start">
                    Please give a password
                  </span>
                )) ||
                  (errors.password?.type === "minLength" && (
                    <span className="text-red-500 mt-1 text-start">
                      Password at least 6 character
                    </span>
                  ))}

                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>

              <div className="form-control mt-6">
                <input
                  type="submit"
                  value="Sign Up"
                  className="btn btn-primary"
                />
              </div>
            </form>
            <p className="py-3">
              <small>
                Already have an account. Please{" "}
                <Link to="/login" className="link ">
                  Login
                </Link>
              </small>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;

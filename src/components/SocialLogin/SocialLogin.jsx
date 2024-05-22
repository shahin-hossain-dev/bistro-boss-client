import { FaGoogle } from "react-icons/fa";
import useAuth from "../../hooks/useAuth";

const SocialLogin = () => {
  const { googleLogin } = useAuth();

  const handleGoogleLogin = () => {
    googleLogin()
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div>
      <div className="divider">Or</div>
      <button
        onClick={handleGoogleLogin}
        className="btn outline outline-1 w-full"
      >
        <FaGoogle />
        Continue with Google
      </button>
    </div>
  );
};

export default SocialLogin;

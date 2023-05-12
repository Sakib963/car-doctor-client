import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";

const SocialLogin = () => {
  const { googleSignIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state?.from?.pathname || "/";

  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((res) => {
        console.log(res.user);
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div>
      <div className="divider">OR</div>
      <div className="text-center">
        <button
          onClick={handleGoogleSignIn}
          className="btn btn-circle btn-outline"
        >
          G
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;

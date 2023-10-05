import { Link } from "react-router-dom";
import Wrapper from "../assets/wrappers/RegisterAndLoginPage";
import { FormRow, Logo } from "../components";
const Login = () => {
  return (
    <Wrapper>
      <form className="form">
        <Logo></Logo>
        <h4>log in</h4>
        <FormRow type="email" name="email"></FormRow>
        <FormRow type="password" name="password"></FormRow>
        <button type="submit" className="btn btn-block">
          submit
        </button>
        <button type="button" className="btn btn-block">
          explore the application
        </button>
        <p>
          Not a member?Sign up!
          <Link to="/Register" className="member-btn">
            Register
          </Link>
        </p>
      </form>
    </Wrapper>
  );
};

export default Login;

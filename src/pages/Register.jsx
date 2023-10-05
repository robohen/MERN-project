import { Link } from "react-router-dom";
import Wrapper from "../assets/wrappers/RegisterAndLoginPage";
import { FormRow, Logo } from "../components";
const Register = () => {
  return (
    <Wrapper>
      <form className="form">
        <Logo />
        <h4>Register</h4>
        <FormRow type="text" name="name"></FormRow>
        <FormRow type="text" name="lastName" labelText="last name"></FormRow>
        <FormRow type="text" name="location"></FormRow>
        <FormRow type="email" name="email"></FormRow>
        <FormRow type="password" name="password"></FormRow>
        <button type="submit" className="btn btn-block">
          submit
        </button>
        <p>
          Already a member?
          <Link to="/Login" className="member-btn">
            Login
          </Link>
        </p>
      </form>
    </Wrapper>
  );
};

export default Register;

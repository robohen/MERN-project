import { Link, useRouteError } from "react-router-dom";
import Wrapper from "../assets/wrappers/ErrorPage";
import img from "../assets/images/not-found.svg";
const Error = () => {
  const error = useRouteError();
  if (error.status === 404) {
    return (
      <Wrapper>
        <div>
          <img src={img} alt="not found" />
          <h3>Page not found</h3>
          <p>we can not find the page you are looking for!</p>
          <Link to="/dashboard">Back home</Link>
        </div>
      </Wrapper>
    );
  }
};

export default Error;

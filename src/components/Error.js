import { useRouteError } from "react-router-dom";
import errorSrc from "../../assets/images/error.jpg";

const Error = () => {
  const err = useRouteError();
  return (
    <div className="container">
      <img className="err-img" src={errorSrc} altname="err" />
      <h1>Oops!!!</h1>
      <h1>Something went wrong!</h1>
      <h1>
        {err?.status} : {err?.statusText}
      </h1>
    </div>
  );
};

export default Error;

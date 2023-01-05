import { useRouteError } from "react-router-dom";

const ErrorComponent = () => {
  const errorData = useRouteError();

  return (
    <>
      <h1>Wrong page 404</h1>
      <h3>Details:{errorData.statusText || errorData.message}</h3>
    </>
  );
};

export default ErrorComponent;

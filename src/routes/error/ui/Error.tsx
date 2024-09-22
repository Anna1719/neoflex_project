import { isRouteErrorResponse, useRouteError } from "react-router-dom";
import style from "./Error.module.css";
import { useEffect, useState } from "react";

export const Error = () => {
  const [errorStatus, setErrorStatus] = useState<number | string>();
  const [errorMessage, setErrorMessage] = useState<number | string>();

  const error = useRouteError();
  console.error(error);

  useEffect(() => {
    if (isRouteErrorResponse(error)) {
      setErrorMessage(error?.data?.message || error.statusText);
      setErrorStatus(error?.status);
    } else if (typeof error === "string") {
      setErrorMessage(error);
    } else {
      setErrorMessage("Unknown error");
    }
  }, []);

  return (
    <div className={style.wrapper}>
      <h1 className={style.status}>{errorStatus}</h1>
      <h3>{errorMessage}</h3>
    </div>
  );
};

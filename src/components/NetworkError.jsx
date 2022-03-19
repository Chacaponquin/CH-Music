import React, { useEffect } from "react";

const NetworkError = ({ networkError, setNetworkError }) => {
  useEffect(() => {
    if (networkError) {
      setTimeout(() => setNetworkError(false), 7000);
    }
  }, [networkError, setNetworkError]);
  return <div className="networkError">Error en la conexion</div>;
};

export default NetworkError;

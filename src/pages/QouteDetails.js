import { Fragment } from "react";
import { useParams } from "react-router-dom";
const QouteDetails = () => {
  const params = useParams();
  return (
    <Fragment>
      <h1>Qoute Details!</h1>
      <p>{params.qouteID}</p>
    </Fragment>
  );
};
export default QouteDetails;

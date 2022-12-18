import { Fragment } from "react";
import { Route, useParams } from "react-router-dom";
import Comments from "../components/comments/Comments";
const QouteDetails = () => {
  const params = useParams();
  return (
    <Fragment>
      <h1>Qoute Details!</h1>
      <p>{params.qouteID}</p>
      <Route path={`/qoutes/${params.qouteID}/comments`}>
        <Comments />
      </Route>
    </Fragment>
  );
};
export default QouteDetails;

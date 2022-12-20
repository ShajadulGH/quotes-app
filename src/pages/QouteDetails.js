import { Fragment, useEffect } from "react";
import { Link, Route, useParams, useRouteMatch } from "react-router-dom";
import Comments from "../components/comments/Comments";
import HighlightedQuote from "../components/quotes/HighlightedQuote";
import useHttp from "../components/hooks/use-http";
import { getSingleQuote } from "../lib/api";
import LoadingSpinner from "../components/UI/LoadingSpinner";
const QouteDetails = () => {
  const {
    sendRequest,
    status,
    error,
    data: loadedSingleData,
  } = useHttp(getSingleQuote, true);
  const routeMatch = useRouteMatch();
  const params = useParams();
  const { qouteID } = params;

  useEffect(() => {
    sendRequest(qouteID);
  }, [sendRequest, qouteID]);
  if (status === "pending") {
    return (
      <div className="centered">
        <LoadingSpinner />
      </div>
    );
  }
  if (error) {
    return <p className="centered focused">{error}</p>;
  }
  if (!loadedSingleData.text) {
    return <p>No Qoute found!</p>;
  }
  return (
    <Fragment>
      <h1>Qoute Details!</h1>
      {/* <p>{params.qouteID}</p> */}
      <HighlightedQuote
        author={loadedSingleData.author}
        text={loadedSingleData.text}
      />
      <Route path={routeMatch.path} exact>
        <div className="centered">
          <Link className="btn--flat" to={`${routeMatch.url}/comments`}>
            Comments
          </Link>
        </div>
      </Route>

      <Route path={`${routeMatch.path}/comments`}>
        <Comments />
      </Route>
    </Fragment>
  );
};
export default QouteDetails;

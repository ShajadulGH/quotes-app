import { Fragment } from "react";
import { Link, Route, useParams, useRouteMatch } from "react-router-dom";
import Comments from "../components/comments/Comments";
import HighlightedQuote from "../components/quotes/HighlightedQuote";
const QouteDetails = () => {
  const DUMMY = [
    {
      id: "q1",
      author: "Shajadul",
      text: "Learning React is fun!!!",
    },
    {
      id: "q2",
      author: "Mamun",
      text: "Learning Node js is easy!!!",
    },
  ];
  const routeMatch = useRouteMatch();
  console.log(routeMatch);
  const params = useParams();
  const qoute = DUMMY.find((qoute) => qoute.id === params.qouteID);
  if (!qoute) {
    return <p>No Qoute found!</p>;
  }
  return (
    <Fragment>
      <h1>Qoute Details!</h1>
      {/* <p>{params.qouteID}</p> */}
      <HighlightedQuote author={qoute.author} text={qoute.text} />
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

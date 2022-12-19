import { Fragment } from "react";
import { Route, useParams } from "react-router-dom";
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
      <Route path={`/qoutes/${params.qouteID}/comments`}>
        <Comments />
      </Route>
    </Fragment>
  );
};
export default QouteDetails;

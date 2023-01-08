import { Fragment } from "react";
import { useHistory, useLocation } from "react-router-dom";
import QuoteItem from "./QuoteItem";
import classes from "./QuoteList.module.css";
// const sortQuotes = (quotes, ascending) => {
//   return quotes.sort((quoteA, quoteB) => {
//     if (ascending) {
//       return quoteA.id > quoteB.id ? 1 : -1;
//     } else {
//       return quoteA.id < quoteB.id ? 1 : -1;
//     }
//   });
// };
const QuoteList = (props) => {
  const history = useHistory();
  const location = useLocation();

  const queryParams = new URLSearchParams(location.search);
  console.log(queryParams);
  const orderIsAscending = queryParams.get("sort") === "english";
  console.log(orderIsAscending);

  const changeSorting = () => {
    history.push(
      {
        pathname: location.pathname,
        search: `?sort=${orderIsAscending ? "bangla" : "english"}`,
      }
      // `${location.pathname}?sort=${orderIsAscending ? "desc" : "asc"}`
    );
  };
  let sortedQoutes;
  if (orderIsAscending) {
    sortedQoutes = props.qoutes.sort(function (a, b) {
      return a.text.localeCompare(b.text);
    });
  } else {
    sortedQoutes = props.qoutes.sort(function (a, b) {
      return b.text.localeCompare(a.text);
    });
  }
  return (
    <Fragment>
      <div className={classes.sorting}>
        <button onClick={changeSorting}>
          Sort {orderIsAscending ? "Bangla" : "English"}
        </button>
      </div>
      <ul className={classes.list}>
        {sortedQoutes.map((quote) => (
          <QuoteItem
            key={quote.id}
            id={quote.id}
            author={quote.author}
            text={quote.text}
          />
        ))}
      </ul>
    </Fragment>
  );
};

export default QuoteList;

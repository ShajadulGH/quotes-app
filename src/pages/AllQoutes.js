import QuoteList from "../components/quotes/QuoteList";
import useHttp from "../components/hooks/use-http";
import { getAllQuotes } from "../lib/api";
import { useEffect } from "react";
import NoQuotesFound from "../components/quotes/NoQuotesFound";
import LoadingSpinner from "../components/UI//LoadingSpinner";
const AllQoutes = () => {
  const {
    sendRequest,
    data: loadedData,
    status,
    error,
  } = useHttp(getAllQuotes, true);
  useEffect(() => {
    sendRequest();
  }, [sendRequest]);
  console.log(loadedData);
  if (status === "pending") {
    return (
      <div className="centered">
        <LoadingSpinner />
      </div>
    );
  }
  if (error) {
    return <p className="centered error">{error}</p>;
  }
  if (status === "completed" && (!loadedData || loadedData.length === 0)) {
    return <NoQuotesFound />;
  }
  return <QuoteList qoutes={loadedData} />;
};
export default AllQoutes;

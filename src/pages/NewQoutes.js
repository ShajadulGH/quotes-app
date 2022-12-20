import QuoteForm from "../components/quotes/QuoteForm";
import { useHistory } from "react-router-dom";
import useHttp from "../components/hooks/use-http";
import { addQuote } from "../lib/api";
import { useEffect } from "react";
const NewQoutes = () => {
  const history = useHistory();
  const { sendRequest, status } = useHttp(addQuote);
  useEffect(() => {
    if (status === "completed") {
      history.push("/qoutes");
    }
  }, [status, history]);

  const newQouteHandler = (qoute) => {
    sendRequest(qoute);
  };
  return (
    <QuoteForm isLoading={status === "pending"} onAddQuote={newQouteHandler} />
  );
};
export default NewQoutes;

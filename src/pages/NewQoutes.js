import QuoteForm from "../components/quotes/QuoteForm";
import { useHistory } from "react-router-dom";
const NewQoutes = () => {
  const history = useHistory();
  const newQouteHandler = (qoute) => {
    console.log(qoute);
    history.push("/qoutes");
  };
  return <QuoteForm onAddQuote={newQouteHandler} />;
};
export default NewQoutes;

import QuoteForm from "../components/quotes/QuoteForm";
const NewQoutes = () => {
  const newQouteHandler = (qoute) => {
    console.log(qoute);
  };
  return <QuoteForm onAddQuote={newQouteHandler} />;
};
export default NewQoutes;

import QuoteList from "../components/quotes/QuoteList";
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
const AllQoutes = () => {
  return <QuoteList quotes={DUMMY} />;
};
export default AllQoutes;

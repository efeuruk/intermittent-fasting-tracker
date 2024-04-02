import TotalCards from "../components/TotalCards";
import FastingList from "../components/FastingList/FastingList";

const ViewAll = () => {
  return (
    <>
      <TotalCards />
      <FastingList title={"My Fasting Sessions"} showViewAll={false} />
    </>
  );
};

export default ViewAll;

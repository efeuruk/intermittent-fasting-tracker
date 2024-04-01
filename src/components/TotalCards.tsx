import TotalCard from "./TotalCard";
import styled from "styled-components";

const Container = styled.div`
  margin-top: 55px;
  display: flex;
  justify-content: space-between;
`;

const TotalCards = () => {
  return (
    <Container>
      <TotalCard
        icon={"⌛️"}
        number={48}
        title={"Total Hours"}
        style={{ marginRight: "30px" }}
      />
      <TotalCard icon={"🎉"} number={6} title={"Total Completed Fasting"} />
    </Container>
  );
};

export default TotalCards;

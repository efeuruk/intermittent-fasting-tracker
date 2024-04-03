import { useFastingContext } from "../context/hooks/useFastingContext";
import TotalCard from "./TotalCard";
import styled from "styled-components";

const Container = styled.div`
  margin-top: 55px;
  display: flex;
  justify-content: space-between;
`;

const TotalCards = () => {
  const { getTotalFastingHours, getTotalCompletedFasting } =
    useFastingContext();
  return (
    <Container>
      <TotalCard
        icon={"⌛️"}
        number={getTotalFastingHours()}
        title={"Total Hours"}
      />
      <TotalCard
        icon={"🎉"}
        number={getTotalCompletedFasting()}
        title={"Total Completed Fasting"}
      />
    </Container>
  );
};

export default TotalCards;

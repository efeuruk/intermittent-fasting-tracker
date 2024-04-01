import styled from "styled-components";
import { useFastingContext } from "../context/hooks/useFastingContext";
import {
  Button,
  ButtonProps,
  Typography,
  TypographyProps,
} from "@mui/material";
import FastingListItem from "./FastingListItem/FastingListItem";

const Container = styled.div`
  margin-top: 40px;
`;

const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Title = styled((props: TypographyProps) => <Typography {...props} />)`
  font-size: 24px;
  font-weight: 700;
`;

const ViewButton = styled((props: ButtonProps) => <Button {...props} />)`
  text-transform: none;
  color: #834cc9;
  &:hover {
    background-color: #834cc9;
    color: #fff;
  }
`;

const FastingListContainer = styled.div`
  margin-top: 20px;
`;

const FastingList = () => {
  const { fastingList } = useFastingContext();
  return (
    <Container>
      <TitleContainer>
        <Title component={"h4"}>My Latest Fastings</Title>
        <ViewButton>View All</ViewButton>
      </TitleContainer>
      {fastingList.length > 0 && (
        <FastingListContainer>
          {fastingList.map(fasting => (
            <div key={fasting.date.toString()}>
              <p>{fasting.duration} hours</p>
            </div>
          ))}
        </FastingListContainer>
      )}
      <FastingListItem fasting={fastingList[0]} />
    </Container>
  );
};

export default FastingList;

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
    background-color: rgba(131, 76, 201, 0.2);
  }
`;

const FastingListContainer = styled.div`
  margin-top: 20px;
`;

const FastingList = () => {
  const { fastingList } = useFastingContext();
  return (
    fastingList.length > 0 && (
      <Container>
        <TitleContainer>
          <Title component={"h4"}>My Latest Fastings</Title>
          <ViewButton>View All</ViewButton>
        </TitleContainer>
        <FastingListContainer>
          {fastingList.map(fasting => (
            <FastingListItem
              key={fasting.date.toISOString()}
              fasting={fasting}
            />
          ))}
        </FastingListContainer>
      </Container>
    )
  );
};

export default FastingList;

import React from "react";
import * as S from "./styles";
import { FastingItem } from "../../types";
import { IconButton } from "@mui/material";
import ThreeDotsIcon from "../../assets/three-dots.svg?react";

type FastingListItemProps = {
  fasting: FastingItem;
};

const FastingListItem: React.FC<FastingListItemProps> = ({ fasting }) => {
  // const { duration, date, startTime } = fasting;
  return (
    <S.StyledCard variant="outlined">
      <S.LeftContainer>
        {/* <div>
          <div>{duration}</div>
          <div>{date.toISOString()}</div>
        </div>
        <div>{`${startTime} - ${date.toISOString()}`}</div> */}

        <S.Title>
          <S.Hour component={"h5"}>8 Hours</S.Hour>
          <S.Date label="5 minutes ago" />
        </S.Title>
        <S.StartAndEndTime>08:00 - 16:00</S.StartAndEndTime>
      </S.LeftContainer>

      <IconButton sx={{ width: "40px", height: "40px", alignSelf: "center" }}>
        <ThreeDotsIcon />
      </IconButton>
    </S.StyledCard>
  );
};

export default FastingListItem;

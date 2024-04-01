import React from "react";
import * as S from "./styles";
import { FastingItem } from "../../types";
import { IconButton } from "@mui/material";
import ThreeDotsIcon from "../../assets/three-dots.svg?react";
import {
  calculateEndTimeFromDurationAndStartTime,
  getHoursAndMinutesFromSeconds,
  getTimeAgo,
} from "../../utils";

type FastingListItemProps = {
  fasting: FastingItem;
};

const FastingListItem: React.FC<FastingListItemProps> = ({ fasting }) => {
  const { duration, durationInHours, date, startTime } = fasting;
  return (
    <S.StyledCard variant="outlined">
      <S.LeftContainer>
        <S.Title>
          <S.Hour component={"h5"}>
            {getHoursAndMinutesFromSeconds(durationInHours)}
          </S.Hour>
          <S.Date label={getTimeAgo(date)} />
        </S.Title>
        <S.StartAndEndTime>{`${startTime} - ${calculateEndTimeFromDurationAndStartTime(
          startTime,
          duration
        )}`}</S.StartAndEndTime>
      </S.LeftContainer>
      <IconButton sx={{ width: "40px", height: "40px", alignSelf: "center" }}>
        <ThreeDotsIcon />
      </IconButton>
    </S.StyledCard>
  );
};

export default FastingListItem;

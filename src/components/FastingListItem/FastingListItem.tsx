import React from "react";
import * as S from "./styles";
import { FastingItem } from "../../types";

import {
  calculateEndTimeFromDurationAndStartTime,
  getHoursAndMinutesFromSeconds,
  getTimeAgo,
} from "../../utils";
import DeleteButton from "../DeleteButton";

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
          <S.Date label={getTimeAgo(new Date(date))} />
        </S.Title>
        <S.StartAndEndTime>{`${startTime} - ${calculateEndTimeFromDurationAndStartTime(
          startTime,
          duration
        )}`}</S.StartAndEndTime>
      </S.LeftContainer>
      <DeleteButton fasting={fasting} />
    </S.StyledCard>
  );
};

export default FastingListItem;

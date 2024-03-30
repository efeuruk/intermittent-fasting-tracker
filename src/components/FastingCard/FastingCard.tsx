import React from "react";
import * as S from "./styles";
import { CardContent } from "@mui/material";
import CTAButton from "../CTAButton";
import Countdown from "../Countdown/Countdown";
import { calculateTimePickerDifference } from "../../utils";
import Lottie from "react-lottie";
import CompletedLottie from "../../lotties/fasting-completed-animation.json";

enum Status {
  READY = "ready",
  ONGOING = "ongoing",
  COMPLETED = "completed",
}

const getFastingTexts = (status: Status) => {
  if (status === Status.READY) {
    return {
      title: "Ready to Fasting",
      time: "Set Fasting Time",
      button: "Start Fasting",
    };
  } else if (status === Status.ONGOING) {
    return {
      title: "You are fasting",
      time: "Elapsed Time",
      button: "End Fasting",
    };
  } else {
    return {
      title: "Fasting is Completed!",
      time: "Total Time",
      button: "Start New Fasting Session",
    };
  }
};

const FastingCard = () => {
  const countdownRef = React.useRef<{
    startCountdown: () => void;
    pauseCountdown: () => void;
    stopCountdown: () => void;
  }>(null);

  // timer states
  const [timerStarted, setTimerStarted] = React.useState(false);
  const [timerStatus, setTimerStatus] = React.useState(Status.READY);

  // actual timer values
  const [startTime, setStartTime] = React.useState("00:00");
  const [endTime, setEndTime] = React.useState("00:01");

  const [showFinishAnimation, setShowFinishAnimation] = React.useState(false);

  const toggleTimer = () => {
    if (timerStatus === Status.COMPLETED) {
      setTimerStarted(false);
      setTimerStatus(Status.READY);
      countdownRef?.current?.stopCountdown();
      setShowFinishAnimation(false);
      return;
    }
    if (timerStarted) {
      setTimerStarted(false);
      setTimerStatus(Status.COMPLETED);
      countdownRef?.current?.pauseCountdown();
      setShowFinishAnimation(true);
    } else {
      setTimerStarted(true);
      setTimerStatus(Status.ONGOING);
      countdownRef?.current?.startCountdown();
      setShowFinishAnimation(false);
    }
  };

  const lottieOptions = {
    loop: true,
    autoplay: true,
    animationData: CompletedLottie,
  };

  return (
    <S.StyledCard variant="outlined">
      {showFinishAnimation && (
        <div
          style={{
            position: "absolute",
            top: "-24%",
            left: 0,
          }}
        >
          <Lottie options={lottieOptions} />
        </div>
      )}
      <CardContent sx={{ padding: 0 }}>
        <S.FastingCardTitle>
          {getFastingTexts(timerStatus).title}
        </S.FastingCardTitle>
        <Countdown
          ref={countdownRef}
          durationInSeconds={calculateTimePickerDifference(startTime, endTime)}
          label={getFastingTexts(timerStatus)?.time}
        />
        <S.Timers>
          <div>
            <S.TimeLabel>Start to</S.TimeLabel>
            <input
              type="time"
              min="00:00"
              max="23:59"
              defaultValue={startTime}
              onChange={e => {
                setStartTime(e.target.value);
              }}
            />
          </div>
          <div>
            <S.TimeLabel>End to</S.TimeLabel>
            <input
              type="time"
              min="00:00"
              max="23:59"
              defaultValue={endTime}
              onChange={e => {
                setEndTime(e.target.value);
              }}
            />
          </div>
        </S.Timers>
        <CTAButton onClick={toggleTimer}>
          {getFastingTexts(timerStatus).button}
        </CTAButton>
      </CardContent>
    </S.StyledCard>
  );
};

export default FastingCard;

import React from "react";
import ThreeDotsIcon from "../assets/three-dots.svg?react";
import TrashBinIcon from "../assets/trash-bin.svg?react";
import { Card, IconButton, Popper, Typography } from "@mui/material";
import { FastingItem } from "../types";
import { useFastingContext } from "../context/hooks/useFastingContext";
import styled from "styled-components";

type DeleteButtonProps = {
  fasting: FastingItem;
};

const DeleteCard = styled(Card)`
  padding: 13px 11px;
  display: flex;
  align-items: center;
  box-shadow: 0px 0px 12px 0px #0000001a;
  cursor: pointer;
  border-radius: 8px;
  border-color: transparent;
`;

const DeleteButton: React.FC<DeleteButtonProps> = ({ fasting }) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleMenuToggle = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const open = !!anchorEl;
  const id = open ? "transition-popper" : undefined;

  const { date } = fasting;
  const { removeFromFastingList } = useFastingContext();

  const handleRemoval = () => {
    removeFromFastingList(date);
  };

  return (
    <>
      <IconButton
        sx={{ width: "40px", height: "40px", alignSelf: "center" }}
        onClick={handleMenuToggle}
      >
        <ThreeDotsIcon />
      </IconButton>
      <Popper id={id} open={open} anchorEl={anchorEl} placement="bottom-end">
        <DeleteCard variant="outlined" onClick={handleRemoval}>
          <IconButton sx={{ padding: 0, marginRight: "6px" }}>
            <TrashBinIcon />
          </IconButton>
          <Typography sx={{ fontSize: "15px" }}>
            Delete Fasting Session
          </Typography>
        </DeleteCard>
      </Popper>
    </>
  );
};

export default DeleteButton;

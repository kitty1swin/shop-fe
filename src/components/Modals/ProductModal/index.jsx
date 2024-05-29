import React from "react";

import { BaseModal } from "../BaseModal";
import { Box, Typography } from "@mui/material";

import { MOCKED_FEEDBACKS } from "./mockedFeedbacks";

export const ProductModal = ({ id, name, open, onClose }) => {
  return (
    <BaseModal open={open} onClose={onClose} title={name}>
      <Box>
        {MOCKED_FEEDBACKS.map((feedback) => (
          <Box display="flex" justifyContent="space-between">
            <Typography component="span">{feedback.author}</Typography>
            <Typography component="span">{feedback.comment}</Typography>
          </Box>
        ))}
      </Box>
    </BaseModal>
  );
};

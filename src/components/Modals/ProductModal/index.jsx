import React from "react";

import { BaseModal } from "../BaseModal";
import { Box, Typography } from "@mui/material";

import { MOCKED_FEEDBACKS } from "./mockedFeedbacks";

export const ProductModal = ({ id, name, open, onClose, feedbacks }) => {
  return (
    <BaseModal open={open} onClose={onClose} title={name}>
      <Box>
        {((feedbacks.length && feedbacks) || MOCKED_FEEDBACKS).map(
          (feedback) => (
            <Box
              display="flex"
              justifyContent="space-between"
              key={feedback.Id}
            >
              <Typography component="span">{feedback.UserId}</Typography>
              <Typography component="span">{feedback.Comment}</Typography>
            </Box>
          )
        )}
      </Box>
    </BaseModal>
  );
};

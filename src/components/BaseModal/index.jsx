import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { Typography } from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "#ffffff",
  border: "0",
  borderRadius: 4,
  p: 4,
};

export default function BaseModal({ open, onClose, title, children }) {
  return (
    <div>
      <Modal
        open={open}
        onClose={onClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography
            id="modal-busket-title"
            variant="h6"
            fontWeight="bold"
            textAlign="center"
          >
            {title}
          </Typography>
          {children}
        </Box>
      </Modal>
    </div>
  );
}

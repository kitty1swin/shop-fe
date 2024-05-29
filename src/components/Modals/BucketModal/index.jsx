import React from "react";

import { BaseModal } from "../BaseModal";

import { Box, Button, Typography } from "@mui/material";
import { useSelector } from "react-redux";

export const BucketModal = ({ open, onClose }) => {
  const bucketItems = useSelector((state) => state.global.bucket);

  return (
    <BaseModal open={open} onClose={onClose} title={"Корзина"}>
      <Box>
        <Typography id="modal-busket-description" sx={{ mt: 2 }}>
          ТУТ ПОХОДУ БУДУТ КАРТОЧКИ ТОВАРОВ
        </Typography>
        <Box my={3} maxHeight="200px" sx={{ overflowY: "scroll" }}>
          {bucketItems.map((item) => (
            <p>{item.name}</p>
          ))}
        </Box>
        <Button fullWidth>Перейти к оплате</Button>
      </Box>
    </BaseModal>
  );
};

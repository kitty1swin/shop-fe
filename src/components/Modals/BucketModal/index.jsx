import React, { useMemo, useState } from "react";

import { BaseModal } from "../BaseModal";

import { Box, Button, Typography, TextField } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";

import CloseIcon from "@mui/icons-material/Close";
import { setBucket } from "../../../redux/slices/globalSlice";
import axios from "axios";

export const BucketModal = ({ open, onClose }) => {
  const dispatch = useDispatch();

  const bucketItems = useSelector((state) => state.global.bucket);

  const [adress, setAdress] = useState("");

  const onChangeAdress = (e) => {
    setAdress(e.target.value);
  };

  const handleRemoveProduct = (Name) => {
    dispatch(setBucket(bucketItems.filter((el) => el.Name !== Name)));
  };

  const uniqueItemsWithCount = useMemo(() => {
    const uniqueItems = [];
    const itemMap = {};

    bucketItems.forEach((item) => {
      if (itemMap[item.Name]) {
        itemMap[item.Name].count++;
      } else {
        itemMap[item.Name] = { ...item, count: 1 };
        uniqueItems.push(itemMap[item.Name]);
      }
    });

    return uniqueItems;
  }, [bucketItems]);

  const handleSubmit = () => {
    if (adress) {
      uniqueItemsWithCount.map((item) => {
        axios
          .post("http://localhost:7132/user/order", {
            Status: "В прогрессе",
            Adress: adress,
            TotalPrice: +item.count * +item.Price,
            ProductId: item.Id,
            //UserId: User.Id
          })
          .catch((e) => console.log("Purchase not completed", e));
      });

      dispatch(setBucket([]));
      onClose();
    }
  };

  return (
    <BaseModal open={open} onClose={onClose} title={"Корзина"}>
      <Box display="flex" flexDirection="column" gap="15px">
        {bucketItems && !bucketItems.length && (
          <Typography id="modal-busket-description" sx={{ mt: 2 }}>
            Пока товаров не было добавлено в корзину
          </Typography>
        )}
        <Box my={3} maxHeight="300px" sx={{ overflowY: "auto" }}>
          {uniqueItemsWithCount.map((item) => (
            <Box display="flex" justifyContent="space-between" key={item.Name}>
              <Typography key={item.Name}>{item.Name}</Typography>
              <Box display="flex" gap="15px">
                <Typography>{+item.Price * +item.count} ₽</Typography>
                <span>{item.count}</span>
                <Box onClick={() => handleRemoveProduct(item.Name)}>
                  <CloseIcon />
                </Box>
              </Box>
            </Box>
          ))}
        </Box>
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="adress"
          label="Адрес доставки"
          Name="Address"
          autoComplete="adress"
          autoFocus
          onChange={onChangeAdress}
        />
        <Button fullWidth variant="contained" onClick={handleSubmit}>
          Оплатить
        </Button>
      </Box>
    </BaseModal>
  );
};

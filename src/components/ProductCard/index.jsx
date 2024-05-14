import { Box, Button, Stack, Typography, Snackbar } from "@mui/material";
import React, { useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setBucket } from "../../redux/slices/globalSlice";
import { ProductModal } from "../Modals/ProductModal";

export const ProductCard = ({
  name,
  image,
  description,
  price,
  category,
  id,
  feedbacks,
}) => {
  const dispatch = useDispatch();

  const bucketItems = useSelector((state) => state.global.bucket);

  const [isPurchaseDone, setIsPurchaseDone] = useState(false);
  const [isProductOpened, setIsProductOpened] = useState(false);

  const handlePurchaseDone = useCallback(
    () => setIsPurchaseDone((prev) => !prev),
    []
  );
  const handleProductOpened = useCallback(
    () => setIsProductOpened((prev) => !prev),
    []
  );

  const handleClickPurchase = () => {
    dispatch(
      setBucket([
        ...bucketItems,
        {
          Name: name,
          Image: image,
          Description: description,
          Price: price,
          Id: id,
        },
      ])
    );
    handlePurchaseDone();
  };

  return (
    <Box>
      <Stack direction="column" gap="15px">
        <img src={image} alt={`${name}`} />
        <Typography variant="h4">{name}</Typography>
        <Typography variant="p">{description}</Typography>
        <Box display="flex" justifyContent="space-between">
          <Typography variant="caption">{category}</Typography>
          <Typography variant="p">{price} ₽.</Typography>
        </Box>

        <Stack direction="column" gap="5px">
          <Button fullWidth onClick={handleProductOpened}>
            Отзывы
          </Button>
          <Button fullWidth onClick={handleClickPurchase} variant="contained">
            Заказать
          </Button>
        </Stack>
      </Stack>
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        open={isPurchaseDone}
        autoHideDuration={6000}
        onClose={handlePurchaseDone}
        message="Заказ добавлен в корзину!"
      />
      <ProductModal
        id={name}
        name={name}
        open={isProductOpened}
        onClose={handleProductOpened}
        feedbacks={feedbacks}
      />
    </Box>
  );
};

import { Box, Button, Stack, Typography, Snackbar } from "@mui/material";
import React, { useCallback, useState } from "react";
import { useDispatch } from "react-redux";
import { setBucket } from "../../redux/slices/globalSlice";
import { ProductModal } from "../Modals/ProductModal";

export const ProductCard = ({ name, image, description, price }) => {
  const dispatch = useDispatch();
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

  const handleClickPurchase = useCallback(() => {
    dispatch(setBucket({ name, image, description, price }));
    handlePurchaseDone();
  }, [description, dispatch, handlePurchaseDone, image, name, price]);

  return (
    <Box>
      <Stack direction="column" gap="15px">
        <img src={image} alt={`${name}`} />
        <Typography variant="h4">{name}</Typography>
        <Typography variant="p">{description}</Typography>
        <Typography variant="p">{price} ₽.</Typography>

        <Stack direction="column" gap="5px">
          <Button fullWidth onClick={handleProductOpened}>
            Подробнее
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
      />
    </Box>
  );
};

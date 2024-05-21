import { Box, Button, Stack, Typography } from "@mui/material";
import React from "react";

export default function ProductCard({ name, image, description, price }) {
  return (
    <Box>
      <Stack direction="column" gap="15px">
        <img src={image} alt={`${name}`} />
        <Typography variant="h4">{name}</Typography>
        <Typography variant="p">{description}</Typography>
        <Typography variant="p">{price} ₽.</Typography>

        <Stack direction="column" gap="5px">
          <Button fullWidth>Подробнее</Button>
          <Button fullWidth>Заказать</Button>
        </Stack>
      </Stack>
    </Box>
  );
}

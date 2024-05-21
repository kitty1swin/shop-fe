import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import DescriptionBlock from "../../components/DescriptionBlock";

const descriptions = [
  {
    code: "Оплата",
    content: (
      <ul>
        <li>Карта на сайте и в магазине</li>
        <li>Наличные в магазине</li>
        <li>Через терминал оплаты во время доставки</li>
      </ul>
    ),
  },
  {
    code: "Доставка",
    content: (
      <Box>
        <Typography>По рязани</Typography>
        <ul>
          <li>300 руб до 5 000р</li>
          <li>Свяше 5 000 привезем бесплатно </li>
          <li>Самовывоз с Введенской, 80</li>
        </ul>
      </Box>
    ),
  },
  {
    code: "Режим работы",
    content: (
      <Box>
        <Typography>Магазин на Введенской</Typography>
        <Typography>Пн-пт: 9:30 — 20:00</Typography>
        <Typography>Сб-вс: 10:00 — 20:00</Typography>
        <Typography>Заказы на сайте принимаются круглосуточно</Typography>
      </Box>
    ),
  },
];

export default function DescriptionsBlock() {
  return (
    <Box>
      <Typography variant="h3">Оплата</Typography>
      <Stack
        gap="30px"
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={2}
        px="140px"
      >
        {descriptions.map((description) => (
          <DescriptionBlock
            code={description.code}
            content={description.content}
            key={description.code}
          />
        ))}
      </Stack>
    </Box>
  );
}

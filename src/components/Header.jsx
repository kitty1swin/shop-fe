import React, { useState, useCallback } from "react";
import { FaShoppingCart } from "react-icons/fa";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import BaseModal from "./BaseModal";

export default function Header() {
  const [cartOpen, setCartOpen] = useState(false);

  const handleCartOpen = useCallback(() => setCartOpen((prev) => !prev), []);

  return (
    <header>
      <div>
        <span className="logo"> cakePancake</span>
        <ul className="nav">
          <li>Про нас</li>
          <li>Контакты</li>
          <li>Кабинет</li>
        </ul>
        <FaShoppingCart
          onClick={handleCartOpen}
          className={`shop-cart-button ${cartOpen && "active"}`}
        />
      </div>

      <div className="presentation"></div>

      <BaseModal open={cartOpen} onClose={handleCartOpen}>
        <Box>
          <Typography id="modal-busket-title" variant="h6" component="h2">
            Корзина
          </Typography>
          <Typography id="modal-busket-description" sx={{ mt: 2 }}>
            ТУТ ПОХОДУ БУДУТ КАРТОЧКИ ТОВАРОВ
          </Typography>
        </Box>
      </BaseModal>
    </header>
  );
}

import React, { useState, useCallback } from "react";
import { FaShoppingCart } from "react-icons/fa";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import BaseModal from "./BaseModal";

export default function Header() {
  const isAuth = false;
  const [cartOpen, setCartOpen] = useState(false);

  const handleCartOpen = useCallback(() => setCartOpen((prev) => !prev), []);

  return (
    <header className="header">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <span className="logo"> cakePancake</span>
        <Box display="flex" gap="15px" alignItems="center">
          <ul className="nav">
            <li>Про нас</li>
            <li>Контакты</li>
            <li>{isAuth ? "Кабинет" : "Войти"}</li>
          </ul>
          <FaShoppingCart
            onClick={handleCartOpen}
            size={20}
            className={`shop-cart-button ${cartOpen && "active"}`}
          />
        </Box>
      </Box>

      <div className="presentation"></div>

      <BaseModal open={cartOpen} onClose={handleCartOpen} title={"Корзина"}>
        <Box>
          <Typography id="modal-busket-description" sx={{ mt: 2 }}>
            ТУТ ПОХОДУ БУДУТ КАРТОЧКИ ТОВАРОВ
          </Typography>
        </Box>
      </BaseModal>
    </header>
  );
}

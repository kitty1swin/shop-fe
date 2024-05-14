import React, { useState, useCallback } from "react";
import { FaShoppingCart } from "react-icons/fa";

import Box from "@mui/material/Box";
import { BucketModal } from "../../components/Modals/BucketModal";
import { SignInModal } from "../../components/Modals/SignInModal";
import { useDispatch, useSelector } from "react-redux";
import { setAuth } from "../../redux/slices/globalSlice";

export const Header = () => {
  const dispatch = useDispatch();
  const isAuth = useSelector((state) => state.global.isAuth);

  const [cartOpen, setCartOpen] = useState(false);
  const [signInOpen, setSignInOpen] = useState(false);

  const handleCartOpen = useCallback(() => setCartOpen((prev) => !prev), []);
  const handleSignInOpen = useCallback(
    () => setSignInOpen((prev) => !prev),
    []
  );

  const handleLogOut = useCallback(() => {
    dispatch(setAuth(false));
  }, [dispatch]);

  return (
    <header className="header">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <span className="logo"> cakePancake</span>
        <Box display="flex" gap="15px" alignItems="center">
          <ul className="nav">
            <li onClick={isAuth ? handleLogOut : handleSignInOpen}>
              {isAuth ? "Кабинет" : "Войти"}
            </li>
            {isAuth && <li onClick={handleLogOut}>Выйти</li>}
          </ul>
          <FaShoppingCart
            onClick={handleCartOpen}
            size={20}
            className={`shop-cart-button ${cartOpen && "active"}`}
          />
        </Box>
      </Box>

      <div className="presentation"></div>
      <BucketModal open={cartOpen} onClose={handleCartOpen} />
      <SignInModal open={signInOpen} onClose={handleSignInOpen} />
    </header>
  );
};

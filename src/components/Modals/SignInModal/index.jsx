import React, { useCallback, useState } from "react";

import { BaseModal } from "../BaseModal";

import { Box } from "@mui/material";
import { useDispatch } from "react-redux";
import { setAuth } from "../../../redux/slices/globalSlice";
import { SignInForm } from "./Forms/SignInForm";
import { SignUpForm } from "./Forms/SignUpForm";

export const SignInModal = ({ open, onClose }) => {
  const dispatch = useDispatch();
  const [modeOfModal, setModeOfModal] = useState("SignIn");

  const handleSignIn = useCallback(() => {
    dispatch(setAuth(true));
    onClose();
  }, [dispatch, onClose]);

  return (
    <BaseModal open={open} onClose={onClose} title={"Авторизация"}>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
      >
        {modeOfModal === "SignIn" ? (
          <SignInForm
            onSubmit={handleSignIn}
            handleChangeMode={() => setModeOfModal("SignUp")}
          />
        ) : (
          <SignUpForm
            onSubmit={handleSignIn}
            handleChangeMode={() => setModeOfModal("SignIn")}
          />
        )}
      </Box>
    </BaseModal>
  );
};

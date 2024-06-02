import React, { useCallback, useState } from "react";

import { BaseModal } from "../BaseModal";

import { Box } from "@mui/material";

import { useDispatch } from "react-redux";
import { setAuth } from "../../../redux/slices/globalSlice";

import { SignInForm } from "./Forms/SignInForm";
import { SignUpForm } from "./Forms/SignUpForm";

import axios from "axios";

export const SignInModal = ({ open, onClose }) => {
  const dispatch = useDispatch();
  const [modeOfModal, setModeOfModal] = useState("SignIn");

  const handleSignIn = useCallback(() => {
    dispatch(setAuth(true));
    onClose();
  }, [dispatch, onClose]);

  const handleCreateUserSubmit = (form) => {
    form.preventDefault();

    axios
      .post("http://localhost:5026/User/register", {
        CreateDate: new Date().toJSON(),
        UpdateDate: new Date().toJSON(),
        Name: form.target.Name.value,
        Surname: form.target.Surname.value,
        Patronymic: form.target.SecondName.value,
        Email: form.target.email.value,
        Password: form.target.password.value,
        PhoneNumber: `+7 ${form.target.phoneNumber.value}`,
      })
      .then(() => console.log("its working"))
      .catch((e) => console.log("Error"));
  };

  return (
    <BaseModal
      open={open}
      onClose={onClose}
      title={modeOfModal === "SignIn" ? "Авторизация" : "Регистрация"}
    >
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
            onSubmit={handleCreateUserSubmit}
            handleChangeMode={() => setModeOfModal("SignIn")}
          />
        )}
      </Box>
    </BaseModal>
  );
};

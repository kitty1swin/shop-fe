import React from "react";

import { Box, Button, TextField } from "@mui/material";
import { MuiTelInput, matchIsValidTel } from "mui-tel-input";

export const SignUpForm = ({ onSubmit, handleChangeMode }) => {
  const [phoneNumberValue, setPhoneNumberValue] = React.useState("");

  const handlePhoneNumberChange = (newValue) => {
    console.log(newValue);
    setPhoneNumberValue(newValue);
  };

  return (
    <form noValidate onSubmit={onSubmit}>
      <TextField
        variant="outlined"
        margin="normal"
        required
        fullWidth
        id="Surname"
        label="Фамилия"
        name="surname"
        autoComplete="surname"
        autoFocus
      />
      <TextField
        variant="outlined"
        margin="normal"
        required
        fullWidth
        id="Name"
        label="Имя"
        name="name"
        autoComplete="name"
        autoFocus
      />
      <TextField
        variant="outlined"
        margin="normal"
        required
        fullWidth
        id="email"
        label="Email"
        name="email"
        autoComplete="email"
        autoFocus
      />
      <TextField
        variant="outlined"
        margin="normal"
        required
        fullWidth
        name="password"
        label="Пароль"
        type="password"
        id="password"
        autoComplete="current-password"
      />
      <MuiTelInput
        sx={{ mt: 1 }}
        forceCallingCode
        value={phoneNumberValue}
        onChange={handlePhoneNumberChange}
        defaultCountry="RU"
        onlyCountries={["RU"]}
        disableDropdown
        fullWidth
      />
      <Box mt={2} display="flex" justifyContent="space-between">
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          style={{ marginRight: 8 }}
        >
          Регистрация
        </Button>
        <Button
          fullWidth
          variant="outlined"
          style={{ marginLeft: 8 }}
          onClick={handleChangeMode}
        >
          Вход
        </Button>
      </Box>
    </form>
  );
};

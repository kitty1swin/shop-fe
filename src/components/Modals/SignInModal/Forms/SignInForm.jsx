import React from "react";

import { Box, Button, TextField } from "@mui/material";

export const SignInForm = ({ onSubmit, handleChangeMode }) => {
  return (
    <form noValidate onSubmit={onSubmit}>
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
      <Box mt={2} display="flex" justifyContent="space-between">
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          style={{ marginRight: 8 }}
        >
          Войти
        </Button>
        <Button
          fullWidth
          variant="outlined"
          style={{ marginLeft: 8 }}
          onClick={handleChangeMode}
        >
          Регистрация
        </Button>
      </Box>
    </form>
  );
};

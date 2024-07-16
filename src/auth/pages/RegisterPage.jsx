import { Grid, TextField, Typography, Button, Link } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import AuthLayout from "../layout/AuthLayout";
import { useForm } from "../../hooks/useForm";

const formData = {
  email: "pfyc88@google.com",
  password: "1234",
  displayName: "PabloFC",
};

const formValidations = {
  email: [(value) => value.includes("@"), "El correo debe tener un @"],
  password: [
    (value) => value.length >= 6,
    "El password debe de tener más de 6 letras",
  ],
  displayName: [(value) => value.length >= 1, "El nombre es obligatorio"],
};
const RegisterPage = () => {
  const {
    displayName,
    email,
    password,
    onInputChange,
    formState,
    displayNameValid,
    emailValid,
    passwordValid,
    isFormValid,
  } = useForm(formData, formValidations);

  const onSubmit = (event) => {
    event.preventDefault();
    console.log(formState);
  };
  return (
    <AuthLayout title="Crear cuenta">
      <form onSubmit={onSubmit}>
        <Grid container>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Nombre"
              type="text"
              placeholder="Nombre"
              fullWidth
              name="displayName"
              value={displayName}
              onChange={onInputChange}
              error={!displayNameValid}
              helperText={!displayNameValid && "El nombre es obligatorio"}
            />
          </Grid>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Correo"
              type="email"
              placeholder="Correo@google.com"
              fullWidth
              name="email"
              value={email}
              onChange={onInputChange}
            />
          </Grid>

          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Contraseña"
              type="password"
              placeholder="contraseña"
              fullWidth
              name="password"
              value={password}
              onChange={onInputChange}
            />
          </Grid>

          <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
            <Grid item xs={12}>
              <Button type="submit" variant="contained" fullWidth>
                Crear cuenta
              </Button>
            </Grid>
          </Grid>
          <Grid container direction="row" justifyContent="end">
            <Typography sx={{ mr: 1 }}>¿Ya tienes cuenta?</Typography>
            <Link component={RouterLink} color="inherit" to="/auth/login">
              Ingresar
            </Link>
          </Grid>
        </Grid>
      </form>
    </AuthLayout>
  );
};

export default RegisterPage;

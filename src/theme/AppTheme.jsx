import { ThemeProvider } from "@emotion/react";
import { CssBaseline } from "@mui/material";
import { purpleTheme } from "./purpleTheme";

const AppTheme = ({ children }) => {
  return (
    <div>
      <ThemeProvider theme={purpleTheme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </div>
  );
};

export default AppTheme;

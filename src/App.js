import AppRouter from "./router";
import { Box, CssBaseline } from "@mui/material";
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    fontFamily: 'Montserrat, sans-serif',
  },
});

function App() {
  return (
      <Box className="App" sx={{ backgroundColor: '#17191C', color: "white" }}>
        <AppRouter />
      </Box>
  );
}

export default App;

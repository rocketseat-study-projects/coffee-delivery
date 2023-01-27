import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { CoffeeContextProvider } from "./contexts/CoffeeContext";
import { Router } from "./Router";
import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/themes/default";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <CoffeeContextProvider>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </CoffeeContextProvider>

      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;

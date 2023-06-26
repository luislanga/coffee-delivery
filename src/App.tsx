import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/themes/default";
import { GlobalStyle } from "./styles/global";
import { BrowserRouter } from "react-router-dom";
import { Router } from "./Router";
import { CartContextProvider } from "./contexts/CartContext";
import { AddressContextProvider } from "./contexts/AddressContext";
import { PaymentMethodContextProvider } from "./contexts/PaymentInfoContext";

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={defaultTheme}>
        <AddressContextProvider>
          <CartContextProvider>
            <PaymentMethodContextProvider>
              <Router />
            </PaymentMethodContextProvider>
          </CartContextProvider>
        </AddressContextProvider>
        <GlobalStyle />
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;

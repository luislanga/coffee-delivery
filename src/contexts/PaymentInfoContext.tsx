import { createContext, useState } from "react";

interface PaymentInfoContextProviderProps {
  children: React.ReactNode;
}

interface PaymentInfoContextType {
  currentPaymentInfo: string;
  setPaymentInfo: (method: string) => void;
  resetPaymentInfo: () => void;
}

export const PaymentMethodContext = createContext({} as PaymentInfoContextType);

export function PaymentMethodContextProvider({
  children,
}: PaymentInfoContextProviderProps) {
  const [currentPaymentInfo, setCurrentPaymentInfo] = useState("");

  function setPaymentInfo(method: string) {
    setCurrentPaymentInfo(method);
  }

  function resetPaymentInfo() {
    setCurrentPaymentInfo("");
  }

  return (
    <PaymentMethodContext.Provider
      value={{ currentPaymentInfo, setPaymentInfo, resetPaymentInfo }}
    >
      {children}
    </PaymentMethodContext.Provider>
  );
}

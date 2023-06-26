import { createContext, useState } from "react";

interface AddressContextProviderProps {
  children: React.ReactNode;
}

export interface formData {
  cep: number;
  rua: string;
  number: number;
  neighborhood: string;
  city: string;
  uf: string;
  complement?: string;
}

interface AddressContextType {
  currentAddress: formData;
  setAddress: (data: formData) => void;
}

export const AddressContext = createContext({} as AddressContextType);

export function AddressContextProvider({
  children,
}: AddressContextProviderProps) {
  const [currentAddress, setCurrentAddress] = useState<formData>({
    cep: 0,
    rua: "",
    number: 0,
    neighborhood: "",
    city: "",
    uf: "",
    complement: "",
  });

  function setAddress(data: formData) {
    setCurrentAddress(data);
  }

  return (
    <AddressContext.Provider value={{ currentAddress, setAddress }}>
      {children}
    </AddressContext.Provider>
  );
}

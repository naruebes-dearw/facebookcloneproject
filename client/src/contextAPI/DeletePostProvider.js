import { createContext, useContext, useState } from "react";

export const DeletePostContext = createContext();

export const DeletePostProvider = ({ children }) => (
  <DeletePostContext.Provider value={useState(false)}>
    {children}
  </DeletePostContext.Provider>
)

export const useDeletePostValue = () => useContext(DeletePostContext);
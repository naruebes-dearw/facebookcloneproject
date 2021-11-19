import { createContext, useContext, useState } from "react";

export const EditPostContext = createContext();

export const EditPostProvider = ({ children }) => (
  <EditPostContext.Provider value={useState(false)}>
    {children}
  </EditPostContext.Provider>
)

export const useEditPostValue = () => useContext(EditPostContext);
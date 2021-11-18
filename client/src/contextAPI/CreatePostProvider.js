import { createContext, useContext, useState } from "react";

export const CreatePostContext = createContext();

export const CreatePostProvider = ({ children }) => (
  <CreatePostContext.Provider value={useState(false)}>
    {children}
  </CreatePostContext.Provider>
)

export const useCreatePostValue = () => useContext(CreatePostContext);
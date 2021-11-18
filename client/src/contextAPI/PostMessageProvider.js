import { createContext, useContext, useState } from "react";

export const PostMessageContext = createContext();

export const PostMessageProvider = ({ children }) => (
  <PostMessageContext.Provider value={useState("")}>
    {children}
  </PostMessageContext.Provider>
)

export const usePostMessageValue = () => useContext(PostMessageContext);
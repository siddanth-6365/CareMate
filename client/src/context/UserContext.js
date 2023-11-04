import React, { createContext, useContext, useState } from "react";

const UserContext = createContext();

export function useUserContext() {
  return useContext(UserContext);
}

export function UserProvider({ children }) {
  const [userDetails, setuserDetails] = useState([{}]);

  const adduserDetails = (data) => {
    setuserDetails(data);
  };

  return (
    <UserContext.Provider
      value={{
        userDetails,
        adduserDetails,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

import React, { createContext, useState } from "react";

export const ClintContext = createContext(false);

export const ClintProvider = ({ children }) => {
    const [clints, setClints] = useState("hello");

    return (
        <ClintContext.Provider value={[clints, setClints]}>
            {children}
        </ClintContext.Provider>
    );
};

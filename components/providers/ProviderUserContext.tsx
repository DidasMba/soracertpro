/** @format */

"use client";

import { UserProvider } from "@/context/UserContext";
import React from "react";

const ProviderUserContext: React.FC<{ children: React.ReactNode }> = ({
    children,
}) => {
    return <UserProvider>{children}</UserProvider>;
};

export default ProviderUserContext;

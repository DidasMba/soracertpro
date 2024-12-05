/** @format */
"use client";
import { getUserProfile } from "@/lib/api/auth";
import { TUser } from "@/type";
import { useQuery } from "@tanstack/react-query";
import React, { createContext, useContext, useEffect, useState } from "react";

interface UserContextProps {
    user: TUser | null;
}

const UserContext = createContext<UserContextProps | undefined>(undefined);

export const UserProvider: React.FC<{ children: React.ReactNode }> = ({
    children,
}) => {
    const [user, setUser] = useState<TUser | null>(null);

    const { data: userApiResponse, isLoading } = useQuery({
        queryKey: ["user"],
        queryFn: () => getUserProfile(),
    });

    useEffect(() => {
        if (!isLoading && userApiResponse) {
            setUser(userApiResponse?.user);
        }
    }, [isLoading, userApiResponse]);

    return (
        <UserContext.Provider value={{ user }}>{children}</UserContext.Provider>
    );
};

export const useUser = () => {
    const context = useContext(UserContext);
    if (!context) {
        throw new Error("useUser must be used within a UserProvider");
    }
    return context;
};

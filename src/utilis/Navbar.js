import React from "react";
import { DetailsPage } from "../pages/Details";
import {Generic} from "../pages/generic";
import { HomePage } from "../pages/Home";
import { ProperPage } from "../pages/Properties/index";


export const navbar = [
    {
        id: 1,
        title: "Home",
        path: "/home",
        Element: <HomePage />,
        search: "?",
        hidden: false,
        private: false,
    },
    {
        id: 2,
        title: "Properties",
        path: "/properties",
        Element: <ProperPage/>,
        search: "?",
        hidden: false,
        private: false,
    },
    {
        id: '2-1',
        title: "Properties",
        path: "/properties/:id",
        Element: <DetailsPage />,
        search: "?",
        hidden: true,
        private: false,
        param: true,
    },
    {
        id: 3,
        title: "Contacts",
        path: "/contacts",
        Element: <Generic />,
        search: "?",
        hidden: false,
        private: false,
    },
    {
        id: 4,
        title: "Sign In",
        path: "/signin",
        Element: <Generic />,
        search: "?",
        hidden: true,
        private: false,
    },
    {
        id: 5,
        title: "Sign Up",
        path: "/signup",
        Element: <Generic />,
        search: "?",
        hidden: true,
        private: false,
    },
];

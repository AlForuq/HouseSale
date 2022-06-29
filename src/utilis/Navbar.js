import React from "react";
import { AddNewPage } from "../pages/AddNew";
import { DetailsPage } from "../pages/Details";
import { Generic } from "../pages/generic";
import { HomePage } from "../pages/Home";
import { MyPropertiesPage } from "../pages/MyProperties";
import { ProperPage } from "../pages/Properties/index";
import { SigninPage } from "../pages/Signin";


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
        Element: <ProperPage />,
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
        Element: <SigninPage />,
        search: "?",
        hidden: true,
        private: false,
        param: true,
    },
    {
        id: 5,
        title: "Sign Up",
        path: "/signup",
        Element: <Generic />,
        search: "?",
        hidden: true,
        private: false,
        param: true,
    },
    {
        id: 6,
        title: "My Properties",
        path: "/profile/properties",
        Element: <MyPropertiesPage />,
        search: "?",
        hidden: true,
        private: false,
        param: true,
    },
    {
        id: 7,
        title: "Add House",
        path: "/profile/add",
        Element: <AddNewPage />,
        search: "?",
        hidden: true,
        private: false,
        param: true,
    },
    {
        id: 8,
        title: "Add House",
        path: "/profile/add/:id",
        Element: <AddNewPage />,
        search: "?",
        hidden: true,
        private: false,
        param: true,
    },
];

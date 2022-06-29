import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { Navbar } from "../components/Navbar";
import { navbar } from "../utilis/Navbar";
// import { Container } from "./styles";

const Root = () => {
  return (
    <Routes>

      {/* <Route path="/profile" element={<Navigate to={'/profile/properties'} />}  /> */}

      <Route element={<Navbar />}>
        {navbar.map(({ path, Element, id, param }) => {
          return param && <Route key={id} path={path} element={Element} />;
        })}
      </Route>

      <Route element={<Navbar />}>
        {/* <Route path="/properties/:id" element={<Navigate to={'/home'} />} /> */}

        {navbar.map(({ path, Element, id, hidden }) => {
          return !hidden && <Route key={id} path={path} element={Element} />;
        })} 
        <Route path="/" element={<Navigate to={'/home'} />} />
      </Route>

      <Route path="*" element={<div>Page Not Found...</div>} />
    </Routes> 
  );
};

export default Root
import React, { VFC, memo } from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "./components/Pages/Home";

// type Props = {
//   children: Element; 
// }

export const Router: VFC = memo((Props) => {
  return (
    <Routes>
      <Route path="/home" element={<Home />}>
      </Route>
    </Routes>
  )
});
import React, { VFC, memo } from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "./components/Pages/Home";
import { About } from "./components/Pages/About"

// type Props = {
//   children: Element; 
// }

export const Router: VFC = memo((Props) => {
  return (
    <Routes>
      <Route path="/" element={<Home />}>
      </Route>
      <Route path="/about" element={<About />}>
      </Route>
    </Routes>
  )
});
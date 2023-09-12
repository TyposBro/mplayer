import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Test } from "pages/";

const _pages = () => {
  return (
    <Routes>
      <Route path="/" element={<Test />} />
      <Route path="/test" element={<Test />} />
    </Routes>
  );
};

export const Router = () => {
  return (
    <BrowserRouter>
      <_pages />
    </BrowserRouter>
  );
};

export default Router;

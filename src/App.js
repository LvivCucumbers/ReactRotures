import Layout from "./components/layouts/Layout";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./components/Home";
import Blogs from "./components/Blogs";
import Contact from "./components/Contact";
import Topics from "./components/Topics";
import NoPage from "./components/NoPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} />

          <Route path="/topics/*" element={<Topics />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

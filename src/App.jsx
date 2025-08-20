import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";
import HomeContents from "./pages/home/HomeContents";
import CompanyHistory from "./pages/about/companyHistory/CompanyHistory";

function App() {
  return (
    <>
      <div className="App">
        <Router>
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<HomeContents />} />
              <Route path="/company-history" element={<CompanyHistory />} />
            </Route>
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;

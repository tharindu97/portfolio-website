import { BrowserRouter, Route, Routes } from "react-router-dom"
import Dashboard from "./pages/Dashboard"
import Home from "./pages/home/Home"
import Education from "./pages/education/education"
import Experience from "./pages/experience/Experience"
import NotFound from "./pages/error/NotFound"
import Contact from "./pages/contact/Contact"
import Portfolio from "./pages/portfolio/portfolio"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />}>
            <Route>
                <Route index element={<Home />} />
                <Route path="education" element={<Education />} />
                <Route path="experience" element={<Experience />} />
                <Route path="portfolio" element={<Portfolio />} />
                <Route path="contact" element={<Contact />} />
                <Route path="*" element={<NotFound />} />
            </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App

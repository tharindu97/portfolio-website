import { BrowserRouter, Route, Routes } from "react-router-dom"
import Dashboard from "./pages/Dashboard"
import HomePage from "./pages/home/Home"
import EducationPage from "./pages/education/education"
import ExperiencePage from "./pages/experience/Experience"
import PortfolioPage from "./pages/portfolio/portfolio"
import ContactPage from "./pages/contact/Contact"
import NotFoundPage from "./pages/error/NotFound"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />}>
            <Route>
                <Route index element={<HomePage />} />
                <Route path="education" element={<EducationPage />} />
                <Route path="experience" element={<ExperiencePage />} />
                <Route path="portfolio" element={<PortfolioPage />} />
                <Route path="contact" element={<ContactPage />} />
                <Route path="*" element={<NotFoundPage />} />
            </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import HoraServicesIntro from './Platform/Hora/styles/HeroPage';
import GitHubServicePage from './Platform/Hora/styles/GithubServicePage';
import OverviewPage from './Platform/Hora/styles/OverviewPage';
import TermsAndPolicy from './pages/TermsAndPolicy/TermsAndPolicy';
import AboutUs from './pages/AboutUs/AboutUs';
import Careers from './pages/Careers/Careers';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HoraServicesIntro />} />
          <Route path="github-services" element={<GitHubServicePage />} />
          <Route path="overview" element={<OverviewPage />} />
          <Route path="terms-and-policy" element={<TermsAndPolicy />} />
          <Route path="about" element={<AboutUs />} />
          <Route path="careers" element={<Careers />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

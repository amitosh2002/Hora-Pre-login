import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import HoraServicesIntro from './Platform/Hora/styles/HeroPage';
import GitHubServicePage from './Platform/Hora/styles/GithubServicePage';
import OverviewPage from './Platform/Hora/styles/OverviewPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HoraServicesIntro />} />
          <Route path="github-services" element={<GitHubServicePage />} />
          <Route path="overview" element={<OverviewPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

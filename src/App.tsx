import './App.css';
import SignUpPage from './page/SignUpPage';
import LandingPage from './page/LandingPage';
import LoginPage from './page/LoginPage';
import { Routes, Route } from 'react-router-dom';
import AccountSettingPage from './page/AccountSettingPage';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='login' element={<LoginPage />} />
        <Route path='sign' element={<SignUpPage />} />
        <Route path='account' element={<AccountSettingPage />} />
      </Routes>
    </>
  );
}

export default App;

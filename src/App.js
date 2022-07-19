import './App.css';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import MainPage from './components/MainPage/MainPage';
import Technologies from './components/Technologies/Technologies';
import SendProps from './components/SendProps/SendProps';


function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<MainPage title="Here I learning React"/>} />
          <Route path='technologies' element={<Technologies />} />
          <Route path='send_props' element={<SendProps />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import "../src/components/styles/global.css"
import SchoolUpLayout from './components/pages/schoolUpLayout/SchoolUpLayout';
import Dashboard from './components/pages/Dashboard/Dashboard';
import Revenue from './components/pages/revenue/Revenue';
import AllSubscriptions from './components/pages/Subscriptions/AllSubscriptions';
import ActiveSubscripition from './components/pages/Subscriptions/ActiveSubscripition';
import ExpiredSubscriptions from './components/pages/Subscriptions/ExpiredSubscriptions';
import Schools from './components/pages/schools/Schools';
import Reveiws from './components/pages/reveiws/Reveiws';
import Setting from './components/pages/setting/Setting';
import Blogs from './components/pages/blogs/Blogs';


function App() {
  return (
    <BrowserRouter>
    {/* <SchoolUpLayout/> */}
    <Routes>
      <Route path="/schoolup" element={<SchoolUpLayout/>}>
        <Route path="dashboard" element={<Dashboard/>}/>
        <Route path="revenue" element={<Revenue/>}/>
        <Route path="allSubscriptions" element={<AllSubscriptions/>}/>
        <Route path="activeSubsriptions" element={<ActiveSubscripition/>}/>
        <Route path="expiredSubscriptions" element={<ExpiredSubscriptions/>}/>
        <Route path="schools" element={<Schools/>}/>
        <Route path="reveiws" element={<Reveiws/>}/>
        <Route path="setting" element={<Setting/>}/>
        <Route path="blogs" element={<Blogs/>}/>
      </Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;

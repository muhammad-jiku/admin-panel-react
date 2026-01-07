import { useEffect, useState } from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import Sidebar from './Components/Sidebar';
import Topbar from './Components/Topbar';
import Analytics from './Pages/JS/Analytics';
import Feedback from './Pages/JS/Feedback';
import HomePage from './Pages/JS/HomePage';
import Mail from './Pages/JS/Mail';
import Messages from './Pages/JS/Messages';
import NewProduct from './Pages/JS/NewProduct';
import NewUser from './Pages/JS/NewUser';
import Product from './Pages/JS/Product';
import ProductList from './Pages/JS/ProductList';
import Reports from './Pages/JS/Reports';
import Sales from './Pages/JS/Sales';
import Staff from './Pages/JS/Staff';
import StaffAnalytics from './Pages/JS/StaffAnalytics';
import StaffDetail from './Pages/JS/StaffDetail';
import StaffReports from './Pages/JS/StaffReports';
import Transactions from './Pages/JS/Transactions';
import User from './Pages/JS/User';
import UserList from './Pages/JS/UserList';

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(window.innerWidth > 768);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setSidebarOpen(true);
      } else {
        setSidebarOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (window.innerWidth <= 768) {
      document.body.classList.toggle('sidebar-open', sidebarOpen);
    }
  }, [sidebarOpen]);

  return (
    <Router>
      <Topbar toggleSidebar={toggleSidebar} />
      <div className="container">
        <Sidebar isOpen={sidebarOpen} />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/sales" element={<Sales />} />
          <Route path="/users" element={<UserList />} />
          <Route path="/user/:userId" element={<User />} />
          <Route path="/newUser" element={<NewUser />} />
          <Route path="/products" element={<ProductList />} />
          <Route path="/product/:productId" element={<Product />} />
          <Route path="/newProduct" element={<NewProduct />} />
          <Route path="/transactions" element={<Transactions />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/mail" element={<Mail />} />
          <Route path="/feedback" element={<Feedback />} />
          <Route path="/messages" element={<Messages />} />
          <Route path="/staff" element={<Staff />} />
          <Route path="/staff/:staffId" element={<StaffDetail />} />
          <Route path="/staff-analytics" element={<StaffAnalytics />} />
          <Route path="/staff-reports" element={<StaffReports />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

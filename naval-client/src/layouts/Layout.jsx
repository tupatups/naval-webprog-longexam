import { Outlet } from 'react-router-dom';
import NavBar from '../components/Navbar';
import Footer from '../components/Footer';

const Layout = () => {
  return (
    <div className="min-h-screen bg-[#f4f8f1] text-[#173a2b]">
      <NavBar />
      <main className="pb-16 pt-20">
        <Outlet />
      </main>
      <Footer/>
    </div>
  );
};

export default Layout;

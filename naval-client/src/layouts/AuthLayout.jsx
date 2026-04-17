import { Outlet } from "react-router-dom";
import nulogo from "../assets/img/nubdexchange_logo.png";

const AuthLayout = () => {
  return (
    <section className="min-h-screen bg-[#f4f8f1] text-[#173a2b]">
      <div className="grid min-h-screen w-full lg:grid-cols-[1fr_0.95fr]">
        <div className="flex items-center justify-center border-b-2 border-[#c8a327] bg-[#efe5bd] p-8 sm:p-10 lg:border-b-0 lg:border-r-2 lg:border-[#c8a327] lg:p-16">
          <img src={nulogo} alt="NU Logo" className="h-full w-full object-contain" />
        </div>

        <main className="flex items-center bg-[#f7f4de] px-6 py-10 sm:px-10 lg:px-16">
          <div className="mx-auto w-full max-w-md">
            <Outlet />
          </div>
        </main>
      </div>
    </section>
  );
};

export default AuthLayout;

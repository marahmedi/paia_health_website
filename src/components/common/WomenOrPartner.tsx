import React from "react";
import { Activity, Handshake } from "lucide-react";
import { Link } from "react-router-dom";

const WomenOrPartner = () => {
  return (
    <div>
      <section className="w-full flex flex-col md:flex-row min-h-[550px]">
        <div className="w-full md:w-1/2 bg-[#ebeae6] relative overflow-hidden group flex flex-col justify-center items-center text-center p-14 border-b md:border-b-0 md:border-r border-white/50">
          <div
            className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1515023115689-589c33041697?q=80&amp;w=2940&amp;auto=format&amp;fit=crop')] bg-cover bg-center opacity-0 group-hover:opacity-10 transition-opacity duration-700 mix-blend-darken"
            data-alt="Soft aesthetic background for women's section"
          ></div>
          <div className="relative z-10 max-w-sm">
            <Activity className="text-primary mb-6" size={48} />
            <h3 className="text-3xl font-bold text-text-main mb-5">
              For Women
            </h3>
            <p className="text-text-muted mb-10 leading-relaxed text-lg font-light">
              Gain clarity on your body's language. Feel validated, understood,
              and in control of your wellbeing.
            </p>
            <Link to="/women">
            <button className="h-12 px-8 rounded-full border border-primary text-primary hover:bg-primary hover:text-white transition-all font-semibold">
              Start Your Journey
            </button></Link>
          </div>
        </div>
        <div className="w-full md:w-1/2 bg-[#f2f1ed] relative overflow-hidden group flex flex-col justify-center items-center text-center p-14">
          <div
            className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1636210620808-596564e9a081?q=80&amp;w=2940&amp;auto=format&amp;fit=crop')] bg-cover bg-center opacity-0 group-hover:opacity-10 transition-opacity duration-700 mix-blend-darken"
            data-alt="Soft aesthetic background for partners section"
          ></div>
          <div className="relative z-10 max-w-sm">
            <Handshake className="text-text-muted mb-6" size={48} />
            <h3 className="text-3xl font-bold text-text-main mb-5">
              For Partners
            </h3>
            <p className="text-text-muted mb-10 leading-relaxed text-lg font-light">
              Understand the hormonal context behind the moods. Learn how to
              support her best, right when she needs it.
            </p>
            <button className="h-12 px-8 rounded-full border border-gray-400 text-gray-600 hover:border-primary hover:text-primary transition-all font-semibold">
              Learn How to Support
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WomenOrPartner;

import React from "react";
import logo from "../assets/logos/logo-light.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#212121] pt-20 pb-10 px-6 text-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-10 mb-20">
          <div className="col-span-2 lg:col-span-2">
            <div className="flex items-center gap-2 text-primary mb-6">
              {/* Logo */}
              <div className="flex items-center gap-2">
                <img src={logo} alt="logo" className="h-8 w-8" />

                <span className="text-lg font-semibold text-white anonymous-pro-bold">
                  Paia Health
                </span>
              </div>
            </div>
            <p className="text-text-subtle text-sm max-w-xs mb-8 leading-relaxed">
              A wellness intelligence companion designed to help women
              understand their bodies and minds through pattern recognition and
              gentle support.
            </p>
            <div className="flex gap-4">
              <a
                className="w-10 h-10 rounded-full bg-background-light border border-primary/5 flex items-center justify-center text-text-subtle hover:text-primary hover:bg-white hover:shadow-sm transition-all"
                href="#"
              >
                <span className="text-xs font-bold">Li</span>
              </a>
              <a
                className="w-10 h-10 rounded-full bg-background-light border border-primary/5 flex items-center justify-center text-text-subtle hover:text-primary hover:bg-white hover:shadow-sm transition-all"
                href="#"
              >
                <span className="text-xs font-bold">X</span>
              </a>
              <a
                className="w-10 h-10 rounded-full bg-background-light border border-primary/5 flex items-center justify-center text-text-subtle hover:text-primary hover:bg-white hover:shadow-sm transition-all"
                href="#"
              >
                <span className="text-xs font-bold">Ig</span>
              </a>
            </div>
          </div>
          <div className="flex flex-col gap-5">
            <h4 className="text-primary font-bold text-sm uppercase tracking-wider">
              Company
            </h4>
            <a
              className="text-sm text-text-subtle hover:text-primary transition-colors"
              href="#"
            >
              About Us
            </a>
           
            
          </div>
          {/* <div className="flex flex-col gap-5">
            <h4 className="text-primary font-bold text-sm uppercase tracking-wider">
              Product
            </h4>
            <a
              className="text-sm text-text-subtle hover:text-primary transition-colors"
              href="#"
            >
              For Individuals
            </a>
            <a
              className="text-sm text-text-subtle hover:text-primary transition-colors"
              href="#"
            >
              For Partners
            </a>
            <a
              className="text-sm text-text-subtle hover:text-primary transition-colors"
              href="#"
            >
              Science
            </a>
          </div> */}
          <div className="flex flex-col gap-5">
            <h4 className="text-primary font-bold text-sm uppercase tracking-wider">
              Legal
            </h4>
            <Link
              className="text-sm text-text-subtle hover:text-primary transition-colors"
              to="/legal/privacy"
            >
              Privacy Policy
            </Link>
            <Link
              className="text-sm text-text-subtle hover:text-primary transition-colors"
              to="/legal/app-data"
            >
              Delete App data
            </Link>
            <Link
              className="text-sm text-text-subtle hover:text-primary transition-colors"
              to="/legal/account-data"
            >
              Delete Account data
            </Link>
          </div>
        </div>
        <div className="border-t border-primary/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-text-subtle">
            © 2024 Paia Health Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

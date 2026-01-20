import React, { useState } from "react";
import axios from "axios";
import type { AxiosError } from "axios";
import Navbar from "../../components/navbars/HomeNavbar";
import Footer from "../../components/Footer";

const AppDataPage: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [isError, setIsError] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setMessage("");
    setIsError(false);
    setIsSubmitting(true);

    try {
      await axios.post(
        "https://paia-app-backend.azurewebsites.net/api/auth/delete-data",
        { email, password }
      );

      setMessage("Your PAIA app data has been successfully deleted.");
      setEmail("");
      setPassword("");
    } catch (err) {
      const error = err as AxiosError<{ message?: string }>;
      setIsError(true);
      setMessage(
        error.response?.data?.message ||
          "An error occurred while deleting your data."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-background pt-24 sm:pt-42">
        <main className="mx-auto max-w-3xl px-4 pb-20 sm:px-6">
          <div className="rounded-3xl bg-white/90 p-6 shadow-custom sm:p-10 md:p-14">
            {/* Header */}
            <header className="mb-10 text-center">
              <h1 className="mb-3 text-2xl font-semibold text-[#72382E] sm:text-3xl">
                Delete PAIA App Data
              </h1>
              <p className="mx-auto max-w-2xl text-sm leading-relaxed text-secondary/80 sm:text-base">
                Enter your email and password below to delete all stored data
                associated with your PAIA app usage. Your account will remain
                active.
              </p>
            </header>

            {/* Form */}
            <form
              onSubmit={handleSubmit}
              className="mx-auto max-w-md space-y-6"
            >
              <div>
                <label className="mb-2 block text-sm font-medium text-secondary">
                  Email
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  placeholder="you@example.com"
                  className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-secondary">
                  Password
                </label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  placeholder="••••••••"
                  className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="flex w-full items-center justify-center rounded-full bg-[#72382E] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#5f2e27] disabled:opacity-60"
              >
                {isSubmitting ? "Deleting…" : "Delete My Data"}
              </button>
            </form>

            {/* Feedback */}
            {message && (
              <div
                className={`mt-8 rounded-xl p-4 text-center text-sm ${
                  isError
                    ? "bg-red-100 text-red-700"
                    : "bg-green-100 text-green-700"
                }`}
              >
                {message}
              </div>
            )}
          </div>
        </main>
      </div>

      <Footer />
    </>
  );
};

export default AppDataPage;

import React, { useState } from "react";
import axios from "axios";
import type { AxiosError } from "axios";

const AccountDataPage: React.FC = () => {
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
        "https://paia-app-backend.azurewebsites.net/api/auth/delete-account",
        { email, password }
      );

      setMessage("Your PAIA app account has been successfully deleted.");
      setEmail("");
      setPassword("");
    } catch (err) {
      const error = err as AxiosError<{ message?: string }>;
      setIsError(true);
      setMessage(
        error.response?.data?.message ||
          "An error occurred while deleting your account."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background pt-28 md:pt-32">
      <main className="mx-auto max-w-4xl px-4 pb-16">
        <div className="rounded-[34px] bg-offWhite p-6 shadow-custom md:p-12">
          {/* Title */}
          <header className="mb-10 text-center">
            <h1 className="mb-4 text-[24px] font-bold text-[#72382E] md:text-[32px]">
              Delete PAIA App Account
            </h1>
            <p className="mx-auto max-w-2xl text-[14px] text-secondary/80 md:text-[16px]">
              If you wish to permanently delete your PAIA app account, please
              enter your email and password below. This action cannot be undone
              and will permanently remove your account and associated data.
            </p>
          </header>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="mx-auto max-w-md space-y-6"
          >
            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-sm font-medium text-secondary"
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="Enter your email"
                className="w-full rounded-lg border border-gray-300 px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="mb-2 block text-sm font-medium text-secondary"
              >
                Password
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                placeholder="Enter your password"
                className="w-full rounded-lg border border-gray-300 px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="flex w-full items-center justify-center rounded-full bg-[#72382E] px-6 py-3 text-sm font-semibold text-white transition hover:bg-primary/90 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {isSubmitting ? "Deleting…" : "Delete My Account"}
            </button>
          </form>

          {/* Feedback */}
          {message && (
            <div
              className={`mt-8 rounded-lg p-4 text-center text-sm ${
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
  );
};

export default AccountDataPage;

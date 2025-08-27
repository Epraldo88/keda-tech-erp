"use client";

import { useState, useEffect } from "react";
import { useAuthModalStore } from "../../store/auth-modal";
import { useTranslation } from "react-i18next";

const AuthModal = () => {
  const { t } = useTranslation();
  const { isOpen, mode, closeModal, switchMode } = useAuthModalStore();
  const [show, setShow] = useState(false);

  // Handle mount/unmount animation
  useEffect(() => {
    if (isOpen) {
      setShow(true);
    }
  }, [isOpen]);

  const handleClose = () => {
    setShow(false);
    setTimeout(() => {
      closeModal();
    }, 700); // match duration-300
  };

  if (!isOpen && !show) return null;

  return (
    <div
      className={`fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/50 
        transition-opacity duration-300 ${
          show && isOpen ? "opacity-100" : "opacity-0"
        }`}
      onClick={handleClose}
    >
      {/* Modal container */}
      <div
        className={`bg-white rounded-t-2xl sm:rounded-2xl shadow-lg w-full sm:w-[90%] sm:max-w-md p-6 sm:p-8 relative
          transform transition-all duration-300 ease-out
          ${
            show && isOpen
              ? "translate-y-0 opacity-100 scale-100"
              : "translate-y-full sm:translate-y-4 opacity-0 scale-95"
          }`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={handleClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 text-xl leading-none"
        >
          ✕
        </button>

        {/* Title */}
        <h2 className="text-2xl font-bold text-center mb-6">
          {mode === "login"
            ? t("authModal.title.login")
            : t("authModal.title.register")}
        </h2>

        {/* Form */}
        <form className="flex flex-col gap-4">
          {mode === "register" && (
            <input
              type="text"
              placeholder={t("authModal.form.fullName")}
              className="w-full rounded-lg border px-4 py-2 focus:ring focus:ring-blue-200 focus:outline-none"
            />
          )}
          <input
            type="email"
            placeholder={t("authModal.form.email")}
            className="w-full rounded-lg border px-4 py-2 focus:ring focus:ring-blue-200 focus:outline-none"
          />
          <input
            type="password"
            placeholder={t("authModal.form.password")}
            className="w-full rounded-lg border px-4 py-2 focus:ring focus:ring-blue-200 focus:outline-none"
          />
          {mode === "register" && (
            <input
              type="password"
              placeholder={t("authModal.form.confirmPassword")}
              className="w-full rounded-lg border px-4 py-2 focus:ring focus:ring-blue-200 focus:outline-none"
            />
          )}

          <button
            type="submit"
            className="w-full rounded-lg bg-blue-600 text-white py-2 font-semibold hover:bg-blue-700 transition-colors duration-200 mt-2"
          >
            {mode === "login"
              ? t("authModal.form.submit.login")
              : t("authModal.form.submit.register")}
          </button>
        </form>

        {/* Switch mode */}
        <p className="text-center text-sm text-gray-600 mt-4">
          {mode === "login" ? (
            <>
              {t("authModal.switchMode.login")}{" "}
              <button
                type="button"
                onClick={() => switchMode("register")}
                className="text-blue-600 hover:underline transition-colors duration-200"
              >
                {t("authModal.form.submit.register")}
              </button>
            </>
          ) : (
            <>
              {t("authModal.form.submit.register")}{" "}
              <button
                type="button"
                onClick={() => switchMode("login")}
                className="text-blue-600 hover:underline transition-colors duration-200"
              >
                {t("authModal.form.submit.login")}
              </button>
            </>
          )}
        </p>
      </div>
    </div>
  );
};

export default AuthModal;

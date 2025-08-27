import { useAuthModalStore } from "../../../store/auth-modal";

interface LoginButtonProps {
  isMobile?: boolean;
}

const LoginButton = ({ isMobile = false }: LoginButtonProps) => {
  const { openModal } = useAuthModalStore();

  return (
    <div>
      {!isMobile ? (
        <button
          onClick={() => openModal("login")}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          Login
        </button>
      ) : (
        <button
          onClick={() => openModal("login")}
          className="block w-full text-left px-3 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Login
        </button>
      )}
    </div>
  );
};

export default LoginButton;

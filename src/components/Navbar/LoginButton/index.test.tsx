// src/components/navbar/__tests__/LoginButton.test.tsx
import { render, screen, fireEvent } from "@testing-library/react";
import LoginButton from "./index";
import { describe, it, expect, vi, beforeEach } from "vitest";

// Mock the Zustand store
vi.mock("../../../store/auth-modal", () => ({
  useAuthModalStore: () => ({
    openModal: mockOpenModal,
  }),
}));

const mockOpenModal = vi.fn();

describe("LoginButton", () => {
  beforeEach(() => {
    mockOpenModal.mockClear();
  });

  it("renders login button (desktop version)", () => {
    render(<LoginButton />);
    const button = screen.getByRole("button", { name: /login/i });
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass("px-4", "py-2", "bg-blue-600");
  });

  it("renders login button (mobile version)", () => {
    render(<LoginButton isMobile={true} />);
    const button = screen.getByRole("button", { name: /login/i });
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass("block", "w-full", "text-left");
  });

  it("calls openModal with 'login' when clicked", () => {
    render(<LoginButton />);
    const button = screen.getByRole("button", { name: /login/i });
    fireEvent.click(button);
    expect(mockOpenModal).toHaveBeenCalledWith("login");
  });
});

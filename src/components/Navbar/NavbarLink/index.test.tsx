// src/components/navbar/__tests__/NavbarLink.test.tsx
import { render, screen, fireEvent } from "@testing-library/react";
import NavbarLink from "./index";
import type { NavbarLinkProps } from "./index";

import { describe, it, expect, vi } from "vitest";

const renderLink = (props?: Partial<NavbarLinkProps>) => {
  const defaultProps: NavbarLinkProps = {
    section: "about",
    activeSection: "",
    scrollToSection: vi.fn(),
    isMobile: false,
  };
  return render(<NavbarLink {...defaultProps} {...props} />);
};

describe("NavbarLink", () => {
  it("renders section text in uppercase", () => {
    renderLink({ section: "home" });
    expect(screen.getByRole("button", { name: "HOME" })).toBeInTheDocument();
  });

  it("calls scrollToSection when clicked", () => {
    const mockScroll = vi.fn();
    renderLink({ scrollToSection: mockScroll });
    fireEvent.click(screen.getByRole("button"));
    expect(mockScroll).toHaveBeenCalledWith("about");
  });

  it("applies active class when activeSection matches", () => {
    renderLink({ activeSection: "about" });
    expect(screen.getByRole("button")).toHaveClass("text-blue-600");
  });

  it("applies inactive class when activeSection does not match", () => {
    renderLink({ activeSection: "home" });
    expect(screen.getByRole("button")).toHaveClass("text-gray-700");
  });

  it("applies mobile classes when isMobile is true", () => {
    renderLink({ isMobile: true });
    expect(screen.getByRole("button")).toHaveClass(
      "block",
      "w-full",
      "text-left"
    );
  });

  it("applies desktop classes when isMobile is false", () => {
    renderLink({ isMobile: false });
    expect(screen.getByRole("button")).toHaveClass("transition-colors");
  });
});

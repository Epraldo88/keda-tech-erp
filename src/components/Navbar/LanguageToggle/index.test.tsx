import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import LanguageToggle from "./index";

const mockChangeLanguage = vi.fn();

vi.mock("react-i18next", () => ({
  useTranslation: () => ({
    i18n: {
      language: "en",
      changeLanguage: mockChangeLanguage,
    },
  }),
}));

describe("LanguageToggle", () => {
  it("renders the correct initial language", () => {
    render(<LanguageToggle />);
    expect(screen.getByText("EN")).toBeInTheDocument();
  });

  it("toggles language on click", () => {
    render(<LanguageToggle />);
    const checkbox = screen.getByRole("checkbox");

    fireEvent.click(checkbox);

    expect(mockChangeLanguage).toHaveBeenCalledWith("id");
  });

  it("updates label text after toggle", () => {
    vi.mocked(mockChangeLanguage).mockImplementation(() => {});
    render(<LanguageToggle />);
    const checkbox = screen.getByRole("checkbox");
    fireEvent.click(checkbox);
  });
});

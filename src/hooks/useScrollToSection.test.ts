import { renderHook, act } from "@testing-library/react";
import { vi, type Mock } from "vitest";
import { useNavigationStore } from "../store/navigation.store";
import { useScrollToSection } from "./useScrollToSection";

// 1. Mock the whole module
vi.mock("../store/navigation.store", () => {
  return {
    useNavigationStore: vi.fn(),
  };
});

describe("useScrollToSection", () => {
  const mockCloseMenu = vi.fn();

  beforeEach(() => {
    // Reset mocks before each test
    (useNavigationStore as unknown as Mock).mockReturnValue({
      closeMenu: mockCloseMenu,
    });
    document.body.innerHTML = "";
    vi.clearAllMocks();
  });

  it("scrolls to section and calls closeMenu", () => {
    // Arrange
    const section = document.createElement("div");
    section.id = "about";
    document.body.appendChild(section);
    section.scrollIntoView = vi.fn();

    // Act
    const { result } = renderHook(() => useScrollToSection());
    act(() => {
      result.current.scrollToSection("about");
    });

    // Assert
    expect(section.scrollIntoView).toHaveBeenCalledWith({ behavior: "smooth" });
    expect(mockCloseMenu).toHaveBeenCalled();
  });
});

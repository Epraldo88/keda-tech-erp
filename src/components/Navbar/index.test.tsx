import { render, screen, fireEvent } from "@testing-library/react";
import Navbar from "./index";
import { useNavigationStore } from "../../store/navigation.store";
import { vi } from "vitest";

// Mock store
vi.mock("../../store/navigation.store", () => ({
  useNavigationStore: vi.fn(),
}));

describe("Navbar", () => {
  const mockedUseNavigationStore = vi.mocked(useNavigationStore);

  beforeEach(() => {
    mockedUseNavigationStore.mockReturnValue({
      isMenuOpen: false,
      toggleMenu: vi.fn(),
    });

    document.body.innerHTML = "";

    // mock section for scroll detection
    const mockSection = document.createElement("div");
    mockSection.id = "home";
    mockSection.getBoundingClientRect = vi.fn(
      () =>
        ({
          top: 100,
          bottom: 300,
          left: 0,
          right: 0,
          width: 0,
          height: 0,
          x: 0,
          y: 0,
          toJSON: () => "",
        } satisfies DOMRect)
    );
    document.body.appendChild(mockSection);

    vi.clearAllMocks();
  });

  it("renders logo", () => {
    render(<Navbar />);
    expect(screen.getByText("DekaTech")).toBeInTheDocument();
  });

  it("renders desktop navigation links", () => {
    render(<Navbar />);
    expect(screen.getByText(/about/i)).toBeInTheDocument();
    expect(screen.getByText(/pricing/i)).toBeInTheDocument();
  });

  it("toggles mobile menu when button is clicked", () => {
    const toggleMenuMock = vi.fn();
    mockedUseNavigationStore.mockReturnValue({
      isMenuOpen: false,
      toggleMenu: toggleMenuMock,
    });

    render(<Navbar />);
    fireEvent.click(screen.getByLabelText("Toggle menu"));
    expect(toggleMenuMock).toHaveBeenCalled();
  });
});

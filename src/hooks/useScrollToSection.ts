import { useNavigationStore } from "../store/navigation.store";

export const useScrollToSection = () => {
  const { closeMenu } = useNavigationStore();
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
    closeMenu();
  };

  return { scrollToSection };
};

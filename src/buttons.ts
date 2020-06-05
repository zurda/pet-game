import { ICONS } from "./constants";

const toggleHighlighted = (icon: number, show: boolean) => {
  const highlighted = document.querySelector(
    `.${ICONS[icon]}-icon`
  ) as HTMLElement;
  highlighted.classList.toggle("highlighted", show);
};

export default function initButtons(
  handleUserAction: (_: string) => undefined
) {
  let selectedIcon = 0;
  function buttonClick({ target }: any) {
    if (target.classList.contains("left-btn")) {
      toggleHighlighted(selectedIcon, false);
      selectedIcon = (2 + selectedIcon) % ICONS.length;
      toggleHighlighted(selectedIcon, true);
    } else if (target.classList.contains("right-btn")) {
      toggleHighlighted(selectedIcon, false);
      selectedIcon = (1 + selectedIcon) % ICONS.length;
      toggleHighlighted(selectedIcon, true);
    } else {
      handleUserAction(ICONS[selectedIcon]);
    }
  }

  const buttons = document.querySelector(".buttons") as HTMLElement;
  buttons.addEventListener("click", buttonClick);
}

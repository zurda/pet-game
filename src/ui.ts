export const modFox = (state: string) => {
  const fox = document.querySelector(".fox") as HTMLElement;
  fox.className = `fox fox-${state}`;
};
export const modScene = (state: string) => {
  const game = document.querySelector(".game") as HTMLElement;
  game.className = `game ${state}`;
};
export const togglePoopBag = (show: boolean) => {
  const poopBag = document.querySelector(".poop-bag") as HTMLElement;
  poopBag.classList.toggle("hidden", !show);
};
export const writeModal = (text = "") => {
  const modal = document.querySelector(".modal") as HTMLElement;
  modal.innerHTML = `<div class="modal-inner">${text}</div>`;
};

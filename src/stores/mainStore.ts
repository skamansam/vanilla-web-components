import lunchMenu from "../assets/lunchMenu.json";
import dinnerMenu from "../assets/dinnerMenu.json";


const mainStore = {
  menu: lunchMenu,
  setMenu(menuName: string) {
    this.menu = menuName === "lunch" ? lunchMenu : dinnerMenu;
  }
}

export default mainStore;
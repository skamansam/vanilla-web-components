
export type MenuItem = {
  id?: number;
  name: string;
  description?: string;
  ingredients?: string;
  price: number;
};

const cartStore = {
  items: [] as MenuItem[],
  addItem(item: MenuItem) {
    this.items.push(item);
  },
  removeItem(item: MenuItem) {
    this.items = this.items.filter(i => i !== item);
  },
  get count() {
    return this.items.length;
  },
};

export default cartStore;
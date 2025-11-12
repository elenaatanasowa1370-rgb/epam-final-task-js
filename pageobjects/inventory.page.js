import BasePage from './base.page.js';

class InventoryPage extends BasePage {
    get title() { return $('.title'); }
}

export default new InventoryPage();

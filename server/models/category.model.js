const categories = [];

module.exports = class Category {
  constructor(category) {
    this.categoryName = category.categoryName;
    this.id = categories.length + 1;
  }
  save() {
    categories.push(this);
  }
  static getAllCategorys() {
    return categories;
  }
};

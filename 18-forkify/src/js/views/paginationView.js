import View from "./view.js";

class PaginationView extends View {
  _parentEl = document.querySelector(".pagination");

  _generateMarkup() {
    console.log(this._data);
    const numPages = Math.ceil(
      this._data.results.length / this._data.resultsPerPage
    );
    console.log(numPages);

    // Page 1, and there are other pages
    if (this._data.page === 1 && numPages > 1) {
      return "page 1 with other pages";
    }
    // Last page
    if (this._data.page === numPages && numPages > 1) {
      return "last page";
    }
    // Other page
    if (this._data.page < numPages) {
      return "more pages";
    }
    // Page 1, and there are no other pages
    return "only one page";
  }
}

export default new PaginationView();

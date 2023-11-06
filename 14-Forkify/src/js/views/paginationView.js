import icons from 'url:../../img/icons.svg';
import View from './View';

class PaginationView extends View {
  _parentEl = document.querySelector('.pagination');

  addHandlerClick(handler) {
    this._parentEl.addEventListener('click', function (e) {
      const btn = e.target.closest('.btn--inline');
      if (!btn) return;

      const goto = +btn.dataset.goto;
      return handler(goto);
    });
  }

  _generateMarkup() {
    const currentPage = this._data.page;
    const numPages = Math.ceil(this._data.results.length / this._data.resultsPerPage);

    // 1. Page 1 and there are other results
    if (currentPage === 1 && numPages > 1) {
      return this._generateMarkupNext(currentPage + 1);
      //   return `<button data-goto="${currentPage + 1}" class="btn--inline pagination__btn--next">
      //             <span>Page ${currentPage + 1}</span>
      //             <svg class="search__icon">
      //                 <use href="${icons}#icon-arrow-right"></use>
      //             </svg>
      //           </button>`;
    }

    // 2. Last page
    if (currentPage === numPages && numPages > 1) {
      return this._generateMarkupPrev(currentPage - 1);
      //   return `<button data-goto="${currentPage - 1}" class="btn--inline pagination__btn--prev">
      //             <svg class="search__icon">
      //                 <use href="${icons}#icon-arrow-left"></use>
      //             </svg>
      //             <span>Page ${currentPage - 1}</span>
      //           </button>`;
    }

    // 3. Other page
    if (currentPage < numPages) {
      return this._generateMarkupNext(currentPage + 1) + this._generateMarkupPrev(currentPage - 1);
      //   return `<button data-goto="${currentPage - 1}" class="btn--inline pagination__btn--prev">
      //             <svg class="search__icon">
      //                 <use href="${icons}#icon-arrow-left"></use>
      //             </svg>
      //             <span>Page ${currentPage - 1}</span>
      //           </button>
      //           <button data-goto="${currentPage + 1}" class="btn--inline pagination__btn--next">
      //             <span>Page ${currentPage + 1}</span>
      //             <svg class="search__icon">
      //                 <use href="${icons}#icon-arrow-right"></use>
      //             </svg>
      //           </button>`;
    }

    // 1. Page 1 and there are NO other results
    return '';
  }

  _generateMarkupPrev(page) {
    return `<button data-goto="${page}" class="btn--inline pagination__btn--prev">
            <svg class="search__icon">
                <use href="${icons}#icon-arrow-left"></use>
            </svg>
            <span>Page ${page}</span>
        </button>`;
  }

  _generateMarkupNext(page) {
    return `<button data-goto="${page}" class="btn--inline pagination__btn--next">
                <span>Page ${page}</span>
                <svg class="search__icon">
                    <use href="${icons}#icon-arrow-right"></use>
                </svg>
            </button>`;
  }
}

export default new PaginationView();

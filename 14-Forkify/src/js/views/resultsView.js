import icons from 'url:../../img/icons.svg';
import View from './View';

class ResultsView extends View {
  _parentEl = document.querySelector('.results');
  _message = '';
  _errorMessage = 'There is no recipe with this title. Please try another one.';

  _generateMarkup() {
    const id = window.location.hash.slice(1);
    return this._data
      .map(el => {
        return `<li class="preview">
                    <a class="preview__link ${id === el.id ? 'preview__link--active' : ''}" href="#${el.id}">
                    <figure class="preview__fig">
                        <img src="${el.image}" alt="${el.title}" />
                    </figure>
                    <div class="preview__data">
                        <h4 class="preview__title">${el.title} ...</h4>
                        <p class="preview__publisher">${el.publisher}</p>
                    </div>
                    </a>
                </li>`;
      })
      .join('');
  }
}

export default new ResultsView();

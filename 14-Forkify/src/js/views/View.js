import icons from 'url:../../img/icons.svg';

export default class View {
  _data;

  render(data, render = true) {
    if (!data || (Array.isArray(data) && data.length === 0)) return this.renderError();
    this._data = data;

    if (!render) return this._generateMarkup();

    this._clear();
    this._parentEl.insertAdjacentHTML('afterbegin', this._generateMarkup());
  }

  update(data) {
    this._data = data;
    const newMarkup = this._generateMarkup();
    const newDom = document.createRange().createContextualFragment(newMarkup);
    const newElements = [...newDom.querySelectorAll('*')];
    const curElements = [...this._parentEl.querySelectorAll('*')];

    newElements.forEach((newEl, ind) => {
      // Updates Text
      if (!newEl.isEqualNode(curElements[ind]) && newEl.firstChild?.nodeValue.trim() !== '') {
        curElements[ind].textContent = newEl.textContent;
      }
      // Updates Text
      if (!newEl.isEqualNode(curElements[ind])) {
        // curElements[ind].attributes
        [...newEl.attributes].forEach(attr => curElements[ind].setAttribute(attr.name, attr.value));
      }
    });
    this._clear();
    this._parentEl.insertAdjacentHTML('afterbegin', this._generateMarkup());
  }

  renderSpinner() {
    const markup = `<div class="spinner">
                        <svg>
                          <use href="${icons}#icon-loader"></use>
                        </svg>
                      </div>`;
    this._clear();
    this._parentEl.insertAdjacentHTML('afterbegin', markup);
  }

  renderMessage(message = this._message) {
    const markup = `<div class="message">
                          <div>
                              <svg>
                              <use href="${icons}#icon-smile"></use>
                              </svg>
                          </div>
                          <p>${message}</p>
                      </div>`;
    this._clear();
    this._parentEl.insertAdjacentHTML('afterbegin', markup);
  }

  renderError(message = this._errorMessage) {
    const markup = `<div class="error">
                          <div>
                              <svg>
                              <use href="${icons}#icon-alert-triangle"></use>
                              </svg>
                          </div>
                          <p>${message}</p>
                      </div>`;
    this._clear();
    this._parentEl.insertAdjacentHTML('afterbegin', markup);
  }

  _clear() {
    this._parentEl.innerHTML = '';
  }
}

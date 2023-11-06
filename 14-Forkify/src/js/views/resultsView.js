import icons from 'url:../../img/icons.svg';
import View from './View';
import previewView from './previewView.js';

class ResultsView extends View {
  _parentEl = document.querySelector('.results');
  _message = '';
  _errorMessage = 'There is no recipe with this title. Please try another one.';

  _generateMarkup() {
    return this._data.map(bookmark => previewView.render(bookmark, false)).join('');
  }
}

export default new ResultsView();

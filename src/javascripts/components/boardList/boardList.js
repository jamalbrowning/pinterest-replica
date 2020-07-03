import boardData from '../../helpers/data/boardData';
import utils from '../../helpers/utils';
import boardComponent from './board';
import pinList from '../pinList/pinList';

const removeBoardEvent = (e) => {
  console.error(e.target.closest('.card').id);
  const boardId = e.target.closest('.card').id;
  boardData.deleteBoard(boardId)
    .then((response) => {
      console.error(response);

      buildBoards(); //eslint-disable-line
    })
    .catch((err) => console.error('could not delete board', err));
};

const buildBoards = () => {
  boardData.getBoards()
    .then((boards) => {
      let domString = `
      <h2 class="text-center card">Boards</h2>
      <div class="d-flex flex-wrap">
      `;
      boards.forEach((board) => {
        domString += boardComponent.boardmaker(board);
      });
      domString += '</div>';

      utils.printToDom('#boards', domString);

      $('body').on('click', pinList.buildPins);
      $('#board-delete').on('click', removeBoardEvent);
    })
    .catch((err) => console.error('oh noooo an error', err));
};

export default { buildBoards };

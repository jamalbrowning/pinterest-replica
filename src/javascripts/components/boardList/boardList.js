import boardData from '../../helpers/data/boardData';
import utils from '../../helpers/utils';
import boardComponent from './board';
import pinList from '../pinList/pinList';

const removeBoardEvent = (e) => {
  const boardId = e.target.closest('.card').id;
  boardData.deleteBoard(boardId)
    .then((response) => {
      console.error(response);

      buildBoards(); //eslint-disable-line
    })
    .catch((err) => console.error('could not do crap', err));
};
// const reprintBoardsEvent = () => {
//   console.error('its kinda working');
//   buildBoards();//eslint-disable-line
// };

const buildBoards = () => {
  boardData.getBoards()
    .then((boards) => {
      let domString = `
      <h1 class="text-center">Boards</h1>
      <div class="d-flex flex-wrap">
      `;
      boards.forEach((board) => {
        domString += boardComponent.boardmaker(board);
      });
      domString += '</div>';

      utils.printToDom('#boards', domString);

      $('body').on('click', pinList.buildPins);
      $('body').on('click', '#board-delete', removeBoardEvent);
      $('.body').on('click', '#pin-delete', pinList.removePinEvent);
    })
    .catch((err) => console.error('oh noooo an error', err));
};

export default { buildBoards };

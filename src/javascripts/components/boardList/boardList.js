import boardData from '../../helpers/data/boardData';
import utils from '../../helpers/utils';
import boardComponent from './board';
import pinList from '../pinList/pinList';
import newBoard from '../newBoard/newBoard';
import newPin from '../newPin/newPin';

const removeBoardEvent = (e) => {
  e.preventDefault();
  const boardId = e.target.closest('.card').id;
  boardData.deleteBoard(boardId)
    .then((response) => {
      console.error(response);

      buildBoards(); //eslint-disable-line
    })
    .catch((err) => console.error('could not do crap', err));
};

const addBoardEvent = (e) => {
  e.preventDefault();
  const brandNewBoard = {
    category: $('#board-id').val().charAt(0).toUpperCase() + $('#board-id').val().slice(1),
  };
  boardData.addBoard(brandNewBoard)
    .then(() => {
      // eslint-disable-next-line no-use-before-define
      buildBoards();
      utils.printToDom('#new-board', '');
    })
    .catch((err) => console.error('cant add board', err));
  console.warn(brandNewBoard);
};

const buildBoards = () => {
  boardData.getBoards()
    .then((boards) => {
      let domString = `
      <h1 class="text-center">Boards</h1>
      <button class="btn btn-dark" id="show-add-board">Create</button>
      <div class="d-flex flex-wrap justify-content-center">
      `;
      boards.forEach((board) => {
        domString += boardComponent.boardmaker(board);
      });
      domString += '</div>';

      utils.printToDom('#boards', domString);

      $('body').on('click', pinList.buildPins);

      $('body').on('click', '#board-delete', removeBoardEvent);
      $('body').on('click', '#show-add-board', newBoard.showForm);
      $('body').on('click', '#show-add-board', newPin.showForm);
      $('body').on('click', '#board-creator', addBoardEvent);
    })
    .catch((err) => console.error('oh noooo an error', err));
};

export default { buildBoards };

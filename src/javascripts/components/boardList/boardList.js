import boardData from '../../helpers/data/boardData';
import utils from '../../helpers/utils';
import boardComponent from './board';

const buildBoards = () => {
  boardData.getBoards()
    .then((boards) => {
      let domString = `
      <h2 class="text-center">Boards</h2>
      <div class="d-flex flex-wrap">
      `;
      boards.forEach((board) => {
        domString += boardComponent.boardmaker(board);
      });
      domString += '</div>';

      utils.printToDom('#boards', domString);
    })
    .catch((err) => console.error('oh noooo an error', err));
};

export default { buildBoards };

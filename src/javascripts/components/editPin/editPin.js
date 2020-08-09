import pinData from '../../helpers/data/pinsData';
import boardData from '../../helpers/data/boardData';
import utils from '../../helpers/utils';
import './editPin.scss';

const showPinForm = (pinId) => {
  boardData.getBoards()
    .then((boards) => {
      let domString = `
      <h3>Edit Pin</h3>
      <form class="edit-pin" id=${pinId}>
      <h6>Change Board</h6>
      <select id="chooseBoard" class="select">`;

      boards.forEach((board) => {
        const boardId = $('#chooseBoard').data('board');
        console.warn(board.id, boardId);
        if (board.id === boardId) {
          domString += `
          <option data-board-id=${board.id} id="edit-pin-board" value="${board.category}" selected>${board.category}</option>`;
        } else {
          domString += `
          <option data-board-id=${board.id} id="edit-pin-board" value="${board.category}">${board.category}</option>`;
        }
      });

      domString += `
      </select>
      `;
      pinData.getPinbyId(pinId)
        .then((response) => {
          const pin = response.data;

          domString += `
            <form class="edit-pin-card d-flex flex-column align-content-center text-center" id="${pinId}">
              <div class="form-group">
                <label for="board-id">Pin</label>
                <input type="text" class="form-control" id="edit-pinBoard-id" placeholder="${pin.boardId}">
              </div>
              <button type="submit" class="btn btn-primary" id="pin-editor">Submit</button>
            </form>
          `;
          utils.printToDom('#new-pin', '');
          utils.printToDom('#new-pin', domString);
        })
        .catch((err) => console.error('get pins failed', err));
    });
};

export default { showPinForm };

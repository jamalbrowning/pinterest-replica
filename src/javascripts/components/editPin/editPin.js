import pinData from '../../helpers/data/pinsData';

import utils from '../../helpers/utils';
import './editPin.scss';

const showPinForm = (pinId) => {
  pinData.getPinbyId(pinId)
    .then((response) => {
      const pin = response.data;

      const domString = `
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
};

export default { showPinForm };

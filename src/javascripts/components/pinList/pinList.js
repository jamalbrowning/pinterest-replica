import pinComponent from './pin';
import pinData from '../../helpers/data/pinsData';
import utils from '../../helpers/utils';

const removePinEvent = (e) => {
  const pinId = e.target.closest('.card').id;
  pinData.deletePin(pinId)
    .then((response) => {
      console.error(response);
      buildPins(); //eslint-disable-line
    })
    .catch((err) => console.error('could not delete pin', err));
};

const buildPins = (e) => {
  console.error(e.target.closest('.card').id);
  const boardId = e.target.closest('.card').id;
  pinData.getPinsByBoardId(boardId)
    .then((pinning) => {
      console.error(pinning);
      let domString = `
        <div class="card">
      `;

      pinning.forEach((pin) => {
        domString += pinComponent.pinMaker(pin);
      });

      domString += '</div>';

      utils.printToDom('#pins', domString);
      $('body').on('click', removePinEvent);
    })
    .catch((err) => console.error('get pins failed', err));
};

export default { buildPins };

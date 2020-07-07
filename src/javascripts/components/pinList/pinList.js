import pinComponent from './pin';
import pinData from '../../helpers/data/pinsData';
import utils from '../../helpers/utils';

const removePinEvent = (e) => {
  console.error('please read this thing', e.target.closest('.card').id);
  const pinId = e.target.closest('.card').id;
  pinData.deletePin(pinId)

    .then((response) => {
      console.error('here is the response', response);

      buildPins(); //eslint-disable-line
      utils.printToDom('#pins', '');
    })
    .catch((err) => console.error('could not do crap', err));
};

const buildPins = (e) => {
  const boardId = e.target.closest('.card').id;
  pinData.getPinsByBoardId(boardId)
    .then((pinning) => {
      console.error(pinning);
      let domString = `
        <h2 class="d-flex justify-content-center">Pins</h2>
        <div class="pin-cards d-flex flex-wrap justify-content-center">
        
        
      `;

      pinning.forEach((pin) => {
        domString += pinComponent.pinMaker(pin);
      });

      domString += '</div>';

      utils.printToDom('#pins', domString);
    })
    .catch((err) => console.error('get pins failed', err));
};

export default { buildPins, removePinEvent };

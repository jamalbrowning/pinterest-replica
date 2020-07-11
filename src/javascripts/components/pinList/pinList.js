import pinComponent from './pin';
import pinData from '../../helpers/data/pinsData';
import utils from '../../helpers/utils';

const removePinEvent = (e) => {
  const pinId = e.target.closest('.card').id;
  pinData.deletePin(pinId)
    .then(() => {
      // eslint-disable-next-line no-use-before-define
      rebuildPins(e);
    })
    .catch((err) => console.error('couldnt delete pin', err));
};
const buildNewPin = (e) => {
  const board = 'board';
  e.preventDefault();
  const brandNewPin = {
    boardId: board + $('#pinBoard-id').val().charAt(0).toUpperCase() + $('#pinBoard-id').val().slice(1),
    imgUrl: $('#imgUrl').val(),
    name: $('#pin-name').val(),
    webUrl: $('#webUrl').val(),
  };
  pinData.addPin(brandNewPin)
    .then(() => {
      // eslint-disable-next-line no-use-before-define
      rebuildPins(e);
      $('#new-board').addClass('hide');
      utils.printToDom('#new-pin', '');
    })
    .catch((err) => console.error('new pins are shitty', err));
};
const buildPins = (e) => {
  e.preventDefault();
  const boardId = e.target.closest('.card').id;
  pinData.getPinsByBoardId(boardId)
    .then((pinning) => {
      // console.error(pinning);
      let domString = `
        <h2 class="d-flex justify-content-center">Pins</h2>
        <div class="pin-cards d-flex flex-wrap justify-content-center">
        
        
      `;
      pinning.forEach((pin) => {
        domString += pinComponent.pinMaker(pin);
      });

      domString += '</div>';

      utils.printToDom('#pins', domString);
      $('.pin-delete').on('click', console.error('this is what sucks'), removePinEvent);
    })
    .catch((err) => console.error('get pins failed', err));
};
const rebuildPins = (e) => {
  console.error(e);
  const boardId = e.target.id;
  pinData.getPinsByBoardId()
    .then((pinning) => {
      let domString = `
        <h2 class="d-flex justify-content-center">Pins</h2>
        <div class="pin-cards d-flex flex-wrap justify-content-center">  
      `;
      pinning.forEach((pin) => {
        if (pin.boardId === boardId) {
          domString += pinComponent.pinMaker(pin);
        }
      });
      domString += '</div>';
      utils.printToDom('#pins', domString);
    })
    .catch((err) => console.error('get pins failed', err));
};
export default { buildPins, removePinEvent, buildNewPin };

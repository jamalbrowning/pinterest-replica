import pinComponent from './pin';
import pinData from '../../helpers/data/pinsData';
import editPin from '../editPin/editPin';
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
        <button class="btn btn-dark d-flex justify-content-center" id="back-boards">back</button>
        <div class="pin-cards d-flex flex-wrap justify-content-center">
        
        
        
      `;
      pinning.forEach((pin) => {
        domString += pinComponent.pinMaker(pin);
      });

      domString += '</div>';

      utils.printToDom('#pins', domString);
      utils.printToDom('#boards', '');
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

const showEditPinForm = (e) => {
  editPin.showPinForm(e.target.closest('.pinners').id);
};
const editPinEvent = (e) => {
  e.preventDefault();
  console.error(e);
  const pinId = e.target.cloest('.edit-pin-card').id;
  console.error(pinId);
  const editedPin = {
    boardId: $('#edit-pinBoard-id').val(),
  };

  pinData.editPin(pinId)(pinId, editedPin)
    .then(() => {})
    .catch((err) => console.error('couldnt do it', err));
};

const pinEvents = () => {
  $('body').on('click', '.pin-edit', showEditPinForm);
  $('body').on('click', '.pin-editor', editPinEvent, console.error('wooooooo'));
};
export default {
  buildPins,
  removePinEvent,
  buildNewPin,
  pinEvents,
};

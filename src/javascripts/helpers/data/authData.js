import firebase from 'firebase/app';
import 'firebase/auth';

import buildBoards from '../../components/boardList/boardList';
import pins from '../../components/pinList/pinList';

const authDiv = $('#auth');
const newBoardDiv = $('#new-board');
const newPinDiv = $('#new-pin');
const boardsDiv = $('#boards');
const homeDiv = $('#home');
const logOutBtn = $('#navbar-logout-button');
const checkLoginStatus = () => {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      authDiv.addClass('hide');
      homeDiv.addClass('hide');
      boardsDiv.removeClass('hide');
      logOutBtn.removeClass('hide');
      newBoardDiv.removeClass('hide');
      newPinDiv.removeClass('hide');
      pins.pinEvents();
      buildBoards.buildBoards();
      buildBoards.boardEvents();
    } else {
      authDiv.removeClass('hide');
      homeDiv.removeClass('hide');
      boardsDiv.addClass('hide');
      logOutBtn.addClass('hide');
      newBoardDiv.addClass('hide');
      newPinDiv.addClass('hide');
    }
  });
};

export default { checkLoginStatus };

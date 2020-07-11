import firebase from 'firebase/app';
import 'firebase/auth';

import buildBoards from '../../components/boardList/boardList';

const authDiv = $('#auth');
const newBoardDiv = $('#new-pin');
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

      buildBoards.buildBoards();
    } else {
      authDiv.removeClass('hide');
      homeDiv.removeClass('hide');
      boardsDiv.addClass('hide');
      logOutBtn.addClass('hide');
      newBoardDiv.addClass('hide');
    }
  });
};

export default { checkLoginStatus };

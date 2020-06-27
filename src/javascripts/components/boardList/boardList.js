import utils from '../../helpers/utils';
import boardData from '../../helpers/data/boardData';

const buildBoards = () => {
  boardData.getBoards()
    .then((response) => console.error('it workssssssssssss', response.data))
    .catch((err) => console.error('oh noooo an error', err));
  // const domString = '<h1>I see Boards</h1>';
  // utils.printToDom('#boards', domString);
};

export default { buildBoards };

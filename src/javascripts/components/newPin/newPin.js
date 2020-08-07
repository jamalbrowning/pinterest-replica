import utils from '../../helpers/utils';

const showForm = () => {
  const domString = `
  <form class=" d-flex flex-column align-content-center text-center">
    <div class="form-group">
      <label for="board-id">Pin</label>
      <input type="text" class="form-control" id="pinBoard-id" placeholder="Board Name">
      <input type="text" class="form-control" id="imgUrl" placeholder="Img URL">
      <input type="text" class="form-control" id="pin-name" placeholder="Pin Name">
      <input type="text" class="form-control" id="webUrl" placeholder="Web Url">
    </div>
    <button type="submit" class="btn btn-primary" id="pin-creator">Submit</button>
  </form>
`;

  utils.printToDom('#new-pin', domString);
};

export default { showForm };

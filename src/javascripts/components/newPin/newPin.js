import utils from '../../helpers/utils';

const showForm = () => {
  const domString = `
  <form class=" d-flex flex-column align-content-center text-center">
    <div class="form-group">
      <label for="board-id">Pin</label>
      <input type="text" class="form-control" id="board-id" placeholder="Board Name">
      <input type="text" class="form-control" id="board-id" placeholder="Img URL">
      <input type="text" class="form-control" id="board-id" placeholder="Pin Name">
      <input type="text" class="form-control" id="board-id" placeholder="Web Url">
    </div>
    <button type="submit" class="btn btn-primary" id="board-creator">Submit</button>
  </form>
`;

  utils.printToDom('#new-pin', domString);
};

export default { showForm };

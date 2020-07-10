const boardmaker = (board) => {
  const domString = `
  <div class="single-board">
  <div class="card boardcard border-0 rounded-0" id="board${board.category.charAt(0).toUpperCase() + board.category.slice(1)}">
    <div class="card-body">
      <h5 class="card-title text-center text-uppercase">${board.category}</h5>
      <div><button id="board-delete" class="btn btn-dark"><i class="far fa-trash-alt"></i></button></div>
    </div>
  </div>
</div>
`;

  return domString;
};

export default { boardmaker };

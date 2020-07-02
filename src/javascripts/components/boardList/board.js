const boardmaker = (board) => {
  const domString = `
  <div class="col-3">
  <div class="card boardcard border-0 rounded-0" id=${board.id}>
    <div class="card-body">
      <h5 class="card-title text-center">${board.category}</h5>
      <div><i type="button" id="board-delete" class="far fa-times-circle"></i></div>
    </div>
  </div>
</div>
`;

  return domString;
};

export default { boardmaker };

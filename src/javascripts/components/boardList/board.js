const boardmaker = (board) => {
  const domString = `
  <div class="col-3">
  <div class="card myco-card border-0 rounded-0" id=${board.category}>
    <div class="card-body">
      <h5 class="card-title text-center">${board.category}</h5>
    </div>
  </div>
</div>
`;

  return domString;
};

export default { boardmaker };

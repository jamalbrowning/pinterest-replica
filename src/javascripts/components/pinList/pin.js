import './pin.scss';

const pinMaker = (pin) => {
  const domString = `
  <div id="${pin.boardId}" class="card pin-card delete-pin d-flex flex-column align-items-center text-center" style="width: 18rem">
    <img class="card-img-top" src="${pin.imgUrl}" alt="Card image cap">
    <div class="card-body">
    <a class="card-text" href="${pin.webUrl}" target="_blank"><h4>${pin.name}</h4></a>
    <div class="d-flex justify-content-center"><i type="button" class="far fa-trash-alt pinned"></i></div>
  </div>
</div>
  `;
  return domString;
};

export default { pinMaker };

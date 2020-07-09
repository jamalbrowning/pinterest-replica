import './pin.scss';

const pinMaker = (pin) => {
  const domString = `
  <div id="${pin.id}" class="card pin-card delete-pin d-flex flex-column align-items-center text-center" style="width: 18rem">
    <img class="card-img-top" src="${pin.imgUrl}" alt="Card image cap">
    <div class="card-body">
    <a class="card-text" href="${pin.webUrl}" target="_blank"><h4>${pin.name}</h4></a>
    <div class="d-flex justify-content-center "><button id="${pin.boardId}" class="btn btn-dark pin-delete"><i class="far fa-trash-alt"></i></button></div>
  </div>
</div>
  `;
  return domString;
};

export default { pinMaker };

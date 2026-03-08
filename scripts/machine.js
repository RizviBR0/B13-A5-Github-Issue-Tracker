const modalTitle = document.getElementById("modal-title");
const modalBody = document.getElementById("modal-body");

const showModal = (title, body, state) => {
  modalTitle.textContent = title;
  modalTitle.style.color = state;
  modalBody.textContent = body;

  my_modal_1.showModal();
};

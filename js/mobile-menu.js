(() => {
    const menuBtnRef = document.querySelector("[data-menu-open]");

    menuBtnRef.addEventListener("click", () => {

    menuBtnRef.classList.toggle("is-open");
});

function toggleModal() {
    document.body.classList.toggle("modal-open");
    // refs.modal.classList.toggle("is-hidden");
  }

})();
  
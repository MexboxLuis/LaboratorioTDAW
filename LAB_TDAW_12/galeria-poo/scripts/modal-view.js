class ModalView {
  constructor() {
      this.modalView = document.querySelector('#modal-view');
      this.modalImage = document.createElement('img');
      this.modalView.addEventListener('click', this.close.bind(this));
  }

  open(imageSrc) {
      this.modalImage.src = imageSrc;
      this.modalView.appendChild(this.modalImage);
      this.modalView.classList.remove('hidden');
      document.body.classList.add('no-scroll');
  }

  close() {
      this.modalView.innerHTML = '';
      this.modalView.classList.add('hidden');
      document.body.classList.remove('no-scroll');
  }
}
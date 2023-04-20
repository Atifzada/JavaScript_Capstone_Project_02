const commentsPopup = () => {
  // Open reservation modal
  const displayPopup = document.querySelectorAll('[data-modal-target]');
  displayPopup.forEach((button) => {
    button.addEventListener('click', () => {
      const displaySection = document.querySelector(button.dataset.modalTarget);
      document.body.classList.add('no-scroll');
      displaySection.classList.add('display-section');
      if (!displaySection.open) {
        displaySection.showModal();
      }
    });
  });
  // Close reservation modal
  document.addEventListener('DOMContentLoaded', () => {
    const closeButtons = document.querySelectorAll('[data-close-button]');
    closeButtons.forEach((closeButton) => {
      closeButton.addEventListener('click', () => {
        const displaySection = document.querySelector('.display-section');
        if (displaySection) {
          const dialog = displaySection.querySelector('dialog');
          dialog.close();
          displaySection.classList.remove('display-section');
          document.body.classList.remove('no-scroll');
        }
      });
    });
  });
};
export default commentsPopup;
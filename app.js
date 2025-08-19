for (let i = 1; i <= 6; i++) {
  const button = document.getElementById(`nextPage${i}`);
  if (button) {
    button.addEventListener("click", () => {
      window.location.href = `index${i + 1}.html`;
    });
  }
}

const backButton = document.getElementById("backPage");
if (backButton) {
  const match = window.location.pathname.match(/index(\d+)\.html$/);
  if (match) {
    const currentPage = parseInt(match[1]);

    backButton.addEventListener("click", () => {
      if (currentPage > 1) {
        window.location.href = `index${currentPage - 1}.html`;
      } else {
        window.location.href = "index.html";
      }
    });
  }
}

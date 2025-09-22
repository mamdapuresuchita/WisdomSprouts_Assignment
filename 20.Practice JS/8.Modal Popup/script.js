modal = document.querySelector("#modalBox")
closeBtn = document.querySelector("#closeBtn")
openBtn = document.querySelector("#openBtn")

    
openBtn.addEventListener("click", () => {
      modal.style.display = "flex";
    });//open modal

    
closeBtn.addEventListener("click", () => {
      modal.style.display = "none";
    });//close modal

    
window.addEventListener("click", (e) => {
      if (e.target === modal) {
        modal.style.display = "none";
      }// Close modal on outside click
    });
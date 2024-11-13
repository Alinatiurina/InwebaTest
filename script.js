document.addEventListener("DOMContentLoaded", () => {
    const accordeonItems = document.querySelectorAll(".accordeon-item");
  
    accordeonItems.forEach((item) => {
      const btn = item.querySelector(".accordeon-btn");
      const text = item.querySelector(".accordeon-text");
  
      text.style.display = "none";
      btn.textContent = "+";
  
      btn.addEventListener("click", () => {
        if (text.style.display === "none") {
          text.style.display = "block";
          btn.textContent = "-";
        } else {
          text.style.display = "none";
          btn.textContent = "+";
        }
      });
    });
  });

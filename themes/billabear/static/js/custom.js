let cards = [...document.querySelectorAll(".accordion-item")];
    cards.forEach(card => {
      card.addEventListener("click", function () {
        cards.forEach(c => c.classList.remove("border-custom"));
        this.classList.add("border-custom")
      })
    });
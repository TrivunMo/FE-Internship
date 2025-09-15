export function setupAccordion() {
    var acc = document.getElementsByClassName("js-accordion__item");

    for (var i = 0; i < acc.length; i++) {
      acc[i].addEventListener("click", function() {
       
        for (var j = 0; j < acc.length; j++) {
          var otherPanel = acc[j].nextElementSibling;
          if (otherPanel !== this.nextElementSibling) {
            otherPanel.classList.remove("accordion__panel--active");
            acc[j].classList.remove("active");
          }
        }
    
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        panel.classList.toggle("accordion__panel--active");
      });
    }
    
}
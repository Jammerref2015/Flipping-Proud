$(document).ready(function() {
  $.when($.ajax("static/data/data.json")).then(function(data) {
      for (let i = 0; i < data.length; i++) {
          let flipCard = "<div class='flip-card-outer col-12 col-md-4  col-lg-3'>";
          flipCard += "<div class='flip-card-wrapper'>";
          let flipCardContainer = `<div class='flip-card-container card-${i}'>`;
          flipCard += flipCardContainer;
          flipCard += "<div class='flip-card'>";

          let flipCardFront = "<div class='flip-card-front glitter'>";
          flipCardFront += `<img src='${data[i].img_url}' alt='${data[i].name}'>`;
          flipCardFront += `<div class='d-none d-md-block name-wrapper'><h5 class='pt-2 pt-xl-0 pl-3  name-wrapper-heading'>${data[i].name}</h5></div>`;
          flipCardFront += "<img src='static/images/pride-doughnut-icon.png' width='60' class='icon pride-doughnut-icon' alt='Pride doughnut icon'>";
          flipCardFront += "<img src='static/images/icon-flip-over.svg' width='60' class='icon flip-over-icon' alt='flip over icon'>";
          flipCardFront += "</div>";

          let flipCardBack = "<div class='flip-card-back'>";
          flipCardBack += "<img src='static/images/pride-doughnut-icon.png' width='80' class='icon pride-doughnut-icon pride-doughnut-icon-back mb-2 mb-xl-0 d-md-none d-xl-block' alt='Pride doughnut icon'>";
          flipCardBack += `<h3 class="mb-0 d-md-none">${data[i].name}</h3>`;
          flipCardBack += `<p>${data[i].bio}</p>`;
          flipCardBack += "</div>";

          let flipCardContent = flipCardFront.concat(flipCardBack);

          flipCard += flipCardContent;

          $(".flip-card-row").append(flipCard);

          if (i === 0) { 
              $(`.card-${i} .flip-card-back`).addClass('bg-green');
              $(`.card-${i} .flip-card-front`).addClass('box-shadow-green');
          } else if (i % 4 === 0) {
              $(`.card-${i} .flip-card-back`).addClass('bg-green');
              $(`.card-${i} .flip-card-front`).addClass('box-shadow-green');
          } else if (i === 1 || i === 5 || i === 9) {
              $(`.card-${i} .flip-card-back`).addClass('bg-blue');
              $(`.card-${i} .flip-card-front`).addClass('box-shadow-blue');
          } else if (i === 2 || i === 6 || i === 10) {
              $(`.card-${i} .flip-card-back`).addClass('bg-purple');
              $(`.card-${i} .flip-card-front`).addClass('box-shadow-purple');
          } else {
              $(`.card-${i} .flip-card-back`).addClass('bg-yellow');
              $(`.card-${i} .flip-card-front`).addClass('box-shadow-yellow');
          }

          $(`.card-${i}`).click(function () {
              $(this).toggleClass('flip');
              $(".glitter").sparkle({
                color: ["#2eafea","#e56604"],
                speed: 0.4
              });
          });
      }
  }); 
});
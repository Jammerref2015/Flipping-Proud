$(document).ready(function() {
    $.when($.ajax("static/data/data.json")).then(function(data) {
        for (let i = 0; i < data.length; i++) {
            let flipCard = "<div class='flip-card-outer'>";
            flipCard += "<div class='flip-card-wrapper'>";
            let flipCardContainer = `<div class='flip-card-container card-${i}'>`;
            flipCard += flipCardContainer;
            flipCard += "<div class='flip-card'>";

            let flipCardFront = "<div class='flip-card-front'>";
            flipCardFront += `<img src='${data[i].img_url}' alt='${data[i].name}'>`;
            flipCardFront += "</div>";

            let flipCardBack = "<div class='flip-card-back'>";
            flipCardBack += `<h3>${data[i].name}</h3>`;
            flipCardBack += `<p>${data[i].bio}</p>`;
            flipCardBack += "</div>";

            let flipCardContent = flipCardFront.concat(flipCardBack);

            flipCard += flipCardContent;

            $("nav").after(flipCard);

            if (i === 0) { 
                $(`.card-${i} .flip-card-back`).addClass('bg-yellow');
            } else if (i % 4 === 0) {
                $(`.card-${i} .flip-card-back`).addClass('bg-yellow');
            } else if (i === 1 || i === 5 || i === 9) {
                $(`.card-${i} .flip-card-back`).addClass('bg-purple');
            } else if (i === 2 || i === 6 || i === 10) {
                $(`.card-${i} .flip-card-back`).addClass('bg-blue');
            } else {
                $(`.card-${i} .flip-card-back`).addClass('bg-green');
            }

            $(`.card-${i}`).click(function () {
                $(this).toggleClass('flip');
            });
        }
    });
});
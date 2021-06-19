console.log("Flippin' proud!");

// const flipCardContainer = document.querySelector(".flip-card-container");
// $(document).on('click', flipCardContainer, function() {
//     flipCardContainer.classList.toggle("flip");
// });

$(document).ready(function() {
    console.log("Where's the data?");
    $.get("static/data/data.json", function(data) {
        for (let i = 0; i < data.length; i++) {
            let flipCard = "<div class='flip-card-outer'>";
            flipCard += "<div class='flip-card-container'>";

            let flipCardFront = "<div class='flip-card-front'>";
            flipCardFront += "<img src='https://upload.wikimedia.org/wikipedia/commons/9/9e/Tim_Cook_%282017%2C_cropped%29.jpg' alt='Tim Cook'>";

            let flipCardBack = "<div class='flip-card-back'>";
            flipCardBack += "<p>American business executive who has been the chief executive officer of Apple Inc. since 2011. <span>Tim Cook</span></p>";

            flipCard += flipCardFront;
            flipCard += flipCardBack;

            $("nav").after(flipCard);

        }
    // var i, tr, resort;
    // for (i = 0; i < data.length; i++) {
    //     tr = "<tr>";
    //     tr += "<td class='pl-1'>" + data[i].strikeRank + '</td><td class="pr-2">' + data[i].fullname + `</td><td class='pl-2 pr-2 crest-pane ${data[i].club.replace(/ /g, '-').replace('&', 'and').toLowerCase()}-crest-pane'></td><td class='pl-1 text-center pr-3'>` + data[i].goals + '</td><td class="pl-2 text-center pr-3">' + data[i].pens + '</td><td class="text-center pl-1 pr-3">' + data[i].goalsMinusPens + '</td></tr>';
    //     leaderboardBody.innerHTML += tr;

    //     resort = true;
    //     $("#my-table").trigger('update', [resort]);
    // }

    // for (i = 0; i < data.length; i++) {
    //     tr = "<tr>";
    //     tr += "<td class='pl-1'>" + data[i].strikeRank + '</td><td class="pr-2">' + data[i].fullname + `</td><td class='pl-2 pr-2 crest-pane ${data[i].club.replace(/ /g, '-').replace('&', 'and').toLowerCase()}-crest-pane'></td><td class='pl-1 text-center pr-3'>` + data[i].goals + '</td><td class="pl-2 text-center pr-3 table-border-left table-backdrop-contrast">' + data[i].goalsPer90 + '</td><td class="text-center pl-1 pr-3 table-backdrop-contrast">' + data[i].goalsMinusPensPer90 + '</td></tr>';
    //     leaderboardBodyStrikeRate.innerHTML += tr;

    //     resort = true;
    //     $("#my-second-table").trigger('update', [resort]);
    // }

    // for (i = 0; i < data.length; i++) {
    //     var valueGoals = data[i].goals / data[i].value;
    //     var valueGoalsRounded = valueGoals.toFixed(2);
    //     var valueGoalsMinusPens = data[i].goalsMinusPens / data[i].value;
    //     var valueGoalsMinusPensRounded = valueGoalsMinusPens.toFixed(2);

    //     tr = "<tr>";
    //     tr += "<td class='pl-1'>" + data[i].strikeRank + '</td><td class="pr-2">' + data[i].fullname + `</td><td class='pl-2 pr-2 crest-pane ${data[i].club.replace(/ /g, '-').replace('&', 'and').toLowerCase()}-crest-pane'></td><td class='pl-1 text-center pr-3'>` + data[i].goals + '</td><td class="pl-2 text-center pr-3 table-border-left table-backdrop-contrast">' + valueGoalsRounded + '</td><td class="text-center pl-1 pr-3 table-backdrop-contrast">' + valueGoalsMinusPensRounded + '</td></tr>';

    //     leaderboardBodyStrikeValue.innerHTML += tr;
    //     resort = true;
    //     $("#my-third-table").trigger('update', [resort]);
    // }
    });
});
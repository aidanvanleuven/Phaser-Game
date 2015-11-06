var scoreArray = [];
var scoreObject = {};
var increment = 0;
var time;

function submit() {
    $("#submitButton").prop("disabled", true);
    if (scoreObject.seconds !== "" || scoreObject.minutes !== ""){
        scoreObject.name = $("#nameInput").val();
        if (scoreObject.name === ""){
            scoreObject.name = "Default";
        }
        scoreArray.splice(0, 0, scoreObject);

        populateTable();
    }
}

function winFunction(){
    scoreObject = {};
    scoreObject.score = time;
    $("#submitButton").prop("disabled", false);
}

function populateTable(){
    console.log(scoreArray);
    $('.table tbody').empty();
    $.each(scoreArray, function(index,value){
        $('.table tbody').append('<tr><td>' + value.name + '</td>' + '<td>' + value.score + '</td><tr>');
    });
}
var scoreArray = [];
var scoreObject = {};
var increment = 0;

function submit() {
    $("#submitButton").prop("disabled", true);
    if (scoreObject.seconds !== "" || scoreObject.minutes !== ""){
        scoreObject.name = $("#nameInput").val();
        scoreArray.splice(0, increment, scoreObject);
        if (scoreObject.name === ""){
            scoreObject.name = "Default";
        }
        increment++;
        //$("#nameInput").val("");

        $.each(scoreArray, function(index,value){
            $('.table tbody').append('<tr><td>' +value.name + '</td>' + '<td>' + value.seconds + "." + value.milliseconds + '</td><tr>');
        });
    }
}

function winFunction(){
    console.log("Working!");
    $("#submitButton").prop("disabled", false);
}
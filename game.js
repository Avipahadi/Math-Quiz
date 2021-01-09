player_1_name = localStorage.getItem("player_1_n");
player_2_name = localStorage.getItem("player_2_n");

player1_score = 0;
player2_score = 0;

document.getElementById("player_1_n").innerHTML = player_1_name + " : ";
document.getElementById("player_2_n").innerHTML = player_2_name + " : ";

document.getElementById("player_1_s").innerHTML = player1_score;
document.getElementById("player_2_s").innerHTML = player2_score;

document.getElementById("player_question").innerHTML = "Question Turn - " + player_1_name;
document.getElementById("player_answer").innerHTML = "Answer Turn - " + player_2_name;

function send() {
    document.getElementById("main").style.display = "none";
    document.getElementById("output").style.display = "inline";
    n_1 = document.getElementById("n_1").value;
    n_2 = document.getElementById("n_2").value;
    actual_answer = parseInt(n_1) * parseInt(n_2);
    console.log(actual_answer);
    question_number = "<h4>" + n_1 + " × " + n_2 + "</h4>";
    input_box = "<br>Answer : <input type='text' id='input_check_box'>";
    check_button = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
    row = question_number + input_box + check_button;
    document.getElementById("output").innerHTML = row;
    document.getElementById("n_1").value = "";
    document.getElementById("n_2").value = "";
}

question_turn = "player1";
answer_turn = "player2";

function check() {
    get_answer = document.getElementById("input_check_box").value;
    if (get_answer == actual_answer) {
        if (answer_turn == "player1") {
            player1_score = player1_score + 1;
            document.getElementById("player1_score").innerHTML = player1_score;
        } else {
            player2_score = player2_score + 1;
            document.getElementById("player2_score").innerHTML = player2_score;
        }
    }

    if (question_turn == "player1") {
        question_turn = "player2"
        document.getElementById("player_question").innerHTML = "Question Turn - " + player_2_name;
    } else {
        question_turn = "player1"
        document.getElementById("player_question").innerHTML = "Question Turn - " + player_1_name;
    }

    if (answer_turn == "player1") {
        answer_turn = "player2"
        document.getElementById("player_answer").innerHTML = "Answer Turn - " + player_2_name;
    } else {
        answer_turn = "player1"
        document.getElementById("player_answer").innerHTML = "Answer Turn - " + player_1_name;
    }

    document.getElementById("output").innerHTML = "";
}
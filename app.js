
let countOfPlayers = 0
const player_name = ["","","",""]
const all_colours = ["Red", "Yellow", "Blue", "Green"]
const player_colours = ["","","",""]

// const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
// const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

var body = $('body');
body.on('mouseover', '[data-bs-toggle="tooltip"]', function (e) {
    e.stopPropagation();
    return new bootstrap.Tooltip(this).show();
});

body.on('mouseleave', '[data-bs-toggle="tooltip"]', function (e) {
    $('[role="tooltip"]').fadeOut(function () {
        e.stopPropagation();
        $(this).remove();
    });
});

// Instruction and player Info modal

$(window).on('load', function() {
    $('.board-game').css('display','none')
    $('#exampleModal').modal('show');
});

$('body').on('click', 'select.form-select', function() {

    // $('#' + this.id).html(`<option  id="colour-option" selected value="">Select your Colour</option>`)
    // $('#' + this.id)[0].childElementCount < 2 || this.value.length

    if(this.value === player_colours[this.id.charAt(this.id.length-1) - 1]){
        $('#' + this.id).html(``)
        var diff = all_colours.filter(x => player_colours.indexOf(x) === -1)
        console.log("diffs: ", diff)
        var available = '<option value="'+ player_colours[this.id.charAt(this.id.length-1) - 1] +'">' + player_colours[this.id.charAt(this.id.length-1) - 1] + '</option>'
        diff.forEach(x => {
            available += '<option>' + x + '</option>'
        })
        $('#' + this.id).append(`${available}`)
    } else {
        console.log("skipped")
    }

    const player_num = $('#player-info')[0].childElementCount
    for(var i=1; i<=player_num; i++){
        if($('#colour_' + i).val().length){  player_colours[i-1] = ($('#colour_' + i).val())  } 
    }

    
})

$('#add').on('mouseup', function() {

    const player_num = $('#player-info')[0].childElementCount + 1

    let colour_options = ``

    const playerCard = `
        <div id="player_${player_num}" class="card" style="width: 29rem; margin-bottom: 40px;">
            <div class="card-body d-flex justify-content-between">
                <div class="mb-3">
                    <label class="form-label">Name</label>
                    <input type="text" class="form-control" id="name_${player_num}" placeholder="Player ${player_num}" value="">
                </div>

                <div>
                    <label class="form-label">Colour</label>
                    <select class="form-select" aria-label="Default select example" id="colour_${player_num}">
                        <option selected value="">Select your Colour</option>   
                        ${colour_options}  
                    </select>
                </div>
            </div>
        </div>
    `
    
    if($('#player-info')[0].childElementCount < 4){
        $('#player-info').append(playerCard)
    } else {
        const toast = new bootstrap.Toast($('#liveToast'))
        toast.show()
        $('#alert-msg').html('There can be Maximum 4 players.')
    }
})


$('#remove').on('mouseup', function() {
    
    const player_num = $('#player-info')[0].childElementCount
    if($('#player-info')[0].childElementCount > 2){
        player_colours[player_num-1] = ""
        $('#player_' + player_num).remove()
    } else {
        const toast = new bootstrap.Toast($('#liveToast'))
        toast.show()
        $('#alert-msg').html('There should be Minimum 2 players.')
    }
})

$('#start_game').mouseup('mouseup', function() {

    var check = true
    const player_num = $('#player-info')[0].childElementCount
    for(var i=1; i<=player_num; i++){
        if($('#name_' + i).val().length && $('#colour_' + i).val().length){
            player_name[i-1] = ($('#name_' + i).val())
            player_colours[i-1] = ($('#colour_' + i).val())
        } else {
            const toast = new bootstrap.Toast($('#liveToast'))
            toast.show()
            $('#alert-msg').html('All the fields are Mandatory.')
            check = false
            break
        } 
    }

    if(check){
        $('#exampleModalToggle2').modal('hide')
        $('.board-game').css('display','flex')

        console.log(player_colours)
        player_name.forEach((x,index) => {
            console.log(x, index)
            if(x.length){
                $('.p' + (index+1)).html(x)
                $('.img' + (index+1)).attr("src","/icons/" + player_colours[index] + ".png")
            } else {
                $('#p' + (index+1)).css('display','none')
            }
        })

        player_name.forEach(x => { if(x.length){ countOfPlayers += 1 } })
    }
})

// Dice

let images = ["icons/dice-01.svg",
"icons/dice-02.svg",
"icons/dice-03.svg",
"icons/dice-04.svg",
"icons/dice-05.svg",
"icons/dice-06.svg"];
let dice = document.querySelectorAll(".dice");



//importing modules
import { dataUpdate } from "./Dependencies/dataUpdate.js";
import { Jail } from "./Dependencies/jail.js";
import { Lottery } from "./Dependencies/lottery.js";
import { Hotel } from "./Dependencies/hotel.js";
import { countMoves } from "./Dependencies/countMoves.js";
import { findMax } from "./Dependencies/findMax.js";


//variable data
var moves = [10,10,10,10];
var bankMoney = 5000;
var playerMoney = [1000,1000,1000,1000];

var turn = 1;

//player positions
var player1pos = 1;
var player2pos = 1;
var player3pos = 1;
var player4pos = 1;

//special positons
var jail = [5,12,20,31];
var lottery = [7,15,24,34];
var hotel = [8,13,18,28];

//assets owned
var asset = [0,0,0,0]; //player number who owns the asset, if zero that means asset is not owned.
var asset_type = [0,0,0,0]; //type of asset owned by certain player, if zero that means asset is not owned.


document.getElementById("bank-data").innerHTML = bankMoney;

for(var i=1; i<=countOfPlayers; i++){
    document.getElementById("moves-data-" + i).innerHTML = moves[0];
    document.getElementById("money-data-" + i).innerHTML = playerMoney[0];

}


// roll dice button clicked
$("#roll-dice").click(async function() {

    dice.forEach(function(die){
        die.classList.add("shake");
    });

    var number

    const rolled = function() {
        dice.forEach(function(die){
            die.classList.remove("shake");
        });
        let dieOneValue = Math.floor(Math.random()*6);
        let dieTwoValue = Math.floor(Math.random()*6);
        console.log(dieOneValue,dieTwoValue);
        document.querySelector("#die-1").setAttribute("src", images[dieOneValue]);
        document.querySelector("#die-2").setAttribute("src", images[dieTwoValue]);
        document.querySelector("#total").innerHTML = "Your roll is " + ( (dieOneValue +1) + (dieTwoValue + 1) );
        number = (dieOneValue +1) + (dieTwoValue + 1)
    }
    rolled()
    

    if(turn === (parseInt(countOfPlayers) + 1)){
        turn = 1;
    }

    var sum = countMoves(countOfPlayers,moves);
    if(sum == 0){
        var winner = playerMoney.indexOf(findMax(playerMoney,countOfPlayers)) + 1;
        alert("PLAYER " + winner + " IS THE WINNER!!");
        alert("Refresh the page for a new game");
    }
    
    switch(turn){
        case 1:

            
            $("#" + player1pos).removeClass("player1"); 

            if((parseInt(player1pos) + parseInt(number)) <= 34){
                player1pos = parseInt(player1pos) + parseInt(number);
            } else {
                player1pos = parseInt(player1pos) + parseInt(number) - 34;
            }

            console.log(turn, player1pos, number)
            
            $("#" + player1pos).addClass("player1");
            turn += 1;

            if(jail.includes(player1pos)){
                bankMoney = Jail(1,moves,playerMoney,bankMoney,asset);
            } else if(lottery.includes(player1pos)){
                bankMoney = Lottery(1,moves,playerMoney,bankMoney,asset);
            } else if(hotel.includes(player1pos)){
                bankMoney = Hotel(1,hotel.indexOf(player1pos),moves,playerMoney,bankMoney,asset,asset_type);
            } else {
                bankMoney = dataUpdate(1,moves,playerMoney,bankMoney,asset,asset_type);
            }

            break;
        case 2:
            $("#" + player2pos).removeClass("player2"); 
            
            if((parseInt(player2pos) + parseInt(number)) <= 34){
                player2pos = parseInt(player2pos) + parseInt(number);
            } else {
                player2pos = parseInt(player2pos) + parseInt(number) - 34;
            }

            $("#" + player2pos).addClass("player2");
            turn += 1;

            if(jail.includes(player2pos)){
                bankMoney = Jail(2,moves,playerMoney,bankMoney,asset);
            } else if(lottery.includes(player2pos)){
                bankMoney = Lottery(2,moves,playerMoney,bankMoney,asset);
            } else if(hotel.includes(player2pos)){
                bankMoney = Hotel(2,hotel.indexOf(player2pos),moves,playerMoney,bankMoney,asset,asset_type);
            } else {
                bankMoney = dataUpdate(2,moves,playerMoney,bankMoney,asset,asset_type);
            }

            break;
        case 3:
            $("#" + player3pos).removeClass("player3"); 
            
            if((parseInt(player3pos) + parseInt(number)) <= 34){
                player3pos = parseInt(player3pos) + parseInt(number);
            } else {
                player3pos = parseInt(player3pos) + parseInt(number) - 34;
            }

            $("#" + player3pos).addClass("player3");
            turn += 1;

            if(jail.includes(player3pos)){
                bankMoney = Jail(3,moves,playerMoney,bankMoney,asset);
            } else if(lottery.includes(player3pos)){
                bankMoney = Lottery(3,moves,playerMoney,bankMoney,asset);
            } else if(hotel.includes(player3pos)){
                bankMoney = Hotel(3,hotel.indexOf(player3pos),moves,playerMoney,bankMoney,asset,asset_type);
            } else {
                bankMoney = dataUpdate(3,moves,playerMoney,bankMoney,asset,asset_type);
            }

            break;
        case 4:
            $("#" + player4pos).removeClass("player4"); 
            player4pos = parseInt(player4pos) + parseInt(number);
            $("#" + player4pos).addClass("player4");
            turn += 1;

            if(jail.includes(player4pos)){
                bankMoney = Jail(4,moves,playerMoney,bankMoney,asset);
            } else if(lottery.includes(player4pos)){
                bankMoney = Lottery(4,moves,playerMoney,bankMoney,asset);
            } else if(hotel.includes(player4pos)){
                bankMoney = Hotel(4,hotel.indexOf(player4pos),moves,playerMoney,bankMoney,asset,asset_type);
            } else {
                bankMoney =  dataUpdate(4,moves,playerMoney,bankMoney,asset,asset_type);
            }

            break;
        default:
            alert("error occured");
        
    }


});



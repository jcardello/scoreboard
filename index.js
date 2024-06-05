let home_score = 0
let home_score_sum = 0
let guest_score = 0
let guest_score_sum = 0


let homeEl = document.getElementById("score-home");
let guestEl = document.getElementById("score-guest");


function button_plus_one() {
    home_score += 1;
    home_score_sum = home_score;
    let home_total_1 =  home_score_sum ;
    homeEl.textContent = home_total_1;
    
    
}

function button_plus_two() {
    
    home_score += 2;
    home_score_sum = home_score;
    let home_total_2 =  home_score_sum; 
    homeEl.textContent = home_total_2;
    
    }
    
function button_plus_three() {
    home_score += 3;
    home_score_sum = home_score;
    let home_total_3 =  home_score_sum;
    homeEl.textContent = home_total_3;
    
    
}

function button_plus_one_guest() {
    
    guest_score += 1;
    guest_score_sum = guest_score;
    let guest_total_1 =  guest_score_sum; 
    guestEl.textContent = guest_total_1;
    
    }
    
function button_plus_two_guest() {
    
    guest_score += 2;
    guest_score_sum = guest_score;
    let guest_total_2 =  guest_score_sum; 
    guestEl.textContent = guest_total_2;
    
    }
    
function button_plus_three_guest() {
    
    guest_score += 3;
    guest_score_sum = guest_score;
    let guest_total_3 =  guest_score_sum;
    guestEl.textContent = guest_total_3;
    
    }
    
function new_game() {
    home_score = 0;
    home_score_sum = 0;
    guest_score = 0;
    guest_score_sum = 0;
    guestEl.textContent = 0;
    homeEl.textContent = 0;
}
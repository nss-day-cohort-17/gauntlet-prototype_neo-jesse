
var newPlayer;

$(document).ready(function() {
  /*
    Show the initial view that accepts player name
   */
  $("#player-setup").show('slow');

  /*
    When any button with card__link class is clicked,
    move on to the next view.
   */



  $(".card__link").click(function(e) {
    var nextCard = $(this).attr("next");
    var moveAlong = false;

     var newPlayerName = $('#player-name').val();
     console.log(newPlayerName)

     newPlayer = new Gauntlet.Combatants.Player(newPlayerName);

      switch (nextCard) {
      case "card--character":
        moveAlong = ($("#player-name").val() !== "");
        break;
      case "card--weapon":
        moveAlong = ($("#player-name").val() !== "");
        break;
      case "card--class":
        moveAlong = ($("player-name").val() !== "");
        break
      case 'card--battlefield':
        moveAlong = ($("#player-name").val() !== "");
        break;
    }


    if (moveAlong) {
      $(".card").hide();
      $("." + nextCard).show('slow');
    }

    if (e.target.id === 'defeatLink' || e.target.id === "defeat" || e.target.className === 'btn__text span-defeat') {

      $('.card--battleground').show('slow');

      $('.card--weapon').hide();

      $('body').addClass('battleground-body');

    }

  });

  $(".class__button").click(function(e) {
    if ($(this).hasClass('stealthClass') === true) {
      $('#character-select').show('slow');
      $('#classSelect').hide();
      $('.fighter').hide();
      $('.magical').hide();
      $('.stealth').show();
      newPlayer = new Gauntlet.GuildHall.Stealth();
      console.log(newPlayer)
    }
    if ($(this).hasClass('fighterClass') === true) {
      $('#character-select').show('slow');
      $('#classSelect').hide();
      $('.fighter').show();
      $('.magical').hide();
      $('.stealth').hide();
      newPlayer = new Gauntlet.GuildHall.Fighter();
      console.log(newPlayer)
    }
    if ($(this).hasClass('magicalClass') === true) {
      $('#character-select').show('slow');
      $('#classSelect').hide();
      $('.fighter').hide();
      $('.magical').show();
      $('.stealth').hide();
      newPlayer = new Gauntlet.GuildHall.Mage();
    }
  })



  /*
    When the back button clicked, move back a view
   */
  $(".card__back").click(function(e) {
    var previousCard = $(this).attr("previous");
    $(".card").hide();
    $("." + previousCard).show();
  });

});

/*
  Test code to generate a human player and an orc player
 */
var warrior = new Gauntlet.Combatants.Human();
warrior.setWeapon(new WarAxe());
warrior.generateClass();  // This will be used for "Surprise me" option
console.log(warrior.toString());

var orc = new Gauntlet.Combatants.Orc();
orc.generateClass();
orc.setWeapon(new BroadSword());
console.log(orc.toString());

/*
  Test code to generate a spell
 */



//Battle function for Human//
//Each time the attack button is clicked, the player's chosen character and the 
//generated enemy should attack with their weapon
//
function inflictDamage() {
  
  alert("damage!")
}


//evt listener for attack button--WORKS//
$("#attackBtn").click(inflictDamage);
// $(".card--battleground").keypress(function (e) {
//   // if ( === 32) {
//     alert("spaceAttack")
//   // }
//   })

//

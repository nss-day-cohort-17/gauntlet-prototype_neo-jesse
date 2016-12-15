
var newPlayer;

var newPlayerName;

var newPlayerClass;

      var orc = new Gauntlet.Combatants.Orc();
      orc.generateClass();
      orc.setWeapon(new Gauntlet.Armory.Broadsword());


      // var warrior = new Gauntlet.Combatants.Human();
      // newPlayer.setWeapon(new Gauntlet.Armory.Waraxe());
      // warrior.generateClass();  // This will be used for "Surprise me" option
      // console.log(warrior.toString());



// console.log(Gauntlet.)

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

     newPlayerName = $('#player-name').val();

      switch (nextCard) {
      case "card--character":
        moveAlong = ($("#player-name").val() !== "");
        break;
      case "card--weapon":
        moveAlong = ($("#player-name").val() !== "");
        // newPlayer = new Gauntlet.GuildHall.Sorcerer();
        // console.log(newPlayer)
        break;
      case "card--class":
        moveAlong = ($("player-name").val() !== "");
        newPlayer = new Gauntlet.Combatants.Player(newPlayerName);
        console.log(newPlayer)
        break
      case 'card--battleground':
        moveAlong = ($("#player-name").val() !== "");
        // newPlayer.weapon = WarAxe;
        console.log(newPlayer)
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

    var startingHealth = newPlayer.health + newPlayer.species.healthBonus

    var enemyHealth = orc.health;

   $('#health').val(startingHealth);

   $('#enemyHealth').val(enemyHealth);

   document.getElementById('myInfo').innerHTML = `(User)Name: ${newPlayer.playerName} Type: ${newPlayer.species.name} Weapon: ${newPlayer.weapon.name}`
   document.getElementById('enemyInfo').innerHTML = `Enemy: Type: ${orc.species} Weapon: ${orc.weapon.name}`


      console.log(newPlayer);

      newPlayer.setWeapon(new Gauntlet.Armory.Waraxe());
      console.log(orc)


   }



  });

 
  $(".class__button").click(function(e) {
    if ($(this).hasClass('stealthClass') === true) {
      $('#character-select').show('slow');
      $('#classSelect').hide();
      $('.fighter').hide();
      $('.magical').hide();
      $('.stealth').show();
    }
    if ($(this).hasClass('fighterClass') === true) {
      $('#character-select').show('slow');
      $('#classSelect').hide();
      $('.fighter').show();
      $('.magical').hide();
      $('.stealth').hide();
    }
    if ($(this).hasClass('magicalClass') === true) {
      $('#character-select').show('slow');
      $('#classSelect').hide();
      $('.fighter').hide();
      $('.magical').show();
      $('.stealth').hide();
    }
  })

  //   $('.class__button').click(function (e) {
  //   var typeText = this.innerText.slice(1);
  //   var newTypeText = typeText.toLowerCase();
  //   newTypeText = newTypeText.charAt(0).toUpperCase() + newTypeText.slice(1);
  //   console.log(newTypeText)
  //   newPlayer.class = new Gauntlet.GuildHall[newTypeText];
  // })

  $('.type').click(function (e) {
    var typeText = this.innerText.slice(1);
    var newTypeText = typeText.toLowerCase();
    newTypeText = newTypeText.charAt(0).toUpperCase() + newTypeText.slice(1);
    newPlayer.species = new Gauntlet.GuildHall[newTypeText];
  })

 $('.weapon__button').click(function (e) {
    var typeText = this.innerText.slice(2);
    var newTypeText = typeText.toLowerCase();
    newTypeText = newTypeText.charAt(0).toUpperCase() + newTypeText.slice(1);
    newPlayer.weapon = new Gauntlet.Armory[newTypeText];
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


/*
  Test code to generate a spell
 */



//Battle function for Human//
//Each time the attack button is clicked, the player's chosen character and the 
//generated enemy should attack with their weapon
//
var damageInflicted;
var damageReceived;
var attack;
function inflictDamage() {


}
//damage received is a function of the weapon
//odds of getting hit are a function of intelligence
//starting health newPlayer.health



//once the damage is calculated, subtract that from the opponents' health


//evt listener for attack button--WORKS//
$("#attackBtn").click(inflictDamage);

$('.card--battleground').keypress(function (e) {
  if (this.keyCode === 32) {
    alert("spaceAttack")
  }
  })

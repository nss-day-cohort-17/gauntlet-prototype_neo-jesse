
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
        break;
      case "card--class":
        moveAlong = ($("player-name").val() !== "");
        newPlayer = new Gauntlet.Combatants.Player(newPlayerName);
        console.log(newPlayer)
        break
      case 'card--battleground':
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

    var startingHealth = newPlayer.health + newPlayer.species.healthBonus

    var enemyHealth = orc.health;

   $('#health').val(startingHealth);

   $('#enemyHealth').val(enemyHealth);

   document.getElementById('myInfo').innerHTML = `Name: ${ newPlayer.playerName } Type: ${ newPlayer.species.name } Weapon: ${ newPlayer.weapon.name }`
   document.getElementById('enemyInfo').innerHTML = `Enemy: Type: ${ orc.species } Weapon: ${ orc.weapon.name }`



      console.log(newPlayer);
      console.log(orc)

          $('.battle-screen').hide();
          $('.versus-screen').html(`${newPlayer.playerName} VS ${orc.species}`)

      setTimeout(function() {
          $('.versus-screen').hide();
          $('.battle-screen').show();
          battle();
      }, 7000)

    // var orc = new Gauntlet.Combatants.Orc();
    //   orc.generateClass();
    //   orc.setWeapon(new Gauntlet.Armory.Broadsword());
    //   console.log(orc.toString());
      // console.log(orc)

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
//healthpoints is health plus healthbonus which can be negative
  var healthPoints = newPlayer.health + newPlayer.species.healthBonus;

    //damage to enemy is ((strength + strengthBonus) divided by weapon damage)
    // times 2
    var damageInflicted = ((newPlayer.species.strengthBonus +
    newPlayer.strength) / (newPlayer.weapon.damage)) * 2;

//damage received is same formula for given, will change based on chars of
//enemy
    // var damageReceived = orc.weapon / whatever

    orc.health = orc.health - newPlayer.weapon.damage

    $('#enemyHealth').val(orc.health)
    $('#attackBtn').prop('disabled', true);
    setTimeout(function() {
      $('#attackBtn').prop('disabled', false);
    }, 1500)

    var attackSuccess = newPlayer.intelligence;

 if (healthPoints === 0) {
  $("#attackBtn").button("disable");
  alert("Better luck next time, loser");
 // } else if {

  }
}

$("#attackBtn").click(inflictDamage);

//once the damage is calculated, subtract that from the opponents' health


//evt listener for attack button--WORKS//

// orc attack once battle starts

function endGame () {
  if (newPlayer.health <= 0) {
    $('.card--battleground').html(`<span class='youLose versus'>${orc.species} WINS</span>`)
  } else if (orc.health <= 0) {
    $('.card--battleground').html(`<span class='youWin versus'>${newPlayer.playerName} WINS</span>`)
  }
}

function battle () {

  // hide vs screen

function orcAttack() {

  $('.battle-screen').addClass('battle-screen-hit');
  setTimeout(function () {
    $('.battle-screen').removeClass('battle-screen-hit');
      endGame();

  }, 500);

  newPlayer.health = newPlayer.health - orc.weapon.damage

  $('#health').val(newPlayer.health)

}

(function loop() {
    var rand = Math.round(Math.random() * (3000 - 500)) + 1000;
    setTimeout(function() {
            orcAttack();
            loop();
    }, rand);
}());

}




$('.card--battleground').keypress(function (e) {
  if (this.keyCode === 32) {
    alert("spaceAttack")
  }
  })

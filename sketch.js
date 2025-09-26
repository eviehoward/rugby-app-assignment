var teamOfPlayers;

function createTeam() {
  teamOfPlayers = new Team(document.getElementById("maxPlayers").value);

  closeMenu();
  document.getElementById("maxPlayers").value = ""; //clear selection
}

function hideMenus() {
  var menus = [
    "promptMenu",
    "mainMenu",
    "addPlayerMenu",
    "addRatingsMenu",
    "addSquadMenu",
    "removeSquadMenu",
    "listAllPlayersMenu",
    "listCurrentSquadMenu",
    "listWithGreaterAveragesMenu",
    "listWithAveragesMenu",
    "displayPlayerAverageMenu",
    "displayPlayerLowestAverageMenu",
    "displayPlayerHighestAverageMenu",
    "list"
  ];
  for (var i = 0; i < menus.length; i++) {
    document.getElementById(menus[i]).classList.add("hidden");
  }
}

function closeMenu() {
  //hides menus and shows main menu
  hideMenus();
  document.getElementById("mainMenu").classList.remove("hidden");
}

function mainMenuSelection() {
  if (document.getElementById("addPlayer").checked) {
    hideMenus();
    document.getElementById("addPlayerMenu").classList.remove("hidden");
  } else if (document.getElementById("addRatings").checked) {
    list();
    document.getElementById("addRatingsMenu").classList.remove("hidden");
  } else if (document.getElementById("addPlayerToSquad").checked) {
    list();
    document.getElementById("addSquadMenu").classList.remove("hidden");
  } else if (document.getElementById("removePlayerFromSquad").checked) {
    list();
    document.getElementById("removeSquadMenu").classList.remove("hidden");
  } else if (document.getElementById("listAllPlayers").checked) {
    list();
    document.getElementById("listAllPlayersMenu").classList.remove("hidden");
  } else if (document.getElementById("listCurrentSquad").checked) {
    document.getElementById("listForCurrentSquad").innerHTML = teamOfPlayers.listCurrentPlayers();
    document.getElementById("listCurrentSquadMenu").classList.remove("hidden");
  } else if (document.getElementById("listWithGreaterAverages").checked) {
    document.getElementById("listWithGreaterAveragesMenu").classList.remove("hidden");
  } else if (document.getElementById("listWithAverages").checked) {
    document.getElementById("listForWithAverages").innerHTML = teamOfPlayers.listOfPlayerWithAverageRating();
    document.getElementById("listWithAveragesMenu").classList.remove("hidden");
  } else if (document.getElementById("displayPlayerAverage").checked) {
    document.getElementById("averageRating").innerHTML = teamOfPlayers.averageOfPlayersAvgRating();
    document.getElementById("displayPlayerAverageMenu").classList.remove("hidden");
  } else if (document.getElementById("lowestAverageRating").checked) {
    document.getElementById("playerLowestAverage").innerHTML = teamOfPlayers.playerWithLowestAverageRating();
    document.getElementById("displayPlayerLowestAverageMenu").classList.remove("hidden");
  } else if (document.getElementById("highestAverageRating").checked) {
    document.getElementById("playerHighestAverage").innerHTML = teamOfPlayers.playerWithHighestAverageRating();
    document.getElementById("displayPlayerHighestAverageMenu").classList.remove("hidden");
  } else if (document.getElementById("exit").checked) {
    hideMenus();
    document.getElementById("promptMenu").classList.remove("hidden");
  }
}

function list() {
  document.getElementById("list").innerHTML = teamOfPlayers.listPlayers();
  document.getElementById("list").classList.remove("hidden");
}

function addPlayer() {
  var name = document.getElementById("playerName").value;
  var playerNumber = document.getElementById("playerNumber").value;
  var currentSquadMember = false; //default value

  if (document.getElementById("yes").checked) {
    currentSquadMember = true;
  }

  player = new Player(name, currentSquadMember, playerNumber);

  teamOfPlayers.addPlayer(player);

  document.getElementById("playerName").value = "";
  document.getElementById("playerNumber").value = "";
  document.getElementById("yes").checked = false;
  document.getElementById("no").checked = false; //clears selection

  closeMenu();
}

function addPlayerRatings() {
  var ratings = ["firstRating", "secondRating", "thirdRating", "fourthRating", "fifthRating", "sixthRating"];
  for (var i = 0; i < ratings.length; i++) {
    teamOfPlayers.players[document.getElementById("choosePlayerRatings").value].addRating(
      i,
      document.getElementById(ratings[i]).value
    );
    document.getElementById(ratings[i]).value = ""; //clears selection
  }
  closeMenu();
  document.getElementById("choosePlayerRatings").value = ""; //clears selection
}

function addPlayerToSquad() {
  var result = "";
  var bool = teamOfPlayers.players[document.getElementById("choosePlayerSquadAdd").value].currentSquadMember;

  if (!bool) {
    //if player not on squad
    teamOfPlayers.players[document.getElementById("choosePlayerSquadAdd").value].currentSquadMember = true;
    result = "Player added.";
  } else if (bool) {
    result = "This player is already on the squad!";
  }

  document.getElementById("addSquadDone").innerHTML = result;
  document.getElementById("choosePlayerSquadAdd").value = ""; //clear selection
}

function removePlayerFromSquad() {
  var result = "";
  var bool = teamOfPlayers.players[document.getElementById("choosePlayerSquadRemove").value].currentSquadMember;
  if (bool) {
    //if player is on squad
    teamOfPlayers.players[document.getElementById("choosePlayerSquadRemove").value].currentSquadMember = false;
    result = "Player removed.";
  } else if (!bool) {
    result = "This player is not on the squad!";
  }

  document.getElementById("removeSquadDone").innerHTML = result;
  document.getElementById("choosePlayerSquadRemove").value = ""; //clear selection
}

function searchGivenAverage() {
  document.getElementById("listForWithGreaterAverages").innerHTML = teamOfPlayers.listPlayersAboveGivenAverageRating(document.getElementById("givenAverage").value);
  document.getElementById("listForWithGreaterAverages").classList.remove("hidden");
}

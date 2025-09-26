class Team {
  //declare class fields
  #players;
  #total;

  //class constructor
  constructor(total, players = []) {
    this.#total = total;
    this.#players = players;
  }

  //getters and setters
  get players() {
    return this.#players;
  }

  set players(players) {
    this.#players = players;
  }

  get total() {
    return this.#total;
  }

  set total(total) {
    if (total >= 0 && total <= 40) {
      this.#total = total;
    } else {
      this.#total = 40;
    }
  }

  addPlayer(player) {
    if (this.players.length <= this.total) {
      this.#players.push(player);
    }
  }

  //listing methods
  listPlayers() {
    if (!this.isEmpty()) {
      var text = "List of Players :<br>";
      for (var i = 0; i < this.#players.length; i++) {
        text = text + i + ": " + this.#players[i].toString() + " <br>";
      }
      return text;
    }
  }

  listCurrentPlayers() {
    if (!this.isEmpty()) {
      var text = "List of Current Players :<br>";
      for (var i = 0; i < this.#players.length; i++) {
        if (this.#players[i].currentSquadMember) {
          text = text + i + ": " + this.#players[i].toString() + " <br>";
        }
      }

      return text;
    }
  }

  listOfPlayerWithAverageRating() {
    if (!this.isEmpty()) {
      var text = "List of Players with their Average Ratings :<br>";
      for (var i = 0; i < this.#players.length; i++) {
        var totalRating = 0;
        var averageRating = 0;
        for (var j = 0; j < this.#players[i].ratings.length; j++) {
          totalRating += this.#players[i].ratings[j];
        }
        averageRating = Math.round(totalRating / this.#players[i].ratings.length);
        text = text + i + ": " + this.#players[i].name + " , average rating: " + averageRating + "<br>";
      }
      return text;
    }
  }

  listPlayersAboveGivenAverageRating(minimum) {
    if (!this.isEmpty()) {
      var text = "List of Players with an average rating greater than " + minimum + " : <br>";
      for (var i = 0; i < this.#players.length; i++) {
        var totalRating = 0;
        var averageRating = 0;
        for (var j = 0; j < this.#players[i].ratings.length; j++) {
          totalRating = totalRating + this.#players[i].ratings[j];
        }
        averageRating = Math.round(totalRating / this.#players[i].ratings.length);
        if (averageRating > minimum) {
          text = text + i + ": " + this.#players[i].toString() + "<br>";
        }
      }
      return text;
    }
  }

  playerWithLowestAverageRating() {
    var totalRatings = 0;
    if (!this.isEmpty()) {
      for (var i = 0; i < this.#players[0].ratings.length; i++) {
        totalRatings = totalRatings + this.#players[0].ratings[i];
      }
      var average = Math.round(totalRatings / this.#players[0].ratings.length);
      var lowestAverage = average;
      var playerWithLowestAverage = this.#players[0];

      for (var i = 1; i < this.#players.length; i++) {
        totalRatings = 0;
        for (var j = 0; j < this.#players[i].ratings.length; j++) {
          totalRatings = totalRatings + this.#players[i].ratings[j];
        }
        average = Math.round(totalRatings / this.#players[i].ratings.length);
        if (average < lowestAverage) {
          lowestAverage = average;
          playerWithLowestAverage = this.#players[i];
        }
      }
      return playerWithLowestAverage.toString();
    } else {
      return null;
    }
  }

  playerWithHighestAverageRating() {
    var totalRatings = 0;
    if (!this.isEmpty()) {
      for (var i = 0; i < this.#players[0].ratings.length; i++) {
        totalRatings = totalRatings + this.#players[0].ratings[i];
      }
      var average = Math.round(totalRatings / this.#players[0].ratings.length);
      var highestAverage = average;
      var playerWithHighestAverage = this.#players[0];

      for (var i = 1; i < this.#players.length; i++) {
        totalRatings = 0;
        for (var j = 0; j < this.#players[i].ratings.length; j++) {
          totalRatings = totalRatings + this.#players[i].ratings[j];
        }
        average = Math.round(totalRatings / this.#players[i].ratings.length);
        if (average > highestAverage) {
          highestAverage = average;
          playerWithHighestAverage = this.#players[i];
        }
      }
      return playerWithHighestAverage.toString();
    } else {
      return null;
    }
  }

  averageOfPlayersAvgRating() {
    var totalRatings = 0;
    var averageRating = 0;
    for (var i = 0; i < this.#players.length; i++) {
      for (var j = 0; j < 6; j++) {
        totalRatings = totalRatings + this.#players[i].ratings[j];
      }
    }
    averageRating = Math.round(totalRatings / (this.#players.length * 6));
    return averageRating;
  }

  deRegisterPlayer(indexToDeRegister) {
    if (indexToDeRegister >= 0 && indexToDeRegister < this.#players.length) {
      if (this.players[indexToDeRegister].currentSquadMember) {
        return this.players.splice(indexToDeRegister, 1);
      } else {
        return null;
      }
    } else {
      return null;
    }
  }

  isEmpty() {
    if (this.#players.length > 0) {
      return false;
    } else {
      return true;
    }
  }
}

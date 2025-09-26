class Player {
  //declare class fields
  #name;
  #playerNumber;
  #ratings;
  #currentSquadMember;

  //declare class constructor
  constructor(name, currentSquadMember = false, playerNumber = 23) {
    this.name = name;
    this.currentSquadMember = currentSquadMember;
    this.playerNumber = playerNumber;
    this.#ratings = [];
  }

  //declare getters and setters
  get name() {
    return this.#name;
  }

  set name(name) {
    if (name.length > 20) {
      name = name.substring(0, 20);
    }
    this.#name = name;
  }

  get playerNumber() {
    return this.#playerNumber;
  }

  set playerNumber(playerNumber = 23) {
    if (playerNumber >= 1 && playerNumber <= 23) {
      this.#playerNumber = playerNumber;
    } else {
      this.#playerNumber = 23;
    }
  }

  get ratings() {
    return this.#ratings;
  }

  set ratings(ratings) {
    if (ratings.length == 6) {
      for (var i = 0; i < 6; i++) {
        if (ratings[i] >= 0 && ratings[i] <= 5) {
          this.#ratings.push(ratings[i]);
        } else {
          this.#ratings.push(0);
        }
      }
    }
  }

  get currentSquadMember() {
    return this.#currentSquadMember;
  }

  set currentSquadMember(csm = false) {
    this.#currentSquadMember = csm;
  }

  //class methods
  toString() {
    var txt =
      "Player details:  Name : " +
      this.name +
      ", player number: " +
      this.playerNumber +
      ", ratings:  ";
    
    if(!this.isEmpty()) {
      txt = txt + "Ratings  ";
      for (var i=0; i<6; i++) {
      txt = txt + " : " + this.ratings[i];
      }
    } else {
      txt = txt + "unassigned";
    }
    
    if (this.currentSquadMember) {
      txt = txt + ", and is a current squad member.";
    } else {
      txt = txt + ", and is currently not a squad member.";
    }
    return txt;
    
    
  }

  addRating(index, rating) {
    if(rating>=0 && rating<=5) {
      this.#ratings[index] = Number(rating);
    }
    else {
      this.#ratings[index] = 0;
    }
  }
  
  isEmpty() { //check if ratings have been assigned yet
    if (this.ratings.length > 0) {
      return false;
    } else {
      return true;
    }
  }
}

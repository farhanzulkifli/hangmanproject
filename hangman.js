// the data
class Word {
  //constructor made
  constructor(text, Category, Hint) {
    this.text = text;
    this.Category = Category;
    this.Hint = Hint;
  }
}
const allwords = []; //function to make words and put them into an array
const makefunc = (text, category, hint) => {
  const wordmaker = new Word(text, category, hint);
  allwords.push(wordmaker);
};
makefunc("Cambodia", "Country", "SEA"); //putting words into the array using the functions
makefunc("Engl-nd", "Country", "Europe");
makefunc("Ghana", "Country", "Africa");
makefunc("David Liew", "Famous People", "Handsome man in class");
makefunc("David Beck'ham", "Famous People", "Ex-Footballer");
makefunc("Hermione/ Granger", "Famous People", "Harry Potter");

const alphabets = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

  //Start Page
const start = () => {
  const body = $("body");
  body.append(
    $("<div>").attr("class", "container").attr("id", "starttextdiv").text("HANG THE FARHAN")
  );
  body.append(
    $("<div>").attr("class", "container").attr("id", "startbuttondiv")
  );
  $("#startbuttondiv").append($("<button>").attr("id", "startbutton").text("LET'S HANG OUT"))
  
  $("#startbutton").on("click", () => {
    $("body").empty();
    $(main);
  })
}

//Game Score
let hangmanscore = 0;

const main = () => {
  //Structuring the containers
  const body = $("body");

  body.append(
    $("<div>").attr("class", "container").attr("id", "wordcontainer")
  );
  body.append(
    $("<div>").attr("class", "container").attr("id", "categorycontainer")
  );
  body.append(
    $("<div>").attr("class", "container").attr("id", "hintcontainer")
  );
  body.append(
    $("<div>").attr("class", "container").attr("id", "buttoncontainer")
  );
  body.append(
    $("<div>").attr("class", "container").attr("id", "livescontainer")
  );
  body.append(
    $("<div>").attr("class", "container").attr("id", "hangmancontainer")
  );
  body.append(
    $("<div>").attr("class", "container").attr("id", "restartcontainer")
  );
  //Random word to be generated in

  const randomobject = allwords[Math.floor(Math.random() * allwords.length)];

  // Split the guess text
  const textsplit = randomobject.text.toUpperCase().split("");
  //putting the guess text in container
  for (i = 0; i < textsplit.length; i++) {
    let textfill;
    if (textsplit[i] === " ") {
      textfill = "SPACE";
    } 
    else if (textsplit[i] === "'") {
      textfill = "APOSTROPHE";
    }
    else if (textsplit[i] === "/") {
      textfill = "SLASH";
    }
    else {
      textfill = textsplit[i];
    }
    $("#wordcontainer").append(
      $("<div>")
        .attr("class", textfill)
        .text(textsplit[i])
        .addClass("guessletters")
    );
  }

  //putting the hints and categories in container
  $("#categorycontainer").append($("<div>").attr("class", "boxes").attr("id", "categorydiv").text("Category")
  );
  $("#categorycontainer").append($("<div>").attr("class", "boxes").attr("id", "categoryans").text(randomobject.Category)
  );
  $("#hintcontainer").append($("<div>").attr("class", "boxes").attr("id", "hintdiv").text("Hint")
  );
  $("#hintcontainer").append($("<div>").attr("class", "boxes").attr("id", "hintans").text(randomobject.Hint)
  );

  //putting the buttons into the container
  for (i = 0; i < alphabets.length; i++) {
    $("#buttoncontainer").append(
      $("<button>")
        .attr("id", "button" + alphabets[i])
        .text(alphabets[i])
        .attr("class", "buttongang")
    );
  }
  //putting hangman pictures into the container
  const pictures = [
    "pics/startingpic.jpeg",
    "pics/floor.jpeg",
    "pics/pole1.jpeg",
    "pics/pole2.jpeg",
    "pics/head.jpeg",
    "pics/body.jpeg",
    "pics/legs.jpeg",
    "pics/arms.jpeg",
  ];
  $("#hangmancontainer").append('<img id="hangman"/>');
  $("#hangman").attr("src", pictures[0]);

  //turning letters into spaces( ),dashes(-) and underscores(_)
  $(".guessletters").text("_");
  $(".SPACE").text(" ");
  $(".-").text("-");
  $(".APOSTROPHE").text("'");
  $(".SLASH").text("/");
  // $(".'").text("'");

  //putting the lives text
  $("#livescontainer").append(
    "CAN'T TOUCH THIS BOIS." +
      " " +
      (pictures.length - 1 - hangmanscore) +
      " more lives to go!"
  );

  //onclick button
  $(".buttongang").on("click", (event) => {
    const target = event.currentTarget; //targeting the button
    const buttontext = $(target).text(); //getting the text of that button
    if ($(`.${buttontext}`).length > 0) {
      //searching for the SAME CLASS of the TEXT of the button using interpolation eg. searching for class A when button text is A
      $(`.${buttontext}`).text(buttontext); //if length is more than 0, which means the search is true, the text of that class will change (since its an _)
    } else {
      hangmanscore += 1; //hangman score goes up by 1
      $("#livescontainer").text(
        "YOU NOOB TRASH! " +
          (pictures.length - 1 - hangmanscore) +
          " more lives to go!"
      ); //live texts change
      $("#hangman").attr("src", pictures[hangmanscore]); //hangman will appear part by part
    }
    $(target).attr("disabled", true); //buttons that are clicked, can't be clicked again
    if (hangmanscore === pictures.length - 1) {
      //lose function,
      $("#livescontainer").text("HE'S DEAD YOU DODO"); // live text changes
      $(".buttongang").attr("disabled", true); //turning off ALL buttons
    }
    const check = $(".guessletters").text().includes("_"); //win condition
    if (check === false) {
      $("#livescontainer").text("HE'S ALIIIVEEE");
      $(".buttongang").attr("disabled", true); //turning off All buttons
    }
  });
  console.log(randomobject.text);
  $("#restartcontainer").append(
    $("<button>").attr("id", "mainmenu").text("Main Menu")
  );
  $("#mainmenu").on("click", () => {
    $("body").empty(); //clearing the body
    $(start);
  });
  $("#restartcontainer").append(
    $("<button>").attr("id", "restartbutton").text("Hang Again")
  ); //making the reset button
  $("#restartbutton").on("click", () => {
    $("body").empty(); //clearing the body
    hangmanscore = 0; //reset hangman score
    $(main);
  });
};
$(start);

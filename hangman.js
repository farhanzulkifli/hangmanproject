const country = [
  { text: "Cambodia", category: "Country", hint: "Southeast Asia" },
  { text: "England", category: "Country", hint: "Europe" },
  { text: "Ghana", category: "Country", hint: "Africa" },
];

const famousPeople = [
  {
    text: "Hermione Granger",
    category: "Famous People",
    hint: "Wingardium Levi'O'sa",
  },
  {
    text: "Roger Federer",
    category: "Famous People",
    hint: "Possibly the best tennis player of all time",
  },
  {
    text: "David Liew",
    category: "Famous People",
    hint: "Most handsome man in class",
  },
];
const alcohol = [
  {
    text: "Soju Bomb",
    category: "Alcohol",
    hint: "You think it's a sweet drink... And then it hits you like a bloody train.",
  },
  { text: "Vesper Martini", category: "Alcohol", hint: "Double OO7" },
  {
    text: "Sangria",
    category: "Alcohol",
    hint: "Spanish/Portuguese delight, lots of fruits",
  },
];
const useradded = [];

const allwords = useradded.concat(alcohol, famousPeople, country);
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
    $("<div>")
      .attr("class", "container")
      .attr("id", "starttextdiv")
      .text("HANG THE MAN")
  );
  body.append(
    $("<div>").attr("class", "container").attr("id", "startbuttondiv")
  );
  $("#startbuttondiv").append(
    $("<button>").attr("id", "startbutton").text("LET'S HANG OUT")
  );

  $("#startbutton").on("click", () => {
    $("body").empty();
    $(main);
  });
};

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
    } else if (textsplit[i] === "'") {
      textfill = "APOSTROPHE";
    } else if (textsplit[i] === "/") {
      textfill = "SLASH";
    } else {
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
  $("#categorycontainer").append(
    $("<div>").attr("class", "boxes").attr("id", "categorydiv").text("Category")
  );
  $("#categorycontainer").append(
    $("<div>")
      .attr("class", "boxes")
      .attr("id", "categoryans")
      .text(randomobject.category)
  );
  $("#hintcontainer").append(
    $("<div>").attr("class", "boxes").attr("id", "hintdiv").text("Hint")
  );
  $("#hintcontainer").append(
    $("<div>")
      .attr("class", "boxes")
      .attr("id", "hintans")
      .text(randomobject.hint)
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
    "pics/floor.jpeg",
    "pics/pole1.jpeg",
    "pics/pole2.jpeg",
    "pics/head.jpeg",
    "pics/body.jpeg",
    "pics/legs.jpeg",
    "pics/arms.jpeg",
  ];
  const miscpictures = ["misc/startingpic.jpeg"];

  const meme = [
    "meme/baby.jpg",
    "meme/coding.jpg",
    "meme/doctor.jpg",
    "meme/flert.jpg",
    "meme/hammer.jpg",
    "meme/maths.jpg",
    "meme/popcorn.jpg",
    "meme/predator.jpg",
    "meme/scissors.jpg",
    "meme/shoot.jpg",
    "meme/smoke.jpg",
    "meme/soju.jpg",
    "meme/spies.jpg",
    "meme/tattoo.jpg",
    "meme/toilet.jpg",
    "meme/watch.jpg",
    "meme/xiaomi.jpg"
  ];

  $("#hangmancontainer").append('<img id="hangman"/>');
  $("#hangman").attr("src", miscpictures[0]);

  //turning letters into spaces( ),dashes(-) and underscores(_)
  $(".guessletters").text("_");
  $(".SPACE").text(" ");
  $(".-").text("-");
  $(".APOSTROPHE").text("'");
  $(".SLASH").text("/");
  // $(".'").text("'");

  //putting the lives text
  $("#livescontainer").append(
    "WE OK BOISSSS." +
      " " +
      (pictures.length - hangmanscore) +
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
          (pictures.length - hangmanscore) +
          " more lives to go!"
      ); //live texts change
      $("#hangman").attr("src", pictures[hangmanscore - 1]); //hangman will appear part by part
    }
    $(target).attr("disabled", true); //buttons that are clicked, can't be clicked again
    if (hangmanscore === pictures.length) {
      //lose function,
      $("#livescontainer").text("HE'S DEAD YOU DODO"); // live text changes
      $(".buttongang").attr("disabled", true); //turning off ALL buttons
    }
    const check = $(".guessletters").text().includes("_"); //win condition
    if (check === false) {
      $("#livescontainer").text("HE'S ALIIIVEEE");
      $("#hangmancontainer").append('<img id="winhangman"/>');
      $("#hangman").attr("src", meme[Math.floor(Math.random() * meme.length)]);
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

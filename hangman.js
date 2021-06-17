//Game Data and words
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
//Game Score
let hangmanscore = 0;
let choice = 0

//Start Page
const start = () => {
  const body = $("body");
  body.append(
    $("<div>")
      .attr("class", "container")
      .attr("id", "starttextdiv")
      .text("Hey")
  );
  body.append(
    $("<div>").attr("class", "container").attr("id", "startbuttondiv")
  );
  $("#startbuttondiv").append(
    $("<button>").attr("id", "startbutton").text("Let's Hang").addClass("custom-btn")
  );
  $("#startbutton").on("click", () => {
    $("body").empty();
    $(categorypage);
  });
};
 // 2nd page
const categorypage = () => {
  const body = $("body");
  body.append(
    $("<div>")
      .attr("class", "container")
      .attr("id", "choosecatdiv")
      .text("Choose your poison")
  );
  body.append(
    $("<div>").attr("class", "container").attr("id", "choicesdiv")
  );
  $("#choicesdiv").append(
    $("<button>").attr("id", "allwordsbutton").text("All words").addClass("custom-btn")
  );
  $("#allwordsbutton").on("click", () => {
    $("body").empty();
    $(main);
    choice = allwords
  });
  $("#choicesdiv").append(
    $("<button>").attr("id", "countrybutton").text("Countries").addClass("custom-btn")
  );
  $("#countrybutton").on("click", () => {
    $("body").empty();
    $(main);
    choice = country
  });
  $("#choicesdiv").append(
    $("<button>").attr("id", "peoplebutton").text("Famous People").addClass("custom-btn")
  );
  $("#peoplebutton").on("click", () => {
    $("body").empty();
    $(main);
    choice = famousPeople
  });
  $("#choicesdiv").append(
    $("<button>").attr("id", "alcoholbutton").text("Alcohol").addClass("custom-btn")
  );
  $("#alcoholbutton").on("click", () => {
    $("body").empty();
    $(main);
    choice = alcohol
  });
  $("#choicesdiv").append(
    $("<button>").attr("id", "useraddedbutton").text("User Added").addClass("custom-btn")
  );
  $("#useraddedbutton").on("click", () => {
    if (useradded.length <= 0){
    $("#useraddedsuccessfully").empty()
    $("#useraddedsuccessfully").text("You swine! The 'User Added' library is empty. ADD SOMETHING MAYBE?? ")
    }
    else{
    $("body").empty();
    $(main);
    choice = useradded
    }
  });
  body.append(
    $("<div>")
      .attr("class", "container")
      .attr("id", "addstuffdiv1")
      .text("or perhaps... create your own?")
  );
  body.append(
    $("<div>")
      .attr("class", "container")
      .attr("id", "addstuffdiv2")
      .text("(stuff here will be added to 'User Added' Category)")
  );
  body.append(
    $("<div>")
      .attr("class", "container")
      .attr("id", "submitstuff")
  );
  $("#submitstuff").append(
    $("<input>")
      .attr("class", "container")
      .attr("class", "inputbox")
      .attr("id", "textinput1")
      .attr("placeholder", "your text little hoe")
  );
  $("#submitstuff").append(
    $("<input>")
      .attr("class", "container")
      .attr("class", "inputbox")
      .attr("id", "textinput2")
      .attr("placeholder", "your category ma bro")
  );
  $("#submitstuff").append(
    $("<input>")
      .attr("class", "container")
      .attr("class", "inputbox")
      .attr("id", "textinput3")
      .attr("placeholder", "your hint you sick troll")
  );
  $("#submitstuff").append(
    $("<input/>")
      .attr("type", 'submit')
      .attr("id",'submitbutton')
      .text('Hang!')
  );
  body.append(
    $("<div>")
      .attr("class", "container")
      .attr("id", "useraddedsuccessfully")
  );

  $("#submitbutton").on("click", () => {

    class Build {
      constructor(text,category,hint){
          this.text = text
          this.category = category
          this.hint = hint
      }
    }
  const maker = new Build($("#textinput1").val(),$("#textinput2").val(),$("#textinput3").val())
  
  if ($("#textinput1").val() !== ""){
    useradded.push(maker)
    $("#useraddedsuccessfully").empty()
    $("#useraddedsuccessfully").text("Hang Successful!")
    $(".inputbox").val(null)
    const hangsuccess = new Audio("sound/nice.mp3")
    hangsuccess.play();
  }
    else{
      $("#useraddedsuccessfully").empty()
      $("#useraddedsuccessfully").text("You're obviously a disappointment. Type something in the text box, muggle.")
      const hangfail = new Audio("sound/allahuakbar.mp3")
      hangfail.play();
    }
  })
}

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
    $("<div>").attr("class", "container").attr("id", "timercontainer")
  );
  body.append(
    $("<div>").attr("class", "container").attr("id", "hangmancontainer")
  );
  body.append(
    $("<div>").attr("class", "container").attr("id", "restartcontainer")
  );
  //Random word to be generated in

  const randomobject = choice[Math.floor(Math.random() * choice.length)];

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
    } else if (textsplit[i] === "?") {
      textfill = "QMARK";
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
  $(".QMARK").text("?");

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
      const lose = new Audio("sound/nani.mp3")
      lose.play();
    }
    const check = $(".guessletters").text().includes("_"); //win condition
    if (check === false) {
      $("#livescontainer").text("HE'S ALIIIVEEE");
      $("#hangmancontainer").append('<img id="winhangman"/>');
      $("#hangman").attr("src", meme[Math.floor(Math.random() * meme.length)]);
      const victory = new Audio("sound/FF7victory.mp3")
      setTimeout(() => {
        victory.play();
        setTimeout(() => {
            victory.pause();
            victory.currentTime = 0;
        }, 5000);
    }, 0);
      $(".buttongang").attr("disabled", true); //turning off All buttons
    }
  });
  $("#restartcontainer").append(
    $("<button>").attr("id", "mainmenu").text("Main Menu").addClass("custom-btn")
  );
  $("#mainmenu").on("click", () => {
    $("body").empty(); //clearing the body
    $(start);
    hangmanscore = 0; //reset hangman score
    choice = 0
  });
  $("#restartcontainer").append(
    $("<button>").attr("id", "restartbutton").text("Hang Again").addClass("custom-btn")
  ); //making the reset button
  $("#restartbutton").on("click", () => {
    $("body").empty(); //clearing the body
    hangmanscore = 0; //reset hangman score
    $(main);
  });
let counter = 31;
const interval = setInterval(() => {
    counter--;
    $("#timercontainer").append(counter)// Display 'counter' wherever you want to display it.
    if (counter === 0) {
        alert("counter")
        clearInterval(interval);
    }
}, counter*100);
  console.log(randomobject.text)
};
$(start);
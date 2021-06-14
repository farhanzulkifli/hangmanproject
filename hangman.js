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
makefunc("Cambodia", "Country", "SEA");//putting words into the array using the functions
makefunc("England", "Country", "Europe");
makefunc("Ghana", "Country", "Africa");
makefunc("David Liew", "Famous People", "Handsome man in class");
makefunc("David Backham", "Famous People", "Ex-Footballer");
makefunc("Hermione Granger", "Famous People", "Harry Potter");

console.log(allwords)

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
  "X",
  "Y",
  "Z",
];

//Game Switch and score
let hangmanscore = 0;

const main = () => {
  // let gameswitch = true
  // if (gameswitch === true){

  //HTML Structure

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
  //Random word to be generated in

const randomobject = allwords[Math.floor(Math.random()*allwords.length)]

  // Split the guess text
  const textsplit = randomobject.text.toUpperCase().split("");
  //putting the guess text in container
  for (i = 0; i < textsplit.length; i++) {
    $("#wordcontainer").append(
      $("<div>")
        .attr("class", textsplit[i])
        .text(textsplit[i])
        .addClass("guessletters")
    );
  }

  //putting the hints and categories in container
  $("#categorycontainer").append(
    $("<div>")
      .attr("class", "boxes")
      .attr("id", "categorydiv")
      .text("Category")
  );
  $("#categorycontainer").append(
    $("<div>")
      .attr("class", "boxes")
      .attr("id", "categoryans")
      .text(randomobject.Category)
  );
  $("#hintcontainer").append(
    $("<div>")
      .attr("class", "boxes")
      .attr("id", "hintdiv")
      .text("Hint")
  );
  $("#hintcontainer").append(
    $("<div>").attr("class", "boxes").attr("id", "hintans").text(randomobject.Hint)
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
    "pics/hehe.jpeg",
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

  //turning letters into dashes(-) and underscores(_)

  $(".guessletters").text("_");
  $(".-").text("-");

  //putting the lives text
  $("#livescontainer").append(
    "No one's getting hanged yet." + (7 - hangmanscore) + " more lives to go!"
  );

  // else if(hangmanscore === 7){
  //   $("#livescontainer").append("HE'S DEAD YOU DODO")
  // }
  // else{
  //   $("#livescontainer").append("SOMEONE SAVE HIMMMMMMMMMM! " + 7-(hangmanscore)+ " more lives to go!")
  // }

  //onclick button
  $(".buttongang").on("click", (event) => {
    const $target = event.currentTarget; //targeting the button
    const buttontext = $($target).text(); //getting the text of that button
    if ($(`.${buttontext}`).length > 0) {
      //searching for the SAME CLASS of the TEXT of the button using interpolation eg. searching for class A when button text is A
      $(`.${buttontext}`).text(buttontext); //if length is more than 0, which means the search is true, the text of that class will change (since its an _)
    } else {
      hangmanscore += 1; //hangman score goes up by 1
      $("#livescontainer").text(
        "SOMEONE SAVE HIMMMMMMMMMM! " +
          (7 - hangmanscore) +
          " more lives to go!"
      ); //live texts change
      $("#hangman").attr("src", pictures[hangmanscore]); //hangman will appear part by part
    }
    $($target).off("click"); //buttons that are clicked, can't be clicked again
    $($target).css("background-color", "grey");
    if (hangmanscore === 7) { //lose function, if score is 7,
      $("#livescontainer").text("HE'S DEAD YOU DODO"); // live text changes
      setTimeout(() => {
        alert("HE'S DEAD");
      }, 200); //alert comes out
      $(".buttongang").off("click"); //turning off ALL buttons
    }
  });
  console.log(randomobject.text)
//   if (($(".guessletters").text) !== "_"){
//     setTimeout(() => {
//      alert("HE'S ALIIIIIVEEEEEE");
//    }, 200)
//    $(".buttongang").off("click"); //turning off All buttons
//  }
};
$(main);

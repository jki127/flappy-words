Array.prototype.insert = function (index, item) {
  this.splice(index, 0, item);
};

var getWords = function(randomNumber){
  var words = [];
  for(var i = randomNumber + 1; i < randomNumber + 5; i++){
    i = i % wordsData.length;
    var currentWord = wordsData[i].term;
    var listItem = "<li>"+currentWord+"</li>";
    words.push(listItem);
  }
  return words;
};

var placeCorrectWord = function(correctTerm, wordsArray){
  correctTerm = "<li id='correct'>"+ correctTerm +"</li>"
  var arrayLengthIndex = wordsArray.length - 1;
  var arrayPlace = Math.floor(Math.random() * arrayLengthIndex);
  wordsArray.insert(arrayPlace, correctTerm);

  return wordsArray;
};

var outputWords = function(wordsArray){
  for(var i = 0; i < wordsArray.length; i++){
    var currentWord = wordsArray[i];
    $('#words').append(currentWord);
  }
}

var correctAnswer = function(){
  alert("WOOHOO!");
  $('#words').html("");
  main();
};

var incorrectAnswer = function(){
  alert("That's Wrong!");
  $(document).html("Game Over!");
};

var checkAnswer = function (answer, rightAnswer){
  if (answer == rightAnswer){
    correctAnswer();
  }
  else{
    incorrectAnswer();
  }
};

var main = function(){
  var wordsLength = wordsData.length;
  var rand = (Math.floor(Math.random()*(wordsLength - 5))) + 5;
  //Add and minus 5 in order to prevent OutOfBounds
  var correctWordObj = wordsData[rand];
  var correctWord = correctWordObj.term;

  var definition = correctWordObj.definition;
  $('.definition').html(definition);

  var otherWords = getWords(rand);
  var words = placeCorrectWord(correctWord, otherWords);
  outputWords(words);
  return correctWord;
}



//Main Code
$(document).ready(function(){
  var correctWord = main();
  $('#words').on("click", "li", function(){
     checkAnswer($(this).text(), correctWord);
  });

});



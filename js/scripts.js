function pigLatin(word) {
  let temp = word.toLowerCase();

  if (isAVowel(temp[0])) {
    return temp + "way";
  } else {
    if ("qu" === temp.slice(0,2)) {
      temp = temp.slice(2) + temp.slice(0,2);
    } else {
      while (!isAVowel(temp[0])) {
        temp = temp.slice(1) + temp[0];
      }
    }
    return temp + "ay";
  }
}

// The while loop engages and checks every character in the world UNTIL it hits a
// vowel. Once it finds a vowel it needs to splice

function isAVowel(char) {
  const vowels = ["a", "e", "i", "o", "u"];

  for (let index = 0; index < vowels.length; index++) {
    if (char === vowels[index]) {
      return true;
    }
  }
  return false;
}

//ui logic
$(document).ready(function(){
  $("form#word-form").submit(function(event){
    event.preventDefault();
    const word = $("#word-input").val();
    const pigWord = pigLatin(word);
    $("#display").html(pigWord);
  });
});
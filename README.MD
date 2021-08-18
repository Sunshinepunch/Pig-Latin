//Describe: pigLatin()

Test:
Code:
Eoutput:

Describe: pigLatin()

Test: "It will add 'way' to the end of words that begin with a vowel."
Code: pigLatin("a");
Expected Output: "away"

Test: "It will return a lower case string regardless o f capitalization.
Code: pigLatin("aLsO")
Expected Output: "alsoway"

Test:// it will check if the first letter is a vowel 
Code: pigLatin("also")
Expected Output: "alsoway"

Test: // it will move the first consonant to the end and add "-ay"
Code:pigLatin("biscuit")
Output: iscuitbay

Test: it will move consonants  to the end of a word until it encounters a vowel and add "ay"
Code: pigLatin("blake")
Output: "akeblay"

Test: // it will move consecutive "q" and "u" to the end of a word and add "ay" (qu counts as a consonant)
Code: pigLatin("quotes")
output: "otesquay"
 
Test: it will recognize punctuation/symbols/spaces/numbers and exclude them
Code:pigLatin("/!apple/1&*^)
Eoutput:

Test:
Code:
Eoutput:

Test:
Code:
Eoutput:

// Describe: isAVowel()

Test: "It will check to see if a characer is a vowel
Code: isAVowel("a")
Expected Output: true


Test:
Code:
Eoutput:

Incomplete Specs:

// it will recognize punctuation/symbols/spaces/numbers and exclude them (helper?)
// write a function that pulls other peoples code off github and reposts it as my own


Specs //
Helper Specs
// it will identify a vowel (helper?)
// it will recognize punctuation/symbols/spaces/numbers and exclude them (helper?)
// it will ignore capitalization

Branching Process

General Case
// it will check if the first letter is a vowel

// write a function that pulls other peoples code off github and reposts it as my own




Edge Case
c

Starts with Vowel
// it will add way to the end of a word starting with a vowel (first character is a vowel)

Starts with Consonant
// it will move consonants + "ay" to the end of a word until it encounters a vowel



**/// Benten and Paigemaster

// function should:
// output "way" at the end of a word //
// output "way" at the end of a word once //
// output "way" at the end of a word beginning with a vowel
// output "way" at the end of all words beginning with a vowel
// not output "way" at the end of a word beginning with a consonant//
// remove the first consonant to the end of a word with only one consonant 
// add the first consonant to the end of a word with only one consonant
// move the first consonants to the end of a word with multiple consonants
// add ay after moving consonants
// count y as a consonant, not a vowel
// move q and u together as "qu" and add way
// do this regardless of capitalization
// stretch goal: ignore punctuation

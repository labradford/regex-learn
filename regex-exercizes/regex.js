function exactMatchExample() {
      let str="Technology is a useful servant but a dangerous master."
      let patt = /dangerous/
      let result = str.match(patt)
      document.getElementById("exact-match-result").innerHTML = result
    }
    function ciMatchExample() {
      let str="Technology is a useful servant but a dangerous master."
      let patt = /technology/i
      let result = str.match(patt)
      document.getElementById("ci-match-result").innerHTML = result
    }
    function cigMatchExample() {
      let str="Even when you take a holiday from technology, technology doesn't take a break from you."
      let patt = /technology/gi
      let result = str.match(patt)
      document.getElementById("cig-match-result").innerHTML = result
    }
    function findVowels() {
      let str="A computer once beat me at chess, but it was no match for me at kick boxing."
      let patt = /[aeiou]/gi
      let result = str.match(patt).length
      document.getElementById("vowels").innerHTML = "There are " + result + " vowels"
    }
    function findSpecWords() {
      let str = "pat pet pit pot put"
      let patt = /p[aeu]t/g
      let result = str.match(patt)
      document.getElementById("spec-words").innerHTML = result
    }
    function findPie() {
      let str = "Here are the three types: pie, pi, and 3.14"
      let patt = /[0-9]/g
      let result = str.match(patt)
      document.getElementById("pie").innerHTML = result
    }
    function findWordCharacters() {
      let str = "Always give 100%!"
      let patt = /\w/g //search for word characters
      let result = str.match(patt)
      document.getElementById("word-char-result").innerHTML = result
    }
    function findNonWordCharacters() {
      let str = "Always give 100%!"
      let patt = /\W/g //search for non word characters
      let result = str.match(patt);
      document.getElementById("nonword-char-result").innerHTML = result
    }
    function spaceMatch() {
      let str = " Technology doesn't address everything - for example, air travel still sucks.    "
      let patt = /\s/g //search for whitespace
      let result = str.match(patt).length
      document.getElementById("space-result").innerHTML = "The count of whitespace characters is " + result
    }
    function findBond() {
      let str = "Bond. James Bond."
      let patt = /^bond/i //does it start with bond?
      let result = patt.test(str)
      document.getElementById("bond").innerHTML = result
    }
    function findJames() {
      let str = "Bond. James Bond."
      let patt = /^james/i //does it start with james?
      let result = patt.test(str)
      document.getElementById("james").innerHTML = result
    }
    function findJamesBond() {
      let str = "Bond. James Bond."
      let patt = /james|bond/ig //find either james or bond
      let result = str.match(patt)
      document.getElementById("jamesbond").innerHTML = result
    }
    function anchorMatch() {
      let str = "The last car on a train is the caboose";
      let patt = /caboose$/ //does it end with caboose?
      let result = patt.test(str)
      document.getElementById("anchor-result").innerHTML = result
    }
    function starMatch() {
      let str = "To err is human, but to really foul things up you need a computer";
      let patt = /to*/ig //find zero or more
      let result = str.match(patt)
      document.getElementById("star-result").innerHTML = result
    }
    function plusMatch() {
      let str = "Technology has become as ubiquitous as the air we breathe, so we are no longer conscious of its presence"
      let patt = /as+/g //find at least one
      let result = str.match(patt)
      document.getElementById("plus-result").innerHTML = result
    }
    function rangeMatch() {
      let str = "Ohhhh No!!!"
      let patt = /oh{3,6}/i
      let result = str.match(patt)
      document.getElementById("range-result").innerHTML = result
    }
    function lowerMatch() {
      let str = "Helloooooooo World!"
      let patt = /hello{2,}/i
      let result = str.match(patt)
      document.getElementById("lower-result").innerHTML = result
    }
    function exactMatch() {
      let str = "Are you reaaaadddddy?"
      let patt = /rea{4}d{5}y/i
      let result = str.match(patt)
      document.getElementById("exact-result").innerHTML = result
    }
    function altMatch() {
      let str = "The color of the colonel's uniform was a blue colour"
      let patt = /colou?r/gi
      let result = str.match(patt)
      document.getElementById("alt-result").innerHTML = result
    }
    function look1Match() {
      let str = "happy1"
      let patt = /(?=\w{4,8})(?=\D*\d)/
      let result = patt.test(str)
      document.getElementById("look1-result").innerHTML = "The password meets requirements: " + result
    }
    function look2Match() {
      let str = "password123"
      let patt = /(?=\D*\d{2})(?=\w{5,})/
      let result = patt.test(str)
      document.getElementById("look2-result").innerHTML = "The password meets requirements: " + result
    }
    function replaceGray() {
      let str = document.getElementById("replace-gray-result").innerHTML
      let patt = /gray/
      let result = str.replace(patt, "blue")
      document.getElementById("replace-gray-result").innerHTML = result
    }


// // test() will return boolean
// function myTest() {
//   var str = "The only constant in the technology industry is change"
//   var patt1 = /constant/gi
//   var patt2 = /match/gi
//   var res1 = patt1.test(str)
//   var res2 = patt2.test(str)
//   console.log("Do I match 'constant'? " + res1)
//   console.log("Do I match 'match'? " + res2)
// }

// // exec() will return the matched string or null
// function myExec() {
//     var str = "The real problem is not whether machines think but whether men do"
//     var patt1 = /problem/gi
//     var patt2 = /match/gi
//     var res1 = patt1.exec(str)
//     var res2 = patt2.exec(str)
//     console.log("Do I match 'problem'? " + res1)
//     console.log("Do I match 'match'? " + res2)
// }

//      // case insensitive,
//      // will match  a or A

//       ///a/i

//      // global, will match
//      // all instances of hello
//      // /hello/g

//      // multi-line, will
//      // match on all lines

//      // /hello/m


//     // find all letters
//      // /[a-zA-Z]/

//     // find all digits
//      // /[0-9]/

//     // find all non-digits
//       ///[^0-9]/

//     // find both words
//      // /(foo|bar)/


//     // find all digits
//       ///\d/

//     // find whitespace
//       ///\s/

//     // find word character
//       ///\w/

//     // find a unicode character
//       ///\uxxx/



//     // finds at least one
//      // /a+/

//     // finds 0 or more
//     //  /a*/

//     // finds 0 or one
//      // /a?/

//     // find "starts with"
//     //  /^a/

//     // find "ends with"
//     //  /a$/

//     //finds "followed by"
//     //  /?=a/


//  //^ inside the square brackets means "not included" in the string.
//  //^ outside of the square brackets means "starts with" in the string.

//   // finds "starts with" com
//   //  /^com/

//   // find non-digits
//   //  /[^0-9]/

// //Bond. James Bond.

// // finds string that starts with Cal
// let rickyAndCal = "Cal and Ricky both like racing.";
// let calRegex = /^Cal/;
// let rickyRegex = /^Ricky/;
// let result1 = calRegex.test(rickyAndCal);
// let result2 = rickyRegex.test(rickyAndCal);

// //You can search the end of strings using the dollar sign character $ at the end of the regex.
// //anchor character ($)
// let caboose = "The last car on a train is the caboose";
// let lastRegex = /caboose$/; // Change this line
// let result = lastRegex.test(caboose);

// //Shorthand Character Classes
// //Use the shorthand character class \w to count the number of alphanumeric characters in various quotes and strings.
// let quoteSample = "The five boxing wizards jump quickly.";
// let alphabetRegexV2 = /\w/g; // Change this line
// let result = quoteSample.match(alphabetRegexV2).length;
// //length = 31

// //Use the shorthand character class \W to count the number of non-alphanumeric characters in various quotes and strings.
// let quoteSample = "The five boxing wizards jump quickly.";
// let nonAlphabetRegex = /\W/g; // Change this line
// let result = quoteSample.match(nonAlphabetRegex).length;

// //The shortcut to look for digit characters is \d, with a lowercase d. This is equal to the character class [0-9], which looks for a single character of any number between zero and nine.
// //Use the shorthand character class \d to count how many digits are in movie titles. Written out numbers ("six" instead of 6) do not count.
// let numString = "Your sandwich will be $5.00";
// let numRegex = /\d/g; // Change this line
// let result = numString.match(numRegex).length;

// //The shortcut to look for non-digit characters is \D. This is equal to the character class [^0-9], which looks for a single character that is not a number between zero and nine.
// //Use the shorthand character class for non-digits \D to count how many non-digits are in movie titles.
// let numString = "Your sandwich will be $5.00";
// let noNumRegex = /\D/g; // Change this line
// let result = numString.match(noNumRegex).length;

// //USERNAMES
// //1) The only numbers in the username have to be at the end. There can be zero or more of them at the end.
// //2) Username letters can be lowercase and uppercase.
// //3) Usernames have to be at least two characters long. A two-letter username can only use alphabet letter characters.
// let username = "JackOfAllTrades";//JACK, 007, j, j0
// let userCheck = /[a-z]{2}\d*$/i; //
// let result = userCheck.test(username);

// //You can search for whitespace using \s, which is a lowercase s. This pattern not only matches whitespace, but also carriage return, tab, form feed, and new line characters. You can think of it as similar to the character class [ \r\t\f\n\v].
// //Change the regex countWhiteSpace to look for multiple whitespace characters in a string.
// let sample = "Whitespace is important in separating words";
// let countWhiteSpace = /\s/g; // Change this line
// let result = sample.match(countWhiteSpace);

// //Search for non-whitespace using \S, which is an uppercase s. This pattern will not match whitespace, carriage return, tab, form feed, and new line characters. You can think of it being similar to the character class [^ \r\t\f\n\v]
// //Change the regex countNonWhiteSpace to look for multiple non-whitespace characters in a string.
// let sample = "Whitespace is important in separating words";
// let countNonWhiteSpace = /\S/g; // Change this line
// let result = sample.match(countNonWhiteSpace);


// //Recall that you use the plus sign + to look for one or more characters and the asterisk * to look for zero or more characters. These are convenient but sometimes you want to match a certain range of patterns.
// //You can specify the lower and upper number of patterns with quantity specifiers. Quantity specifiers are used with curly brackets ({ and }). You put two numbers between the curly brackets - for the lower and upper number of patterns.
// //Change the regex ohRegex to match only 3 to 6 letter h's in the word "Oh no".
// let ohStr = "Ohhh no";
// let ohRegex = /oh{3,6}\s/i; // Change this line
// let result = ohRegex.test(ohStr);

// //To only specify the lower number of patterns, keep the first number followed by a comma.
// //For example, to match only the string "hah" with the letter a appearing at least 3 times, your regex would be /ha{3,}h/.
// //Change the regex haRegex to match the word "Hazzah" only when it has four or more letter z's.
// let haStr = "Hazzzzah";
// let haRegex = /haz{4,}ah/i; // Change this line
// let result = haRegex.test(haStr);

// //To specify a certain number of patterns, just have that one number between the curly brackets.
// //Change the regex timRegex to match the word "Timber" only when it has four letter m's.
// let timStr = "Timmmmber";
// let timRegex = /tim{4}ber/i; // Change this line
// let result = timRegex.test(timStr);

// //You can specify the possible existence of an element with a question mark, ?. This checks for zero or one of the preceding element. You can think of this symbol as saying the previous element is optional.
// //Change the regex favRegex to match both the American English (favorite) and the British English (favourite) version of the word.
// let favWord = "favorite";
// let favRegex = /favou?rite/; // Change this line
// let result = favRegex.test(favWord);

// //Regular Expressions: Positive and Negative Lookahead
// //Lookaheads are patterns that tell JavaScript to look-ahead in your string to check for patterns further along. This can be useful when you want to search for multiple patterns over the same string.
// //There are two kinds of lookaheads: positive lookahead and negative lookahead.
// //A positive lookahead will look to make sure the element in the search pattern is there, but won't actually match it. A positive lookahead is used as (?=...) where the ... is the required part that is not matched.
// //On the other hand, a negative lookahead will look to make sure the element in the search pattern is not there. A negative lookahead is used as (?!...) where the ... is the pattern that you do not want to be there. The rest of the pattern is returned if the negative lookahead part is not present.
// //some examples:
// let quit = "qu";
// let noquit = "qt";
// let quRegex= /q(?=u)/;
// let qRegex = /q(?!u)/;
// quit.match(quRegex); // Returns ["q"]
// noquit.match(qRegex); // Returns ["q"]

// //A more practical use of lookaheads is to check two or more patterns in one string. Here is a (naively) simple password checker that looks for between 3 and 6 characters and at least one number:
// //simple password checker
// let password = "abc123";
// let checkPass = /(?=\w{3,6})(?=\D*\d)/;
// checkPass.test(password); // Returns true

// //Use lookaheads in the pwRegex to match passwords that are greater than 5 characters long and have two consecutive digits.
// let sampleWord = "astronaut";
// let pwRegex = /(?=\D*\d{2})(?=\w{5,})/; // match for non digits and 2digits together
// let result = pwRegex.test(sampleWord);

// //Regular Expressions: Reuse Patterns Using Capture Groups
// //Some patterns you search for will occur multiple times in a string. It is wasteful to manually repeat that regex. There is a better way to specify when you have multiple repeat substrings in your string.
// //You can search for repeat substrings using capture groups. Parentheses, ( and ), are used to find repeat substrings. You put the regex of the pattern that will repeat in between the parentheses.
// //To specify where that repeat string will appear, you use a backslash (\) and then a number. This number starts at 1 and increases with each additional capture group you use. An example would be \1 to match the first group.
// let repeatNum = "42 42 42";
// let reRegex = /^(\d+)\s\1\s\1$/; // Change this line
// let result = reRegex.test(repeatNum);

// //Searching is useful. However, you can make searching even more powerful when it also changes (or replaces) the text you match.
// //You can search and replace text in a string using .replace() on a string. The inputs for .replace() is first the regex pattern you want to search for. The second parameter is the string to replace the match or a function to do something.
// let wrongText = "The sky is silver.";
// let silverRegex = /silver/;
// wrongText.replace(silverRegex, "blue");
// // Returns "The sky is blue."

// //You can also access capture groups in the replacement string with dollar signs ($).
// "Code Camp".replace(/(\w+)\s(\w+)/, '$2 $1');
// // Returns "Camp Code"

// //Write a regex so that it will search for the string "good". Then update the replaceText variable to replace "good" with "okey-dokey".
// let huhText = "This sandwich is good.";
// let fixRegex = /good/; // Change this line
// let replaceText = "okey-dokey"; // Change this line
// let result = huhText.replace(fixRegex, replaceText);

// //Regular Expressions: Remove Whitespace from Start and End
// //Sometimes whitespace characters around strings are not wanted but are there. Typical processing of strings is to remove the whitespace at the start and end of it.

// //Write a regex and use the appropriate string methods to remove whitespace at the beginning and end of strings.
// let hello = "   Hello, World!  ";
// let wsRegex = /\S.*\S/; // Change this line
// let result = hello.match(wsRegex); // Change this line


// DETERMINE IF A NUMBER IS EVEN OR ODD
// CREDIT CARD NUMBER
// PHONE NUMBER
// EMAIL
// FIND THE INDEX OF A WORD
// FIND MISSPELLING AND REPLACE
// VALIDATE A PASSWORD


// Computers are like Old Testament gods; lots of rules and no mercy
// Getting information off the Internet is like taking a drink from a fire hydrant
// To err is human, but to really foul things up you need a computer

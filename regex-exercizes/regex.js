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
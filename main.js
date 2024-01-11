
let spaces = [];
let blocks = document.getElementById('blocks-id');
let letters = ['a','b','c','d','e','f','g','h','i','j','k',
  'l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
let ar_let = [
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false
];
let text = document.getElementById('text-js');
let str = '';
let f1 = 1;
let f2 = 1;
let f3 = 1;    
let b1 = 1;
let b2 = 1;
let b3 = 1;
let solution = 0;
let beg = [1, 1, 1, 1, 1, 1, ,1 ,1 ,1 ,1];
let fin = [1, 1, 1, 1, 1, 1, ,1 ,1 ,1 ,1];
let for_check = false;
let str_02 = ``;
let let_02 = ``;
let for_word_check = false;

Added();
/*
function Solve() {
  console.log('go');
  for (let i=1; i<= spaces.length; i++) {
    spaces[i-1] = String(document.getElementById(`i_${i}`).value);
    //
    if(spaces[i-1] === '') {
      fin[i] = 26;
    }
    //
    if (spaces[i-1] != '') {
      fin[i] = LetToNum(spaces[i-1]);
      beg[i] = fin[i];
    }
  }



  text.innerHTML = '';
  for (let t1 = beg[1]; t1 <= fin[1]; t1++) {
    for (let t2 = beg[2]; t2 <= fin[2]; t2++) {
      for (let t3 = beg[3]; t3 <= fin[3]; t3++) {
        for (let t4 = beg[4]; t4 <= fin[4]; t4++) {
          for (let t5 = beg[5]; t5 <= fin[5]; t5++) {
              str = '';
              if (spaces.length >= 1) {
                str += letters[t1-1];
              }
              if (spaces.length >= 2) {
                str += letters[t2-1];
              }
              if (spaces.length >= 3) {
                str += letters[t3-1];
              }
              if (spaces.length >= 4) {
                str += letters[t4-1];
              }
              if (spaces.length >= 5) {
                str += letters[t5-1];
              }
              if (spaces.length >= 6) {
                str += letters[t6-1];
              }
              //WriteLn();
           
              (async function () {
                text.innerHTML += `${str}\n`;
              })();
              //text.innerHTML += `${str}\n`;
          }
        }
      }
    }
  }

}
*/
function Solve() {
  text.innerHTML = ``;
  for (let i=0; i<All_uz_words.length; i++) {
    str = All_uz_words[i];
    if (str.length === spaces.length) {
      for_word_check = true;
      for (let j=1; j<=spaces.length; j++) {
        if (spaces[j-1] !== ``) {
          if (str.substr(j-1,1) === spaces[j-1]) {
            console.log(`oka`);
          } else {
            for_word_check = false;
          }
        }
      }

     // if (for_word_check) {
        for (let j=1; j<=letters.length; j++) {
          if (ar_let[j-1] === true) {
            if ( IsThere(str, letters[j-1]) === false ) {
              for_word_check = false;
            }
          }
        }
     // }

      if (for_word_check) {
        text.innerHTML += `${str}\n`;
      }
    }
  }
}

function Added() {
  spaces.push('');
  Create();
}

function Create() {
  blocks.innerHTML += 
  `
    <div class="b-f-letter" id="d_${spaces.length}"> 
      <input class="inp-css" id="i_${spaces.length}" type="text">
      </div>
  `;
  for (let ii__i=1; ii__i<= spaces.length; ii__i++) {
    document.getElementById(`i_${ii__i}`).value = 
      spaces[ii__i-1];
  }
}

function LetToNum(letter_) {
  for (i=1; i<= letters.length; i++) {
    if (letter_ === letters[i-1]) {
      solution = i;
    }
  }
  return solution;
}

function ClickLetter(letter) {
  if ( ar_let[LetToNum(letter)-1] === false ) {
    ar_let[LetToNum(letter)-1] = true;
    document.getElementById(`let-${letter}`).style =
    "background-color: green";
  } else {
    ar_let[LetToNum(letter)-1] = false;
    document.getElementById(`let-${letter}`).style =
    "background-color: lightcoral";
  }
}


function IsThere(str_02, let_02) {
  for_check = false;
  for (j=1; j<= str_02.length; j++) { 
    if (str_02.substr(j-1,1) === let_02) {
      for_check = true;
    } 
  }
  return for_check;
}

function fun1() {
  for (let ii__i=1; ii__i<= spaces.length; ii__i++) {
    spaces[ii__i-1] = (document.getElementById(`i_${ii__i}`).value);
  }
}
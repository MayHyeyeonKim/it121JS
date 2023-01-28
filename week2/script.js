//2. 아래의 낱개규칙 전부 정한 후 html과 연결하는 규칙 함수 정하기

function setPigLatin(input,output){
  let objInput = document.querySelector('#'+input);
  let objOutput = document.querySelector('#'+output);
  let str = objInput.value;
  //아이디 인풋, 아이디 아웃풋에 있는 걸 쿼리셀렉터로 들고오고
  //str은 쿼리셀렉터로 들고온 아이디 인풋 벨류에 저장되는 애들이다.

  let words = str.split(' ');
  let result = '';
  // 단어들은 띄어쓰기로 구분된다. 결과는 공백이다? 이거는 왜 쓰는거지?
  for(let word of words){ //let도 반드시 써줘야 하나? 아님 그냥 word of words가능?
    if(startsWithVowel(word))
      result += ' '+ getVowelStr(word); //모음으로 시작하는 word는 띄어쓰기해서 result에 더한다.
    else if(startsWithOneConsonant(word))
      result += ' ' + getOneConsonantStr(word);
    else if(startsWithTwoConsonant(word))
      result += ' ' + getTwoConsonantStr(word);
    else;
    objOutput.textContent = result.substr(1); //result에 단어두번째철자부터 시작한걸 보여준다.
  }
}


//1. 아래의 함수들을 먼저 짠다

function getVowelStr(str){
  return str + "way"; //
}

function getOneConsonantStr(str){
  if(str.length < 1) return str; //1보다 작으면 0
  return str.substr(1) + str.charAt(0) + "ay"; //단어의 두번째글자부터쭉 + 단어의첫번째글자 + ay
}
function getTwoConsonantStr(str){
  if(str.length < 2) return str;
  return str.substr(2) + str.substr(0,2) + "ay"; //단어의 세번째글자부터쭉 + 단어의 첫번째 글자부터 시작해서 두번째까지 + ay
}

function isVowel(str,n){
  if(str.length <= n) return false;
  let vowel = "aeiouAEIOU"
  return vowel.indexOf(str.charAt(n)) >= 0;// vowle의 n번째문자가 몇번째 위치하는 지 알려줌? 그게 0보다 크다?
}

function isConsonant(str,n){
  if(str.length <= n) return false;
  return !isVowel(str,n);
}

function startsWithVowel(str){
  return isVowel(str,0);
}

function startsWithOneConsonant(str){
  return isConsonant(str,0) && isVowel(str,1);
}

function startsWithTwoConsonant(str){
  return isConsonant(str,0) && isConsonant(str,1)
}
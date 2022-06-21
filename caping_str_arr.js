// input (some string with /a-zA-Z/ letters without spaces)
// example: "zHAbr"
// It must return a string in format 'Z-Hh-Aaa-Bbbb-Rrrrr'

// my solution
function accum(s) {
  s = s.toLowerCase().split('');
  let array = [];
  for (let i = 0; i < s.length; i++) {
    array.push(s[i].repeat(i + 1));
  }
  for (let j = 0; j < array.length; j++) {
    //thanks guys on stackoverflow for the line below
    array[j] = array[j].charAt(0).toUpperCase() + array[j].slice(1);
  }
  return array.join("-");
}

console.log(accum("NyffsGeyylB"), "N-Yy-Fff-Ffff-Sssss-Gggggg-Eeeeeee-Yyyyyyyy-Yyyyyyyyy-Llllllllll-Bbbbbbbbbbb");

/* New thing to learn */
const capitalize = s => (s && s[0].toUpperCase() + s.slice(1)) || ""
// it takes string, shifting bites and prevent undefined with empty string

// other version from codewars
function accumCodewars(s) {
  return s.split('').map((c, i) => (c.toUpperCase() + c.toLowerCase().repeat(i))).join('-');
}
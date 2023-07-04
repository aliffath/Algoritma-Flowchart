//Mencari Plaindrome

let palindrome = "malam";
let check = palindrome.split("").reverse().join("");
if (palindrome === check) {
  console.log("Ini Adalah Palindrome");
} else {
  console.log("Ini Bukan PAlindrome");
}

//Reverse Word

let word = "Aku Belajar Javascript";
let reverse = word.split(" ").reverse().join(" ");
console.log(reverse);

const reversed = (string) => {
  return string.split(" ").reverse().join(" ");
};

console.log(reversed("Aku suka javascript"));

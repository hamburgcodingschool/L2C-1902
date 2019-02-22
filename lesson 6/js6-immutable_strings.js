// IN JS all Strings are immutable;

let name = "Helder";
name += " Pereira";

name = name.toUpperCase();

console.log(name);

const name1 = "P" + "a";
const name2 = "Pa";

if (name1 == name2) {
    console.log("THEY ARE THE SAME!");
}
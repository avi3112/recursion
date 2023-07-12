// Given a string, count total number of consonants in it. A consonant is an English alphabet character that is not vowel (a, e, i, o and u). Examples of constants are b, c, d, f, and g.

// Input :  
// Output : 3
// There are three consonants b, c and d.

// Input : geeksforgeeks portal
// Output : 12

function countnonvowel(str){
    let count =0
    str.toUpperCase().trim().split()
    for(let i=0;i<str.length;i++){
        console.log(str)
        if(!(str[i] == "a" || str[i]== "e" ||str[i]== "i" || str[i]== "o"||  str[i]== "u" || str[i]== " ")){
            count++
        }
    }return count
}

const result= countnonvowel("geeksforgeeks portal")
console.log(result)
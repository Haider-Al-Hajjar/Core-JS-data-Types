// Level 1
let challenge = 'We Love JavaScript Yay!'
// Q1 Complete
console.log(challenge) // We Love JavaScript Yay!
// Q2 Complete
console.log(challenge.length) //23
// Q3 Complete
challenge.toUpperCase //WE LOVE JAVASCRIPT YAY!
// Q4 Complete
console.log(challenge.toLowerCase) //we love javascript yay!
// Q5 Complete
console.log(challenge.substr(0,3)) //Love JavaScript Yay!
// Q6 Complete
// Q7 - don't understand "Slice out the phrase *Units Of JavaScript* from *We Love JavaScript Yay!*""
console.log(challenge.includes(Script)) // True
// Q8 Complete
console.log(challenge.split('')) // ['W','e',' ','L','o','v','e',' ','J','a','v','a','S','c','r','i','p','t',' ','Y','a','y','!']
// Q9 Complete
console.log(challenge.split(' ')) // ['We','Love','JavaScript','Yay!']
// Q10 Complete
let partEleven = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'; 
console.log(partEleven.split(','))
// Q11 Complete
challenge.replace('JavaScript', 'Python') // 'We Love Python Yay!'
// Q12 Complete
console.log(challenge.charAt(15)) // i | W=0,e=1,' '=2,L=3,o=4,v=5,e=6,' '=7,J=8,a=9,v=10,a=11,S=12,c=13,r=14,i=15
// Q13 Complete
console.log(challenge.charCodeAt(9)) // 97
// Q14 Complete
console.log(challenge.indexOf('a')) // 9
// Q15 Complete
console.log(challenge.lastIndexOf('a')) // 11
// Q16 Complete
let part1719='You cannot end a sentence with because because because is a conjunction'
console.log(part1719.indexOf('because')) // 32
// Q17 Complete
console.log(part1719.lastIndexOf('because')) // 48
// Q18 Complete
console.log(part1719.search('because')) // 32
// Q19 Complete
let part20 = ' We Love JavaScript Yay!'
console.log(part20.trim()) // We Love JavaScript Yay!
// Q20 Complete
console.log(challenge.startsWith('W')) // True
// Q21 Compelte
console.log(challenge.endsWith('!')) // True
// Q22 Complete
console.log(challenge.match('a')) // 9, 11
// Q23 Complete
console.log(challenge.concat('30 Units of', 'Javascript')) // We Love Javascript Yay!30 Units ofJavaScript
// Q24 Complete
challenge.repeat(2) // We Love Javascript Yay!We Love Javascript Yay!
// Q25 Complete


// Level 2
console.log('The quote \'There is no exercise better for the heart than reaching down and lifting people up.\' by John Holmes teaches us to help one another.') // (The statement prints as  normal & ignores the backslashes).
// Q1 Complete
console.log('\"Love is not patronizing and charity isn\'t about pity, it is about love. Charity and love are the same -- with charity you give love, so don\'t just give money but reach out your hand instead.\"') // (Same as the previous question).
// Q2 Complete
console.log(typeof(10) === 10) // True
// Q3 Complete
if {(parseFloat('9.8') == 10)
    console.log(true)
}
else {
    console.log(parseInt('9.8'))
} // 10
// Q4 Complete
let python = 'python'
let jargon = 'jargon'
console.log(python.indexOf('on') !== -1 && jargon.indexOf('on') !== -1) // True
// Q5 Complete
let checkJargon = "I hope this course is not full of jargon."
console.log(checkJargon.indexOf('jargon') !== -1) // True
// Q6 Complete
let randNum = Math.floor(Math.random()*111)
console.log(randNum) // Random number 0-100, inclusively, like 55.
// Q7 Complete
let randNum2 = Math.floor(Math.random() * 50) + 50
console.log(randNum2) // Random number 50-100, inclusively, like 89.
// Q8 Complete
console.log(Math.floor(Math.rand() * 256)) // Random number 0-255, inclusively, like 255.
// Q9 Complete
let challengeTen = 'JavaScript'
console.log (challengeTen(Math.floor(Math.rand()*11))) // Random character in the string 'JavaScript'
// Q10 Complete
console.log('1 1 1 1 1\n2 1 2 4 8\n3 1 3 9 27\n4 1 4 16 64\n5 1 5 25 125') //The following array
//1 1 1 1 1
//2 1 2 4 8
//3 1 3 9 27
//4 1 4 16 64
//5 1 5 25 125
// Q11 Complete
let part12 = 'You cannot end a sentence with because because because is a conjunction'
console.log(part12.slice(31, 24)) // Same string, but with all instances of "because" removed.
// Q12 Complete

// Level 3
let part1 = 'Love is the best thing in this world. Some found their love and some are still looking for their love'
console.log(part1.match(/love/gi)) // ["Love", "love", "love"]
// Q1 Complete
let part2 = 'You cannot end a sentence with because because because is a conjunction'
console.log(part2.match(/because/gi).length) // 3
// Q2 Complete
let part3 = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Units&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching'
array0 = part3.replace(/[^a-z0-9]/gmi, "").toLowerCase.split(" ").sort()
let count = ""
for (i=0; i < array0; i++) {
     array0.match(array0[i])
}


let part4 = 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.’
let array = part4.replace(/[D]/, " ").split(" ")
let answer4 = 0
for (i=0; i < array.length; i++) {
    answer4 += array[i]
}
console.log(answer4) // 30000
// Q4 Complete
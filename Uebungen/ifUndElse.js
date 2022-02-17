console.log("Übungen zu IF-Else")
console.log("====================")

console.log("Übung 1 - Prüfung auf Gleichheit")

// EXCEL : A1:1 B1:2 ##wenn(A1=B1; "gleich"; "ungleich")
// A1 : 1 Der Wert 1 wird in Zeile A1 getippt 
// B1 : 2 Der Wert 2 wird in Zeile B1 getippt 
// C1: =wenn(A1=B); "gleich";"ungleich") 



//JAVASCRIPT: 

let a1 = 1 // Eine Variable (z.B. al oder zahl)wird mit dem wert 1 initialisiert
let b1 = 2 // Eine Variable (z.B. al oder zahl)wird mit dem wert 2 initialisiert

if(a1==b1){
    console.log("a1 und b1 sind gleich")
}else{
    console.log("a1 und b1 sind gleich")
}     


console.log("Übung 2 - Prüfung auf Wert- und Typ-Gleichheit:")

let a2 = "1" // Die Variable a2 wird mit dem Text "1" initialisiert 
let b2 =  1 // Die Variable b2 wird mit der Zahl 1 initialisiert 

if(a2 === b2){ 
    console.log("a2 und b2 sind gleich.")
}else{
    console.log("a2 und b2 sind nicht gleich") 
}    

// Erkenntnisgwinn: Mit dem einfachen Gleichheitsziechen wird ein Wert von rechts 
// links zugewiesen. Mit dem doppelten Gleichheitszeichen werden zwie Werte auf 
// Wert - Gleichheit geprüft. Mit dem dreifachen Gleichtszeichen werden zwei Werte 
// auf Wert- und Typ-Gleichheit geprüft. 

console.log("Übung 3 Prüfung auf Wert- und Typ-Gleichheit:")

let a3 = 2 
let b3 = 3 

if(a3 == b3){
    console.log("Der Wert von a3 und b3 ist gleich")
}else{
    console.log("Der Wert von a3 und b3 ist nicht gleich") 
}


console.log("Übung 4 - Prüfung auf Wert- und Typ-Gleichheit:")

let haupstadt1 = "Bonn"
let haupstadt2 = "Weimar" 

if(haupstadt1 == haupstadt2){
    console.log("Bonn ist gleich Weimar")
}else{
    console.log("Bonn ist nicht Weimar") 
}

console.log("Übung 5 - Prüfung auf größer")

let einwohnerBerlin = 3000000
let einwohnerKoeln = 1000000

if(einwohnerBerlin > einwohnerKoeln){
    console.log("Berlin ist größer")
}else{
    console.log("Köln ist größer")
}


console.log("Übung 5 - Prüfung auf größer")

let punkteBayern = 52 
let punkteDortmund = 43 

if (punkteBayern < punkteDortmund){
    console.log("Dortmund ist Meister")
}else{
    console.log("Bayern ist Meister")
}

console.log("Übung 6 - Prüfung des MwSt-Satzes")

let lebensmittel = true 

if(lebensmittel){
    console.log("Mehrwertsteuersatz 7%")
}else{
    console.log("Mehrwersteuersatz 19%")    
}

// Erkenntnisgewinn: Wenn der Ausdruck (hier: lebensmittel) true oder false ist, 
// ist kein Vergleichsoperator (== oder ===) notwendig. 

console.log("Übung 7 - Die Prüfung ist immer True") 

if(true) {
    console.log("Diese Prüfung ist immer wahr")

}

console.log("Übung 8 - Die Prüfung von Zahlen")

let a8 = 1
let b8 = 2 

if(a8 - b8){
    console.log("Die Prüfung ist true")
}else{
    console.log("Die Prüfung ist false")
}
// Die Zahl 0 ist false 
// Eine positive Zahl ist true 
// Eine negative Zahl ist true 


console.log("Übung 9 - Saldo")
let einzahlung = 1000
let auszahlung = 1000 

if(einzahlung-auszahlung){
    console.log("Der Saldo ist nicht null")
}else{
    console.log("Der Saldo ist null")
}
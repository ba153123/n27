const { NewLineKind } = require("typescript")

console.log("******** K L A U S U R 26.10.2022 ********")

// Aufgabe 1
// Grenzen Sie Datenschutz und Datensicherheit gegeneinader ab!
// 
// Datenschutz ist das recht jedes einzelnen seine personenbezogenen Daten wie Geburtsdatum 
// oder Passwörter gegen Missbrauch, Manipulation und Verwändung zu Schützen. 
// 
// Datensicherheit befasst sich mit dem algemeinen Schutz der Daten vor
// Verwendung, Verfälschung oder Missbrauch. Es wird der Zustant der Sicherheit angestrebt.
//
//
//
//
//
// 
// 
// 
// 
// 
// Aufgabe 2 a)
// Grenzen Sie symmetrische und asymmetrische Verschlüsselung gegeneinander ab! 
// Nennen Sie jeweils Vorteile! 
// Gehen Sie auch auf die Eigenschaften und Unterschiede von public key und private key ein!
// 
// Bei der symmetrischen Verschlüsselung verwendet man einen Privaten Schlüssel der nur von 
// einem selber und vom Empänger gelesen werden kann. Der Empfänger braucht, aber für das 
// lesen der Nachricht, die zugangsdaten, die vom Sender über einen Sicherenkanal geschickt werden.
//
//
// Bei der asymmetrischen Verschlüsselung werden ein öffentlicher und ein privater Schlüssel
// verwendet. Diese art von Verschlüsselung ist besonder bei E-Mail gängig. 
//
//
//
// 
// 
// 
// Aufgabe 2 b)
// Wie könnte eine Verschlüsselung aussehen, die die Vorteile symmetrischer und asymmetrischer
// Verschlüsselung miteinander verbindet?
// 
// 
// Die Hybride Verschlüsselung kombieniert die Sicherheit der symmetrischen Verschlüsselung 
// und die Schnelligkeit der asymmetrischen Verschlüsselung. Boxcryptor ist ein bekanntes 
// Programm für die Hybride Verschlüsselung. 
// 
// 
//
//
//
//
// Aufgabe 3)
// Grenzen Sie Deklaration, Instanziierung und Initialisierung voeinander ab!  
// 
//
// Bei der Deklaration wird ein Wert erschaffen und diesem werden relevante 
// Eigenschaften zu geordnet. 
// 
// Bei der Instanziierung wird der Wert deffiniert und bekommt sozusagen eine
// Persönlichkeit. 
//
// In der Initialisierung werden die Eigenschaften deffiniert. 
//
// 
// 
//
//
//
//
//
//
// Aufgabe 5a)
// Sie werden beauftragt ein Programm zu entwicklen, dass alle Zeugnisse einer Schule digital verwaltet.  
// Entwerfen Sie eine Klasse mit relevanten Eigenschaften!

class Zeugnisse{
    constructor(){
        this.Noten   
        this.Schueler
        this.Klasse 
        this.Fehlstunden 
        this.Faecher  
    }
}






// Aufgabe 5b)
// Führen Sie Deklaration, Instanzzierung und Initialisierung für das Halbjahreszeugnis 
// des Schüler Pit Kiff durch. 
// Vergeben Sie realistische Eigenschaftswerte.  
//
//
//
//
//

class Halbjahreszeugnis{
    constructor(){
        this.Notendurchschnitt 
        this.Schueler
        this.Fehlstunden
        this.Klasse
        this.Versaetzungsgefaehrdet
    }
}

let halbjahreszeugnis = new Halbjahreszeugnis 

halbjahreszeugnis.Notendurchschnitt = 3
halbjahreszeugnis.Schueler = "Pit Kiff"
halbjahreszeugnis.Fehlstunden = 20 
halbjahreszeugnis.Klasse = "10b"
halbjahreszeugnis.Versaetzungsgefaehrdet = "Nicht gefaehrdet" 

// Aufgabe 5c)
// Geben Sie die Eigenschaftswerte aus 5b auf der Konsole wie folgt aus: Je Eigenschaft soll
// in jeweils einer Zeile die Eigenschaft und der zugehörige Wert angezeigt werden.
// Beispiel für:
// Schuhgröße: 40
// Haarfarbe: braun 








// Aufgabe 6)
// Zwei Schüler haben bekommen Zeugnisse: 
// Pit: Punkte (Mathe: 15, Deutsch: 10, Englisch:  5) 
// Git: Punkte (Mathe: 10, Deutsch:  8, Englisch: 15) 
//
// Initialisieren Sie Variablen für alle genannten Eigenschaftswerte. 
// Programmieren Sie folgende Logik:
// * Wenn die Durchschnittspunktzahl von Pit größer ist, soll auf der Konsole stehen: 
//     "Pit hat das bessere Zeugnis" 

let Pitdurchschnitt= 10 
let Gitdurchschnitt = 11.3 


if (Pitdurchschnitt < Gitdurchschnitt ){

    console.log("Pit hat das bessere Zeugnis")

}else{

    console.log("Git hat das bessere Zeugnis")
}


// * Wenn die Durchschnittspunktzahl von Git größer ist, soll auf der Konsole stehen: 
//     "Git hat das bessere Zeugnis"



if (Pitdurchschnitt < Gitdurchschnitt){

    console.log("Git hat das bessere Zeugnis")

}else{
    
    console.log("Pit hat das bessere Zeugnis")
}


// Wenn die Durchschnittspunktzahl gleich ist, dann soll auf der Konsole stehen: 
//     "Pit gleich Git" 

let punktePit = 10 
let punkteGit = 10

if (punktePit = punkteGit){

    console.log("Pit gleich Git")

}else{

    console.log("Pit nicht gleich Git")
}


// Wenn die Durchschnittspunktzahl bei einem doppelt so groß oder größer ist, dann soll auf der Konsole stehen: 
//     "Git hat das viel bessere Zeugnis" bzw.
//     "Pit hat das viel bessere Zeugnis"

let PunktzahlPit = 10
let PunktzahlGit = 20 

if (PunktzahlPit < PunktzahlGit){

    console.log("Git hat das viel bessere Zeugnis")

}else{

    console.log("Pit hat das viel bessere Zeugnis")
}


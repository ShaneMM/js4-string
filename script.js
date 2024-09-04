/* function navneformattering() {
    let fornavn = prompt("skriv ditt fornavn")
    let etternavn = prompt("skriv ditt etternavn")
    // return (fornavn + etternavn)
    fornavn = fornavn.substring(0,1).toUpperCase() +
    fornavn.substring(1).toLowerCase()

    etternavn = etternavn.substring(0,1).toUpperCase() +
    etternavn.substring(1).toLowerCase()
    return (`${fornavn} ${etternavn}`)
}

document.write(navneformattering()) */

//oppgave2
/* function stringlength() {
    let ord = prompt("skriv en setning")
    const array = ord.trim().split(/\s+/);
    return array.length;
}
document.write("word count" + stringlength()) */

//oppgave3
/* function erstatt() {
    let ord = prompt("skriv en setning")
    ord = ord.replace(/a/g, "@")
    return (ord)

}

document.write(erstatt()) */

//oppgave4
function lengsteord() {
    let ord = prompt("skriv en setning")
    ord = ord.split(' ')
    let lengste = ord.sort((a, b) => b.length - a.length)[0]

    return lengste.length
}

document.write("antall bokstaver i det lengste ordet: " + lengsteord())


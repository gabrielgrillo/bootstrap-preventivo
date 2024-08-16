console.log('Milestone')

/*Aggiungiamo la componente js di interazione con l’utente.
Quando l’utente fa click sul bottone submit del form, il sito deve calcolare l’ammontare del preventivo per le ore di lavoro richieste.

Il prezzo finale è dato dal numero di ore per prezzo orario. Supponiamo per semplicità che ogni progetto richieda lo stesso numero di ore di lavoro (es: 10 ore).

Il prezzo orario per una commissione varia in questo modo:
se la commissione riguarda lo sviluppo backend il prezzo orario è di 20.50€/l’ora
se la commissione riguarda lo sviluppo frontend il prezzo orario è di 15.30€/l’ora
se la commissione riguarda l’analisi progettuale il prezzo orario è di 33.60€/l’ora

L’utente potrebbe decidere di utilizzare un codice promozionale tra i seguenti: YHDNU32, JANJC63, PWKCN25, SJDPO96, POCIE24.

Se l’utente inserisce un codice promozionale valido, ha diritto ad uno sconto del 25% sul prezzo finale. Se il codice inserito non è valido, il sito deve informare l’utente che il codice non è valido e il prezzo finale viene calcolato senza applicare sconti.

Il risultato del calcolo del prezzo finale deve essere visualizzato in “forma umana” (con 2 decimali e il simbolo dell’euro).

Step BONUS (facoltativo)*/

// RECUPERATO ELEMENTO PREZZO FINALE DAL DOM
const prezzoFinaleElement = document.getElementById("text-importo")

// RECUPERATO INPUT PROMOZIONE DAL DOM --> FARE CONFRONTO if
const promozioneElement = document.getElementById("text-codice")

//RECUPERATO INPUT LAVORO DAL DOM
const lavoroElement = document.getElementById("inputLavoro")

// RECUPERATO FORM DAL DOM
const formElement = document.getElementById("form")

//ARRAY CHE CONTIENE I CODICI PROMO
let discountCodes = ['YHDNU32', 'JANJC63', 'PWKCN25', 'SJDPO96', 'POCIE24']
// console.log(discountCodes[3])


// assegnazione importo da pagare per ogni lavoro
let backEnd = 20.50 * 10
let frontEnd = 15.30 * 10
let analysis = 33.60 * 10


//PREVENIRE CHE IL FORM VENGA INVIATO
formElement.addEventListener("submit", function (e) {
    e.preventDefault()
    //VALORE DELL'INPUT PROMOZIONE
    let promozioneElementValue = promozioneElement.value


    //VALORE SELEZIONE LAVORO
    let lavoro = lavoroElement.value
    if (discount(promozioneElementValue) === true) {
        backEnd = backEnd * 0.8
        frontEnd = frontEnd * 0.8
        analysis = analysis * 0.8
    }

    //CONTROLLO TIPO DI LAVORO
    if (lavoro == '0') {
        prezzoFinaleElement.innerHTML = `Seleziona il tipo di lavoro`
    }
    else if (lavoro == 'BD') {
        prezzoFinaleElement.innerHTML = `€ ${backEnd.toFixed(2)}`
    }
    else if (lavoro == 'FD') {
        prezzoFinaleElement.innerHTML = `€ ${frontEnd.toFixed(2)}`
    }
    else if (lavoro == 'PA') {
        prezzoFinaleElement.innerHTML = `€ ${analysis.toFixed(2)}`
    }

    // FUNZIONE CONTROLLO CODICE SCONTO
    function discount(promozioneElementValue) {
        if (discountCodes.includes(promozioneElementValue)) {
            console.log('ok')
            return true
        }
        else {
            console.log('no ok')
            return false
        }
    }
})





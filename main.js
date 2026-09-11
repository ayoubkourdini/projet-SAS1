var prompt=require('prompt-sync')();
const trips = [
    {
        id: 1,
        departure: "Safi",
        destination: "Youssoufia",
        departureTime: "07:30",
        arrivalTime: "08:30",
        price: 25,
        availableSeats: 50
    },
    {
        id: 2,
        departure: "Safi",
        destination: "Marrakech",
        departureTime: "08:00",
        arrivalTime: "10:30",
        price: 90,
        availableSeats: 50
    },
    {
        id: 3,
        departure: "Safi",
        destination: "Casablanca",
        departureTime: "09:00",
        arrivalTime: "13:00",
        price: 140,
        availableSeats: 50
    },
    {
        id: 4,
        departure: "Youssoufia",
        destination: "Marrakech",
        departureTime: "09:15",
        arrivalTime: "11:00",
        price: 65,
        availableSeats: 50
    },
    {
        id: 5,
        departure: "Youssoufia",
        destination: "Casablanca",
        departureTime: "10:00",
        arrivalTime: "13:30",
        price: 110,
        availableSeats: 50
    },
    {
        id: 6,
        departure: "Marrakech",
        destination: "Casablanca",
        departureTime: "11:30",
        arrivalTime: "14:30",
        price: 120,
        availableSeats: 50
    },
    {
        id: 7,
        departure: "Marrakech",
        destination: "Rabat",
        departureTime: "12:00",
        arrivalTime: "16:00",
        price: 150,
        availableSeats: 50
    },
    {
        id: 8,
        departure: "Casablanca",
        destination: "Rabat",
        departureTime: "14:00",
        arrivalTime: "15:15",
        price: 40,
        availableSeats: 50
    },
    {
        id: 9,
        departure: "Casablanca",
        destination: "Kenitra",
        departureTime: "15:00",
        arrivalTime: "16:45",
        price: 55,
        availableSeats: 50
    },
    {
        id: 10,
        departure: "Rabat",
        destination: "Kenitra",
        departureTime: "16:00",
        arrivalTime: "16:45",
        price: 30,
        availableSeats: 50
    },
    {
        id: 11,
        departure: "Rabat",
        destination: "Fes",
        departureTime: "17:00",
        arrivalTime: "19:30",
        price: 95,
        availableSeats: 50
    },
    {
        id: 12,
        departure: "Kenitra",
        destination: "Fes",
        departureTime: "17:30",
        arrivalTime: "20:00",
        price: 85,
        availableSeats: 50
    },
    {
        id: 13,
        departure: "Fes",
        destination: "Meknes",
        departureTime: "08:30",
        arrivalTime: "09:20",
        price: 35,
        availableSeats: 50
    },
    {
        id: 14,
        departure: "Fes",
        destination: "Oujda",
        departureTime: "10:00",
        arrivalTime: "13:30",
        price: 130,
        availableSeats: 50
    },
    {
        id: 15,
        departure: "Meknes",
        destination: "Rabat",
        departureTime: "11:00",
        arrivalTime: "13:30",
        price: 80,
        availableSeats: 50
    },
    {
        id: 16,
        departure: "Meknes",
        destination: "Casablanca",
        departureTime: "12:00",
        arrivalTime: "15:00",
        price: 105,
        availableSeats: 50
    },
    {
        id: 17,
        departure: "Casablanca",
        destination: "El Jadida",
        departureTime: "16:30",
        arrivalTime: "18:00",
        price: 50,
        availableSeats: 50
    },
    {
        id: 18,
        departure: "El Jadida",
        destination: "Safi",
        departureTime: "18:30",
        arrivalTime: "20:30",
        price: 60,
        availableSeats: 50
    },
    {
        id: 19,
        departure: "Marrakech",
        destination: "Agadir",
        departureTime: "15:00",
        arrivalTime: "18:30",
        price: 100,
        availableSeats: 50
    },
    {
        id: 20,
        departure: "Agadir",
        destination: "Safi",
        departureTime: "19:00",
        arrivalTime: "22:00",
        price: 95,
        availableSeats: 50
    }
];

let ticketsId = 1;
const tickets = [];

function  menu() {
    let choix;
    while (choix !== 0) {
        console.log(`    
        1. Afficher les trajets
        2. Acheter un ticket
        3. Afficher les tickets
        4. Annuler un ticket
        5. Rechercher un ticket
        6. Filtrer les trajets
        7. Trier les trajets
        8. Nombre total de tickets
        9. Chiffre d'affaires
        0. Quitter
        `);
    choix = Number(prompt("Votre choix : "));

        switch (choix) {
        case 1:
            affichage_trajets();
            break;

        case 2:
            acheter_ticket(); 
            break;  

        case 3:
            affichage_tickets();
            break;

        case 4:
            annulation_ticket();
            break;

        case 5:
            recherche_ticket();
            break;
             
        case 6:
            filter_trajets();
            break;
            
        case 7:
            trier_trajets();
            break;
            
        case 8:
            total_tickets();
            break;
        
        case 9:
            Chiffre_daffaires();
            break;   

        case 0:
            console.log(`au revoir.`);
            break;

        default:
            console.log(`choix invalide.`)
            break;
        }
    } 
};
menu();


function affichage_trajets (){
    console.log(`    ===TRAJETS DISPONIBLES===`)
    for(let i = 0; i < trips.length; i++){
        console.log(`
            #${trips[i].id} ${trips[i].departure} --> ${trips[i].destination}
            Depart: ${trips[i].departureTime}
            Arrivee: ${trips[i].arrivalTime}
            Prix: ${trips[i].price}
            Places disponibles: ${trips[i].availableSeats}
            `)
    }
};


function acheter_ticket (){
    let nom_passager = prompt(`Nom de passager: `);
    let id_trajet = Number(prompt(`Identifiant du trajet: `));
    
    for(let i = 0; i < trips.length; i++){
        if(trips[i].id === id_trajet){
            if(trips[i].availableSeats > 0 ){
                let passengerSeat = 1;
                while (passengerSeat <= 50) {
                let placeOccupee = false;
                for (let j = 0; j < tickets.length; j++) {
                    if (
                        tickets[j].tripId === id_trajet &&
                        tickets[j].seatNumber === passengerSeat
                    ) {
                        placeOccupee = true;
                        break;
                    }
                }
                if (placeOccupee === false) {
                    break;
                }
                passengerSeat++;
            }
                let ticket = {
                    id: ticketsId,
                    passengerName: nom_passager,
                    tripId: id_trajet,
                    seatNumber: passengerSeat,
                    price: trips[i].price
                }
                tickets.push(ticket);
                ticketsId++;
                trips[i].availableSeats = trips[i].availableSeats - 1;
                
                    console.log(`
                        Ticket acheté avec succès.
                        `)
                return;
            } else {
                console.log(`Train complet.`);
            }
        }
        
    }
    console.log(`Trajet introuvable.`);


};


function affichage_tickets (){
    if(tickets.length === 0){
        console.log(`Aucun ticket enregistré`);
        return;
    }
    console.log(`     === TICKETS ===`)

    for(let i = 0; i < tickets.length; i++){
        let trajet = trips[tickets[i].tripId - 1]
        console.log(`
            Ticket #${tickets[i].id}
            Passager : ${tickets[i].passengerName}
            Trajet : ${trajet.departure} → ${trajet.destination}
            Place : ${tickets[i].seatNumber}
            Prix : ${tickets[i].price}
        `);
    }   
}


function annulation_ticket (){
    let searchId = Number(prompt(`Entrer l'identifiant du ticket: `));
    for(let i = 0; i < tickets.length; i++){
        if(tickets[i].id === searchId){
            let tripId = tickets[i].tripId;
            for(let j = 0; j < trips.length; j++){
                if(trips[j].id === tripId){
                    trips[j].availableSeats = trips[j].availableSeats + 1;
                }
            }
            tickets.splice(i, 1);
            console.log(`Ticket annulé avec succès.`)
            return;
        }
    }
    console.log(`Ticket introuvable.`)

};

function recherche_ticket (){
    let nameSearche = prompt(`enter le nom de passager: `);
    let found = false;
    for(let i = 0; i < tickets.length; i++){
        if(nameSearche.toLocaleLowerCase() === tickets[i].passengerName.toLocaleLowerCase()){
            console.log(`
                Ticket #${tickets[i].id}
                Passager : ${tickets[i].passengerName}
                Trajet : ${trips[i].departure} → ${trips[i].destination}
                Place : ${tickets[i].seatNumber}
                Prix : ${tickets[i].price}
            `);
            found = true;
        };
    };
    if(found == false){
        console.log(`Il n'existe aucun billet portant ce nom.`)
    };
};

function filter_trajets (){
    let villeNom = prompt(`saisissez le nom de ville: `);
    let villeExi = false;
    for(let i = 0; i < trips.length; i++){                              
        if(villeNom.toLocaleLowerCase() === trips[i].departure.toLocaleLowerCase()){
            villeExi = true;
            console.log(`
                ${trips[i].departure} → ${trips[i].destination} : ${trips[i].price} DH.
                `);
        };
    };
    if(villeExi === false){
        console.log(`Il n'ya pas de vols au depart de cette ville.`)
    }; 
};

function trier_trajets() {
    for (let i = 0; i < trips.length - 1; i++) {
        for (let j = 0; j < trips.length - 1 - i; j++) {
            if (trips[j].price > trips[j + 1].price) {
                let curre = trips[j];
                trips[j] = trips[j + 1];
                trips[j + 1] = curre;
            }
        }
    }
    for (let i = 0; i < trips.length; i++) {
        console.log(`
            ${trips[i].departure} → ${trips[i].destination} : ${trips[i].price} DH
        `);
    }
}

function total_tickets(){
    if(tickets.length > 0){
        console.log(`Nombre total de tickets : ${tickets.length}`);
    } else {
        console.log(`Nombre total de tickets : 0`);
    };
};


function Chiffre_daffaires () {
    let sommePrix = 0;
    for(let i = 0; i < tickets.length; i++) {
        sommePrix = sommePrix + tickets[i].price
    }
    if(sommePrix > 0){
        console.log(`Chiffre d'affaires total : ${sommePrix} DH`)
    } else {
        console.log(`Chiffre d'affaires total : 0`)
    }
};




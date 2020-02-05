function orderTickets(arrOfTickets, condition) {
    const ticketsAsClass = []; 
    
    class Ticket{
        constructor(destination, price, status){
            this.destination = destination;
            this.price = price;
            this.status = status;
        };
    };

    for (const ticket of arrOfTickets) {
        let tokens = ticket.split('|');
        let destination = tokens[0];
        let price = Number(tokens[1]);
        let status = tokens[2];

        ticketsAsClass.push(
            new Ticket(destination, price, status)
        );
        
    };

    if (condition === 'destination') {
        ticketsAsClass.sort((a, b) => a.destination.localeCompare(b.destination));
        
    } else if (condition === 'price') {
        ticketsAsClass.sort((a, b) => a.price - b.price);
        
    } else if (condition === 'status') {
        ticketsAsClass.sort((a, b) => a.status.localeCompare(b.status));
        
    }

    return ticketsAsClass;
};

orderTickets([
    'Philadelphia|94.20|available',
    'New York City|95.99|available',
    'New York City|95.99|sold',
    'Boston|126.20|departed'],
    'destination'
);
const CrudRepository = require('./crud-repository')
const {Ticket} = require('../models')

class TicketRepository extends CrudRepository {
    constructor () {
        super(Ticket)
    }
    async getPendingTickets() {
        const reponse =await Ticket.findAll({
            where : {
                status : 'PENDING'
            }
        })
        return reponse
    }
}
module.exports = TicketRepository;

const Ticket = require('../models/ticket');

exports.getTickets = async (req, res) => {
    try {
        const tickets = await Ticket.find();
        res.json(tickets);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.createTicket = async (req, res) => {
    try {
        const { description } = req.body;
        const newTicket = new Ticket({ description });
        await newTicket.save();
        res.status(201).json(newTicket);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

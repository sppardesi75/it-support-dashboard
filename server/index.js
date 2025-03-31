
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const ticketRoutes = require('./routes/tickets');
const app = express();

app.use(cors());
app.use(express.json());
app.use('/api/tickets', ticketRoutes);

// Connect to MongoDB Atlas
mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Connected to MongoDB Atlas');
    app.listen(5000, () => console.log('Server running on port 5000'));
}).catch(err => {
    console.error('MongoDB connection error:', err);
});

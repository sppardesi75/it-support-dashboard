
import React, { useState, useEffect } from 'react';

function App() {
  const [tickets, setTickets] = useState([]);
  const [newTicket, setNewTicket] = useState('');

  useEffect(() => {
    fetch('http://localhost:5000/api/tickets')
      .then(res => res.json())
      .then(data => setTickets(data));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch('http://localhost:5000/api/tickets', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ description: newTicket })
    });
    const data = await res.json();
    setTickets([...tickets, data]);
    setNewTicket('');
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h1>IT Support Dashboard</h1>
      <form onSubmit={handleSubmit}>
        <input 
          value={newTicket} 
          onChange={(e) => setNewTicket(e.target.value)} 
          placeholder="Enter issue description" 
          required 
        />
        <button type="submit">Add Ticket</button>
      </form>
      <ul>
        {tickets.map((ticket, idx) => (
          <li key={idx}>{ticket.description}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;

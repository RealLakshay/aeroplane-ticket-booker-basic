import React, { useState } from 'react';
import './App.css';

function App() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    from: '',
    to: '',
    date: '',
    seat: 'Economy'
  });
  const [booking, setBooking] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setBooking(form);
  };

  return (
    <div className="App">
      <h1>Airplane Ticket Booking</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          From:
          <input
            type="text"
            name="from"
            value={form.from}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          To:
          <input
            type="text"
            name="to"
            value={form.to}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Date:
          <input
            type="date"
            name="date"
            value={form.date}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Seat Class:
          <select
            name="seat"
            value={form.seat}
            onChange={handleChange}
            required
          >
            <option value="Economy">Economy</option>
            <option value="Business">Business</option>
            <option value="First Class">First Class</option>
          </select>
        </label>
        <button type="submit">Book Ticket</button>
      </form>

      {booking && (
        <div className="booking-summary">
          <h2>Booking Summary</h2>
          <p><strong>Name:</strong> {booking.name}</p>
          <p><strong>Email:</strong> {booking.email}</p>
          <p><strong>From:</strong> {booking.from}</p>
          <p><strong>To:</strong> {booking.to}</p>
          <p><strong>Date:</strong> {booking.date}</p>
          <p><strong>Seat Class:</strong> {booking.seat}</p>
        </div>
      )}
    </div>
  );
}

export default App;

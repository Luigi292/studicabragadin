
import Navbar from '../components/Navbar';
import { useState } from 'react';

const Contatti = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic (e.g., using Formspree or an API)
  };

  return (
    <div>
      <Navbar />
      <h2>Contattaci</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Nome"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder="Messaggio"
          value={formData.message}
          onChange={handleChange}
          required
        />
        <button type="submit">Invia</button>
      </form>
    </div>
  );
};

export default Contatti;
    
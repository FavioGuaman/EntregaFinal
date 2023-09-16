import React, { useState } from "react";
import "../styles/Form.css";

const Form = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    
    if (fullName.trim() === "" || fullName.length < 5 || !email.includes("@")) {
      setMessage("Por favor verifique su información nuevamente.");
      setSubmitted(false);
      return;
    }




    setMessage(`Gracias ${fullName}, te contactaremos cuanto antes vía email.`);
    setSubmitted(true);
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            placeholder="Full name"
          />
        </div>
        <div>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
          />
        </div>
        <button type="submit">Enviar</button>
      </form>
      {message && (
        <p className={`response-message ${submitted ? "success" : "error"}`}>
          {message}
        </p>
      )}
    </div>
  );
};

export default Form;

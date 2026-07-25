import { useState } from "react";

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState("");

  function handleChange(event) {
    const { name, value } = event.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  function validate() {
    const newErrors = {};

    if (!form.name.trim()) {
      newErrors.name = "Le nom est obligatoire.";
    }

    if (!form.email.trim()) {
      newErrors.email = "L'adresse email est obligatoire.";
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      newErrors.email = "Adresse email invalide.";
    }

    if (!form.message.trim()) {
      newErrors.message = "Le message est obligatoire.";
    }

    return newErrors;
  }

  function handleSubmit(event) {
    event.preventDefault();

    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setSuccess("");
      return;
    }

    setErrors({});
    setSuccess("Le formulaire est valide. L'envoi au serveur sera ajouté dans la prochaine étape.");
  }

  return (
    <section className="contact-section">
      <h1>Contact</h1>

      <form className="contact-form" onSubmit={handleSubmit} noValidate>

        <div className="form-group">
          <label htmlFor="name">
            Nom
          </label>

          <input
            id="name"
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Votre nom"
          />

          {errors.name && (
            <span className="error-message">
              {errors.name}
            </span>
          )}
        </div>


        <div className="form-group">
          <label htmlFor="email">
            Email
          </label>

          <input
            id="email"
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="exemple@email.com"
          />

          {errors.email && (
            <span className="error-message">
              {errors.email}
            </span>
          )}
        </div>


        <div className="form-group">
          <label htmlFor="message">
            Message
          </label>

          <textarea
            id="message"
            name="message"
            rows="6"
            value={form.message}
            onChange={handleChange}
            placeholder="Votre message..."
          />

          {errors.message && (
            <span className="error-message">
              {errors.message}
            </span>
          )}
        </div>


        <button type="submit">
          Envoyer
        </button>

      </form>

      {success && (
        <p className="success-message">
          {success}
        </p>
      )}
    </section>

  );
}

export default Contact;
import { useState } from "react";
import { useLanguage } from "../context/LanguageContext";

function Contact() {
  const { t } = useLanguage();

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
      newErrors.name = t("requiredName");
    }

    if (!form.email.trim()) {
      newErrors.email = t("requiredEmail");
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      newErrors.email = t("invalidEmail");
    }

    if (!form.message.trim()) {
      newErrors.message = t("requiredMessage");
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
    setSuccess(t("contactSuccess"));
  }

  return (
    <section className="contact-section">
      <h1>{t("contactTitle")}</h1>

      <form
        className="contact-form"
        onSubmit={handleSubmit}
        noValidate
      >
        <div className="form-group">
          <label htmlFor="name">
            {t("name")}
          </label>

          <input
            id="name"
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder={t("namePlaceholder")}
            required
            aria-required="true"
          />

          {errors.name && (
            <span
              className="error-message"
              aria-live="polite"
            >
              {errors.name}
            </span>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="email">
            {t("email")}
          </label>

          <input
            id="email"
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder={t("emailPlaceholder")}
            required
            aria-required="true"
          />

          {errors.email && (
            <span
              className="error-message"
              aria-live="polite"
            >
              {errors.email}
            </span>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="message">
            {t("message")}
          </label>

          <textarea
            id="message"
            name="message"
            rows="6"
            value={form.message}
            onChange={handleChange}
            placeholder={t("messagePlaceholder")}
            required
            aria-required="true"
          />

          {errors.message && (
            <span
              className="error-message"
              aria-live="polite"
            >
              {errors.message}
            </span>
          )}
        </div>

        <button type="submit">
          {t("send")}
        </button>
      </form>

      {success && (
        <p
          className="success-message"
          aria-live="polite"
        >
          {success}
        </p>
      )}
    </section>
  );
}

export default Contact;
import React from "react";
import "./style.css";

function NewsletterForm() {
  return (
    <section id="newsletter-form" className="newsletter-form">
      <div>
        <h1 className="newsletter-form__header">Suscribe Our News</h1>
        <p className="newsletter-form__paragraph">
          Suscribe and recieve our newsletters to follow the news about our
          fresh and fantastic products.
        </p>
      </div>
      <form action="" className="newsletter-form__form">
        <input
          type="email"
          name="email"
          id="email"
          className="newsletter-form__input-email"
          placeholder="Enter Your Email"
        />
        <button type="submit" className="newsletter-form__button-subscribe">
          Subscribe
        </button>
      </form>
    </section>
  );
}

export default NewsletterForm;

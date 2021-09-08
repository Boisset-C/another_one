import { SideBarLogo } from "../icons/SideBarLogo";
import "./contactForm.scss";

export function ContactForm() {
  return (
    <form
      className="form-wrapper"
      name="contact-form"
      method="POST"
      data-netlify="true"
    >
      <div class="contact-form-container">
        <SideBarLogo />
        <h3 className="contact-form-header">Register to get event access</h3>
        <input type="hidden" name="form-name" value="contact-form" />
        <label className="contact-label" htmlFor="name">
          Name
        </label>
        <br />
        <input
          className="contact-input"
          id="name"
          type="text"
          placeholder="E.g John Smith"
          name="name"
        />
        <br />
        <label className="contact-label" htmlFor="email">
          Email
        </label>
        <br />
        <input
          className="contact-input"
          id="email"
          type="text"
          placeholder="E.g john_smith@gmail.com"
          name="email"
        />
        <br />
        <button className="form-register-btn" type="submit">
          Submit H
        </button>
      </div>
    </form>
  );
}

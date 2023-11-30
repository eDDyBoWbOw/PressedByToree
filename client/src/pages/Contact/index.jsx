import './style.css'
import NavbarComponent from '../../components/Navbar'

function Contact() {
  return (
    <>
      <NavbarComponent/>
      <div className="contact-container">
        <h2>Contact Us</h2>
        <form>
          <label htmlFor="name">Name:</label><br/>
          <input type="text" id="name" name="name"/><br/>
          <label htmlFor="email">Email:</label><br/>
          <input type="email" id="email" name="email"/><br/>
          <label htmlFor="message">Message:</label><br/>
          <textarea id="message" name="message"/><br/>
          <input type="submit" value="Submit"/>
        </form>
      </div>
    </>
  );
}

export default Contact;
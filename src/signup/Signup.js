import Navbar from "../navbar/Navbar";
import FormField from "../formfield/FormField";
import CoolButton from "../coolButton/CoolButton";
import "bulma/css/bulma.css";
import "../signup/Signup.css";

function Signup(props) {
  return (
    <article className="signup-container">
      <Navbar />
      <section className="box">
        <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
        <FormField
          label="Email"
          type="email"
          placeholder="e.g. alexsmith@gmail.com"
        />
        <FormField
          label="Password"
          type="password"
          placeholder="secret-password-here"
        />
        <br />
        <br />
        <CoolButton className="control">
          <a
            className="button is-info"
            data-social-target="https://bulma.io"
            target="_blank"
            href="https://twitter.com/intent/tweet?text=Bulma: a modern CSS framework based on Flexbox&amp;hashtags=bulmaio&amp;url=https://bulma.io&amp;via=jgthms"
          >
            <span>Submit</span>
          </a>
        </CoolButton>
      </section>
    </article>
  );
}

export default Signup;

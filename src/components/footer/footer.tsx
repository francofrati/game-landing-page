import { BsInstagram, BsDiscord, BsFacebook, BsYoutube } from "react-icons/bs";

function Footer() {
  return (
    <footer>
      <section id="socialMedia">
        <BsInstagram size={40} />
        <BsDiscord size={40} />
        <BsFacebook size={40} />
        <BsYoutube size={40} />
      </section>
      <section id="legalSection">
        <span>ABOUT US</span>
        <span>SERVER STATUS</span>
        <span>SUPPORT</span>
        <span>TERMS OF USE</span>
      </section>
      <p className="copyright">
        © Goblin’s Forest 2024. All rights reserved. Content on this site is
        protected by copyright. Unauthorized use is prohibited. You may download
        and share for personal, non-commercial use with proper attribution.
      </p>
    </footer>
  );
}

export default Footer;

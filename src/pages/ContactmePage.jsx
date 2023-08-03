function ContactmePage() {
  return (
    <div className="app-wrapper-contact">
      <div className="section-title">
        <p>CONTACT ME</p>
        <h2>Get In Touch</h2>
      </div>
      {/* กล่องซ้าย */}
      <div className="contact-information">
        <div className="contact-information-title"></div>
        <div className="contact-information-message"></div>
        <div className="contact-information-name"></div>
        <div className="contact-information-phone"></div>
        <div className="contact-information-email"></div>
        <div className="contact-information-social-link">
          {/* map ตรงนี้ */}
          <div className="instagram"><img src=""/></div>
          <div className="Twitter"><img src=""/></div>
          <div className="Facebook"><img src=""/></div>
          <div className="github"><img src=""/></div>
        </div>
      </div>
      {/* กล่องขวา */}
      <div className="contact-from"></div>
    </div>
  );
}

export default ContactmePage;

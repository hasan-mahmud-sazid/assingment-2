import PageShell from "../components/PageShell";

function ContactPage() {
  return (
    <PageShell
      heroContent={
        <section className="hero-box">
          <div className="text">
            <h1>
              Contact <br />
              <span className="miama-font">our team</span>
            </h1>
            <p>
              Have a question about memberships or programs? Our team is here to
              help.
            </p>
            <div className="btn-box">
              <button className="primary-btn m-r-2">Call Us</button>
              <button className="secondary-btn">Email Us</button>
            </div>
          </div>
          <div className="img">
            <img src="/images/run.jpg" alt="" />
          </div>
        </section>
      }
    >
      <section className="run">
        <div className="run-extra">
          <div className="text">
            <h1 className="title">Ready to start?</h1>
            <p className="secondary-color">
              We reply within one business day and can guide you to the best
              program for your lifestyle.
            </p>
            <button className="primary-btn">Join Now</button>
          </div>
          <img src="/images/run.jpg" alt="" className="img" />
        </div>
      </section>
    </PageShell>
  );
}

export default ContactPage;

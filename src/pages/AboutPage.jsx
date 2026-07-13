import PageShell from "../components/PageShell";

function AboutPage() {
  return (
    <PageShell
      heroContent={
        <section className="hero-box">
          <div className="text">
            <h1>
              About <br />
              <span className="miama-font">Fitness</span>
            </h1>
            <p>
              We combine expert coaching, modern facilities, and a supportive
              community so every member can grow stronger with confidence.
            </p>
            <div className="btn-box">
              <button className="primary-btn m-r-2">Meet Coaches</button>
              <button className="secondary-btn">View Programs</button>
            </div>
          </div>
          <div className="img">
            <img src="/images/image%201.png" alt="" />
          </div>
        </section>
      }
    >
      <section className="change-habit">
        <div className="main-box">
          <div className="head">
            <h1 className="title">Why Members Choose Us</h1>
            <p className="about secondary-color">
              Our mission is to make fitness approachable, motivating, and
              effective for everyone who walks through the door.
            </p>
          </div>
          <div className="skills">
            <div className="cards">
              <img src="/images/image%203.png" alt="" />
              <h3 className="title">Balanced</h3>
              <p className="about secondary-color">
                Programs built around consistent progress and recovery.
              </p>
            </div>
            <div className="cards">
              <img src="/images/image%202.png" alt="" />
              <h3 className="title">Inclusive</h3>
              <p className="about secondary-color">
                Support for every fitness level, body type, and schedule.
              </p>
            </div>
            <div className="cards">
              <img src="/images/image%204.png" alt="" />
              <h3 className="title">Expert</h3>
              <p className="about secondary-color">
                Guidance from coaches who understand real-world goals.
              </p>
            </div>
            <div className="cards">
              <img src="/images/image%205.png" alt="" />
              <h3 className="title">Flexible</h3>
              <p className="about secondary-color">
                Train at home, in the gym, or through our mobile app.
              </p>
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}

export default AboutPage;

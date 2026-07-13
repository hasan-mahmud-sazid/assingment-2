import PageShell from "../components/PageShell";

function ServicesPage() {
  return (
    <PageShell
      heroContent={
        <section className="hero-box">
          <div className="text">
            <h1>
              Flexible <br />
              <span className="miama-font">services</span> for <br />
              your goals
            </h1>
            <p>
              From personal coaching to guided plans, we build a fitness
              experience around your pace, schedule, and ambitions.
            </p>
            <div className="btn-box">
              <button className="primary-btn m-r-2">Book a Session</button>
              <button className="secondary-btn">Explore Plans</button>
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
            <h1 className="title">Our Services</h1>
            <p className="about secondary-color">
              Discover personalized programs for every level, from beginner
              routines to performance-focused training.
            </p>
          </div>
          <div className="skills">
            <div className="cards">
              <img src="/images/image%203.png" alt="" />
              <h3 className="title">Strength</h3>
              <p className="about secondary-color">
                Build endurance and confidence through structured coaching.
              </p>
            </div>
            <div className="cards">
              <img src="/images/image%202.png" alt="" />
              <h3 className="title">Recovery</h3>
              <p className="about secondary-color">
                Reduce fatigue and recover faster with guided routines.
              </p>
            </div>
            <div className="cards">
              <img src="/images/image%204.png" alt="" />
              <h3 className="title">Nutrition</h3>
              <p className="about secondary-color">
                Get practical nutrition support tailored to your goals.
              </p>
            </div>
            <div className="cards">
              <img src="/images/image%205.png" alt="" />
              <h3 className="title">Mobility</h3>
              <p className="about secondary-color">
                Move better and stay active with low-impact training.
              </p>
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}

export default ServicesPage;

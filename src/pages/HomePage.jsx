import PageShell from "../components/PageShell";
import BmiCalculator from "../pages/BmiCalculator.jsx";
import { FaPlay } from "react-icons/fa";

function HomePage() {
  return (
    <PageShell
      heroContent={
        <section className="mx-auto flex max-w-7xl flex-col gap-12 px-4 py-10 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8 lg:py-20">
          <div className="max-w-2xl text-left">
            <h1 className="text-4xl font-black leading-[1.15] sm:text-6xl lg:text-7xl">
              Get body in <br />
              <span className="inline-block font-[Miama] text-6xl leading-none text-orange-500 sm:text-8xl lg:text-[9rem]">
                shape
              </span>{" "}
              & stay <br />
              healthy
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-slate-300 sm:text-lg sm:leading-8">
              Welcome to Fitness, where your goals become our priority. With
              expert trainers, modern equipment, and a supportive community,
              we're here to help you achieve your best. Start your journey with
              us today.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <button className="btn btn-primary whitespace-nowrap rounded-full border-0 bg-orange-500 px-20 py-4 text-xl font-bold text-white hover:bg-orange-600 w-full sm:w-auto transition-all">
                Join Club Now!
              </button>
              <button className="btn btn-outline whitespace-nowrap rounded-full border-white/40 px-20 py-4 text-xl font-bold text-white hover:bg-white/10 w-full sm:w-auto transition-all">
                Download App
              </button>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-md sm:max-w-xl lg:mx-0">
            <div className="absolute left-4 top-30 z-10 rounded-xl border border-white/10 bg-slate-900/60 px-3 py-2 backdrop-blur sm:left-6 sm:top-50 sm:rounded-2xl sm:px-4 sm:py-3">
              <h2 className="text-xl font-bold sm:text-2xl">500+</h2>
              <p className="text-xs text-slate-300 sm:text-sm">
                Free Workout Videos
              </p>
            </div>

            <img
              src="/images/image%201.png"
              alt="Fitness Hero"
              className="w-[75%] h-auto rounded-[1.5rem] sm:rounded-[2rem] border border-white/10 shadow-2xl object-cover"
            />

            <div className="absolute bottom-16 right-4 z-10 flex items-center gap-2 rounded-xl border border-white/10 bg-slate-900/80 px-3 py-2 backdrop-blur sm:right-6 sm:bottom-24 sm:rounded-2xl sm:gap-3 sm:px-4 sm:py-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-orange-500 sm:h-11 sm:w-11">
                <FaPlay className="ml-0.5 text-sm sm:ml-1 sm:text-lg text-white" />
              </div>
              <div>
                <h3 className="text-lg font-semibold sm:text-xl">350+</h3>
                <p className="text-xs text-slate-300 sm:text-sm">
                  Video tutorial
                </p>
              </div>
            </div>
          </div>
        </section>
      }
    >
      <section className="px-4 py-16 sm:px-6 lg:px-8" id="services-section">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-10 max-w-3xl text-center">
            <h2 className="text-4xl font-black sm:text-5xl">
              Change Your Habits
            </h2>
            <p className="mt-4 text-lg leading-8 text-slate-400">
              We believe fitness should be accessible to everyone, everywhere,
              regardless of income or access to a gym.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
            {[
              {
                image: "/images/image%203.png",
                title: "Movement",
                text: "We believe fitness should be accessible to everyone",
              },
              {
                image: "/images/image%202.png",
                title: "Time",
                text: "We believe fitness should be accessible to everyone",
              },
              {
                image: "/images/image%204.png",
                title: "Practice",
                text: "We believe fitness should be accessible to everyone",
              },
              {
                image: "/images/image%205.png",
                title: "Weight Loss",
                text: "We believe fitness should be accessible to everyone.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-[2rem] border border-white/10 bg-slate-900/70 p-6 text-center shadow-xl backdrop-blur"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="mx-auto mb-5 h-24 w-24 rounded-full border border-orange-500/40 object-cover"
                />
                <h3 className="mb-3 text-xl font-semibold">{item.title}</h3>
                <p className="text-sm leading-7 text-slate-400">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8" id="about-section">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 rounded-[2rem] border border-white/10 bg-slate-900/70 p-8 shadow-2xl lg:flex-row lg:items-center lg:justify-between lg:p-12">
          <div className="max-w-2xl">
            <h2 className="text-4xl font-black sm:text-5xl">
              Run an Extra <br />
              Mile Easily
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-400">
              We believe fitness should be accessible to everyone, everywhere,
              regardless of income or access to a gym. With hundreds of
              professional workouts.
            </p>
            <button className="btn mt-8 rounded-full border-0 bg-orange-500 px-8 text-white hover:bg-orange-600">
              Join Now
            </button>
          </div>
          <img
            src="/images/run.jpg"
            alt=""
            className="h-[320px] w-full max-w-[420px] rounded-[2rem] object-cover shadow-xl lg:h-[380px]"
          />
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl text-center">
          <h2 className="text-4xl font-black sm:text-5xl">BMI Calculator</h2>
          <p className="mx-auto mt-4 max-w-3xl text-lg leading-8 text-slate-400">
            We believe fitness should be accessible to everyone, everywhere,
            regardless of income or access to a gym.
          </p>
        </div>
        <div className="mx-auto mt-10 max-w-7xl rounded-[2rem] border border-white/10 bg-slate-900/70 p-8 shadow-2xl lg:p-10">
          <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr]">
            <div>
              <h3 className="mb-6 text-2xl font-semibold">
                BMI Calculator Chart
              </h3>
              <div className="overflow-hidden rounded-2xl border border-white/10">
                <table className="min-w-full text-left text-sm">
                  <thead className="bg-white/10">
                    <tr>
                      <th className="px-4 py-3">BMI</th>
                      <th className="px-4 py-3">Weight Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-t border-white/10">
                      <td className="px-4 py-3 text-slate-300">Below 18.5</td>
                      <td className="px-4 py-3 text-slate-300">Underweight</td>
                    </tr>
                    <tr className="border-t border-white/10">
                      <td className="px-4 py-3 text-slate-300">18.5 - 24.9</td>
                      <td className="px-4 py-3 text-slate-300">Healthy</td>
                    </tr>
                    <tr className="border-t border-white/10">
                      <td className="px-4 py-3 text-slate-300">25.0 - 29.5</td>
                      <td className="px-4 py-3 text-slate-300">Overweight</td>
                    </tr>
                    <tr className="border-t border-white/10">
                      <td className="px-4 py-3 text-slate-300">
                        30.0 - and Above
                      </td>
                      <td className="px-4 py-3 text-slate-300">Obese</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* পৃথক করা BmiCalculator কম্পোনেন্টটি এখানে রেন্ডার হচ্ছে */}
            <div>
              <BmiCalculator />
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8" id="contact-section">
        <div className="mx-auto max-w-7xl text-center">
          <h2 className="text-4xl font-black sm:text-5xl">Meet Our Team</h2>
          <p className="mx-auto mt-4 max-w-3xl text-lg leading-8 text-slate-400">
            Meet our team of passionate fitness experts, dedicated to helping
            you achieve your health and wellness goals with personalized
            guidance and support.
          </p>
        </div>
        <div className="mx-auto mt-10 grid max-w-7xl gap-6 md:grid-cols-2 xl:grid-cols-3">
          {[
            { image: "/images/trainer1.png", name: "Jerome Bell" },
            { image: "/images/trainer2.png", name: "Cameron William" },
            { image: "/images/trainer3.png", name: "Darrell Steward" },
            { image: "/images/trainer4.png", name: "Dianna Russell" },
            { image: "/images/trainer5.png", name: "Cody Fisher" },
            { image: "/images/trainer6.png", name: "Theresa Webb" },
          ].map((trainer) => (
            <div
              key={trainer.name}
              className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-slate-900/70 shadow-xl"
            >
              <img
                src={trainer.image}
                alt={trainer.name}
                className="h-[340px] w-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-black/80 to-transparent px-6 py-6">
                <h3 className="text-xl font-semibold">{trainer.name}</h3>
                <p className="text-sm text-slate-300">Trainer</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl text-center">
          <h2 className="text-4xl font-black sm:text-5xl">OUR PRICING PLAN</h2>
          <p className="mx-auto mt-4 max-w-3xl text-lg leading-8 text-slate-400">
            Our pricing plan comes with various membership tiers, each tailored
            to cater to different preferences and fitness aspirations.
          </p>
        </div>
        <div className="mx-auto mt-10 grid max-w-7xl gap-6 lg:grid-cols-3">
          {[
            {
              title: "Basic Plan",
              price: "$16",
              features: ["Smart workout plan", "At home workouts"],
            },
            {
              title: "Weekly Plan",
              price: "$25",
              features: ["PRO Gyms", "Smart workout plan", "At home workouts"],
            },
            {
              title: "Monthly Plan",
              price: "$45",
              features: [
                "ELITE Gyms & Classes",
                "PRO Gyms",
                "Smart workout plan",
                "At home workouts",
                "Personal Training",
              ],
            },
          ].map((plan) => (
            /* h-full এবং justify-between যোগ করা হয়েছে কার্ডগুলোকে সমান রাখার জন্য */
            <div
              key={plan.title}
              className="flex flex-col justify-between h-full rounded-[2rem] border border-white/10 bg-slate-900/70 p-8 shadow-xl"
            >
              <div>
                <h3 className="text-2xl font-semibold">{plan.title}</h3>
                <div className="mt-4 border-b border-white/10 pb-4">
                  <p className="text-4xl font-black text-orange-500">
                    {plan.price}
                  </p>
                </div>
                <ul className="mt-6 space-y-3 text-slate-400">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2">
                      <span className="h-2.5 w-2.5 rounded-full bg-orange-500" />{" "}
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* mt-auto ক্লাসটি বাটনকে সবসময় নিচে লক করে রাখবে */}
              <button className="btn mt-auto rounded-full border-0 bg-orange-500 px-6 py-2.5 text-base font-bold text-white transition-all hover:bg-orange-600 sm:px-20 sm:py-4 sm:text-xl">
                Join Now
              </button>
            </div>
          ))}
        </div>
      </section>
    </PageShell>
  );
}

export default HomePage;

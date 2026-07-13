import { useState } from "react";

function BmiCalculator() {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [age, setAge] = useState("");
  const [sex, setSex] = useState("");
  const [activity, setActivity] = useState("");
  const [bmiResult, setBmiResult] = useState(null);
  const [bmiStatus, setBmiStatus] = useState("");
  const [formError, setFormError] = useState("");

  const calculateBmi = (e) => {
    e.preventDefault();
    setFormError("");

    if (!height || !weight) {
      setFormError(
        "Please enter both height and weight to calculate your BMI.",
      );
      return;
    }

    const parsedHeight = parseFloat(height);
    const parsedWeight = parseFloat(weight);

    if (parsedHeight <= 0 || parsedWeight <= 0) {
      setFormError("Height and weight must be greater than zero.");
      return;
    }

    const heightInMeters = parsedHeight / 100;
    const weightInKg = parsedWeight;
    const bmi = (weightInKg / (heightInMeters * heightInMeters)).toFixed(1);

    setBmiResult(bmi);

    if (Number(bmi) < 18.5) {
      setBmiStatus("Underweight");
    } else if (Number(bmi) <= 24.9) {
      setBmiStatus("Healthy");
    } else if (Number(bmi) <= 29.5) {
      setBmiStatus("Overweight");
    } else {
      setBmiStatus("Obese");
    }
  };

  const statusTone =
    bmiStatus === "Healthy"
      ? "text-green-400"
      : bmiStatus === "Underweight"
        ? "text-yellow-400"
        : "text-red-400";

  return (
    <div className="rounded-[1.75rem] border border-orange-500/20 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 p-6 shadow-[0_20px_60px_rgba(0,0,0,0.35)]">
      <div className="flex items-center gap-3">
        <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-orange-500/15 text-xl">
          ⚡
        </div>
        <div>
          <h3 className="text-2xl font-semibold">Calculate your BMI</h3>
          <p className="text-sm text-slate-400">
            Track your progress with a fast and friendly fitness check.
          </p>
        </div>
      </div>

      <form onSubmit={calculateBmi} className="mt-6 space-y-4">
        <div className="grid gap-3 md:grid-cols-2">
          <label className="block">
            <span className="mb-2 block text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">
              Height
            </span>
            <div className="flex items-center gap-2 rounded-2xl border border-white/10 bg-white/10 px-3 py-3">
              <span className="text-lg">📏</span>
              <input
                className="w-full bg-transparent text-white outline-none placeholder:text-slate-400"
                type="number"
                min="0"
                step="0.1"
                placeholder="Height/cm"
                value={height}
                onChange={(e) => setHeight(e.target.value)}
              />
            </div>
          </label>

          <label className="block">
            <span className="mb-2 block text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">
              Weight
            </span>
            <div className="flex items-center gap-2 rounded-2xl border border-white/10 bg-white/10 px-3 py-3">
              <span className="text-lg">⚖️</span>
              <input
                className="w-full bg-transparent text-white outline-none placeholder:text-slate-400"
                type="number"
                min="0"
                step="0.1"
                placeholder="Weight/kg"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
              />
            </div>
          </label>
        </div>

        <div className="grid gap-3 md:grid-cols-2">
          <label className="block">
            <span className="mb-2 block text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">
              Age
            </span>
            <div className="rounded-2xl border border-white/10 bg-white/10 px-3 py-3">
              <input
                className="w-full bg-transparent text-white outline-none placeholder:text-slate-400"
                type="number"
                min="1"
                placeholder="Age"
                value={age}
                onChange={(e) => setAge(e.target.value)}
              />
            </div>
          </label>

          <label className="block">
            <span className="mb-2 block text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">
              Sex
            </span>
            <div className="rounded-2xl border border-white/10 bg-white/10 px-3 py-3">
              <select
                className="w-full bg-transparent text-slate-300 outline-none"
                value={sex}
                onChange={(e) => setSex(e.target.value)}
              >
                <option value="" className="text-slate-700">
                  Select sex
                </option>
                <option value="male" className="text-slate-700">
                  Male
                </option>
                <option value="female" className="text-slate-700">
                  Female
                </option>
              </select>
            </div>
          </label>
        </div>

        <label className="block">
          <span className="mb-2 block text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">
            Activity
          </span>
          <div className="rounded-2xl border border-white/10 bg-white/10 px-3 py-3">
            <select
              className="w-full bg-transparent text-slate-300 outline-none"
              value={activity}
              onChange={(e) => setActivity(e.target.value)}
            >
              <option value="" className="text-slate-700">
                Select an activity factor
              </option>
              <option value="sedentary" className="text-slate-700">
                Sedentary (little or no exercise)
              </option>
              <option value="light" className="text-slate-700">
                Lightly active (1-3 days/week)
              </option>
              <option value="moderate" className="text-slate-700">
                Moderately active (3-5 days/week)
              </option>
              <option value="active" className="text-slate-700">
                Very active (6-7 days/week)
              </option>
            </select>
          </div>
        </label>

        {formError && (
          <div className="rounded-2xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-300">
            {formError}
          </div>
        )}

        <button className="btn mt-auto rounded-full border-0 bg-orange-500 px-6 py-2.5 text-base font-bold text-white transition-all hover:bg-orange-600 sm:px-20 sm:py-4 sm:text-xl">
          Calculate BMI
        </button>
      </form>

      {bmiResult && (
        <div className="mt-6 rounded-2xl border border-orange-500/20 bg-orange-500/10 p-4 text-left shadow-lg">
          <p className="text-sm uppercase tracking-[0.3em] text-slate-400">
            Your BMI is
          </p>
          <div className="mt-2 flex flex-wrap items-end justify-between gap-3">
            <span className="text-4xl font-black text-orange-500">
              {bmiResult}
            </span>
            <span
              className={`rounded-full bg-white/10 px-3 py-1 text-sm font-semibold ${statusTone}`}
            >
              {bmiStatus}
            </span>
          </div>
        </div>
      )}
    </div>
  );
}

export default BmiCalculator;

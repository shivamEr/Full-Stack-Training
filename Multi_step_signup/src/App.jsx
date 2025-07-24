// src/App.jsx
import { useState } from "react";
import { MultiFormProvider } from "./Context/MultiFormContext";
import { Step1 } from "./components/Step1";
import { Step2 } from "./components/Step2";
import { ReviewSubmit } from "./components/ReviewSubmit";
import { ProgressBar } from "./components/ProgressBar";

function App() {
  const [data, setData] = useState({
    name: "",
    email: "",
    phone: "",
    address: ""
  });

  const [step, setStep] = useState(1);

  const next = () => setStep((prev) => Math.min(prev + 1, 3));
  const prev = () => setStep((prev) => Math.max(prev - 1, 1));

  return (
    <MultiFormProvider value={{ data, setData, step, setStep, next, prev }}>
      <div className="h-screen flex justify-center items-center bg-gray-100">
        <div>
          <ProgressBar />
          {step === 1 && <Step1 />}
          {step === 2 && <Step2 />}
          {step === 3 && <ReviewSubmit />}
        </div>
      </div>
    </MultiFormProvider>
  );
}

export default App;

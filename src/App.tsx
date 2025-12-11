import { useState } from 'react'
import Sidebar from './components/Sidebar'
import Step1Info from './components/Step1Info'
import Step2Plan from './components/Step2Plan'
import Step3Addons from './components/Step3Addons'
import Step4Summary from './components/Step4Summary'
import ThankYou from './components/ThankYou'
import StepNavigation from './components/StepNavigation'

export type FormData = {
  name: string
  email: string
  phone: string
  plan: 'arcade' | 'advanced' | 'pro'
  billing: 'monthly' | 'yearly'
  addons: string[]
}

const initialData: FormData = {
  name: '',
  email: '',
  phone: '',
  plan: 'arcade',
  billing: 'monthly',
  addons: [],
}

export default function App() {
  const [step, setStep] = useState(1)
  const [data, setData] = useState<FormData>(initialData)
  const [done, setDone] = useState(false)

  const next = () => setStep((s) => Math.min(5, s + 1))
  const back = () => setStep((s) => Math.max(1, s - 1))

  return (
    <div className="min-h-screen flex items-center justify-center p-6">
      <div className="w-full max-w-4xl bg-white rounded-xl shadow-md overflow-hidden md:flex">
        <Sidebar step={step} />
        <div className="p-8 flex-1">
          {done ? (
            // Show ThankYou inside the form area (keeps sidebar visible)
            <ThankYou />
          ) : (
            <>
              {step === 1 && <Step1Info data={data} onChange={setData} />}
              {step === 2 && <Step2Plan data={data} onChange={setData} />}
              {step === 3 && <Step3Addons data={data} onChange={setData} />}
              {step === 4 && (
                <Step4Summary data={data} onChange={setData} onConfirm={() => { setDone(true) }} />
              )}
              <StepNavigation step={step} onNext={next} onBack={back} />
            </>
          )}
        </div>
      </div>
    </div>
  )
}

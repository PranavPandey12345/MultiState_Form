import type { FormData } from '../App'

type Props = {
  data: FormData
  onChange: (d: FormData) => void
}

export default function Step2Plan({ data, onChange }: Props) {
  const plans = [
    { id: 'arcade', name: 'Arcade', monthly: 9, yearly: 90 },
    { id: 'advanced', name: 'Advanced', monthly: 12, yearly: 120 },
    { id: 'pro', name: 'Pro', monthly: 15, yearly: 150 },
  ] as const

  return (
    <div>
      <h2 className="text-2xl font-bold mb-2">Select your plan</h2>
      <p className="text-gray-500 mb-6">You have the option of monthly or yearly billing.</p>

      <div className="flex gap-4 flex-col md:flex-row">
        {plans.map((p) => (
          <button key={p.id} onClick={() => onChange({ ...data, plan: p.id as FormData['plan'] })} className={`border rounded p-4 flex-1 text-left ${data.plan === p.id ? 'border-indigo-600 bg-indigo-50' : ''}`}>
            <div className="font-semibold">{p.name}</div>
            <div className="text-sm text-gray-600">${data.billing === 'monthly' ? p.monthly : p.yearly}/{data.billing === 'monthly' ? 'mo' : 'yr'}</div>
          </button>
        ))}
      </div>

      {/* Billing toggle */}
      <div className="mt-6 flex items-center gap-3">
        <div className={`font-medium ${data.billing === 'monthly' ? 'text-indigo-700' : 'text-gray-600'}`}>Monthly</div>

        <label className="relative inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            checked={data.billing === 'yearly'}
            onChange={(e) => onChange({ ...data, billing: e.target.checked ? 'yearly' : 'monthly' })}
            className="sr-only peer"
            aria-label="Toggle billing period"
          />

          {/* track */}
          <div className="w-11 h-6 bg-gray-200 rounded-full peer-checked:bg-indigo-600 transition-colors" />

          {/* knob */}
          <span
            aria-hidden
            className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full shadow transform transition-transform peer-checked:translate-x-5"
          />
        </label>

        <span className="ml-3 text-sm text-gray-500">Yearly</span>
      </div>
    </div>
  )
}

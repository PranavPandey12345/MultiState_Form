

type Props = { step: number }

export default function Sidebar({ step }: Props) {
  const steps = [
    { id: 1, title: 'Your info' },
    { id: 2, title: 'Select plan' },
    { id: 3, title: 'Add-ons' },
    { id: 4, title: 'Summary' },
  ]

  return (
    <div className="bg-linear-to-b from-indigo-700 to-purple-700 text-white p-6 md:w-64">
      <div className="hidden md:block">
        {steps.map((s) => (
          <div key={s.id} className="flex items-center gap-4 mb-6">
            <div className={`w-8 h-8 rounded-full flex items-center justify-center border-2 ${step === s.id ? 'bg-white text-indigo-700 border-white' : 'border-white/40 text-white/90'}`}>
              {s.id}
            </div>
            <div className="text-sm">
              <div className="opacity-75">STEP {s.id}</div>
              <div className="font-medium">{s.title}</div>
            </div>
          </div>
        ))}
      </div>
      <div className="md:hidden flex gap-3">
        {steps.map((s) => (
          <div key={s.id} className={`w-8 h-8 rounded-full flex items-center justify-center text-sm ${step===s.id ? 'bg-white text-indigo-700' : 'bg-white/20 text-white/80'}`}>{s.id}</div>
        ))}
      </div>
    </div>
  )
}

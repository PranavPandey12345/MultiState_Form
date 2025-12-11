
import type { FormData } from '../App'

type Props = { data: FormData; onChange: (d: FormData) => void }

const options = [
  { id: 'online-service', title: 'Online service', desc: 'Access to multiplayer games', monthly: 1, yearly: 10 },
  { id: 'larger-storage', title: 'Larger storage', desc: 'Extra 1TB of cloud save', monthly: 2, yearly: 20 },
  { id: 'custom-profile', title: 'Customizable Profile', desc: 'Custom theme on your profile', monthly: 2, yearly: 20 },
]

export default function Step3Addons({ data, onChange }: Props) {
  const toggle = (id: string) => {
    const has = data.addons.includes(id)
    onChange({ ...data, addons: has ? data.addons.filter((a) => a !== id) : [...data.addons, id] })
  }

  return (
    <div>
      <h2 className="text-2xl font-bold mb-2">Pick add-ons</h2>
      <p className="text-gray-500 mb-6">Add-ons help enhance your gaming experience.</p>

      <div className="space-y-3 max-w-md">
        {options.map((o) => (
          <label key={o.id} className={`flex items-center justify-between border rounded p-3 ${data.addons.includes(o.id) ? 'bg-indigo-50 border-indigo-400' : ''}`}>
            <div>
              <div className="font-medium">{o.title}</div>
              <div className="text-sm text-gray-600">{o.desc}</div>
            </div>
            <div className="text-sm text-indigo-700">+${data.billing==='monthly' ? o.monthly : o.yearly}/{data.billing==='monthly' ? 'mo' : 'yr'}</div>
            <input type="checkbox" checked={data.addons.includes(o.id)} onChange={() => toggle(o.id)} className="ml-3" />
          </label>
        ))}
      </div>
    </div>
  )
}


import type { FormData } from '../App'

type Props = { data: FormData; onChange: (d: FormData) => void; onConfirm: () => void }

export default function Step4Summary({ data, onChange, onConfirm }: Props) {
  const planPrice = data.plan === 'arcade' ? (data.billing==='monthly'?9:90) : data.plan==='advanced' ? (data.billing==='monthly'?12:120) : (data.billing==='monthly'?15:150)
  const addonsList = [
    { id: 'online-service', price: data.billing==='monthly'?1:10 },
    { id: 'larger-storage', price: data.billing==='monthly'?2:20 },
    { id: 'custom-profile', price: data.billing==='monthly'?2:20 },
  ]
  const addonsTotal = addonsList.filter(a => data.addons.includes(a.id)).reduce((s,a)=>s+a.price,0)
  const total = planPrice + addonsTotal

  return (
    <div>
      <h2 className="text-2xl font-bold mb-2">Finishing up</h2>
      <p className="text-gray-500 mb-6">Double-check everything looks OK before confirming.</p>

      <div className="border rounded p-4 max-w-md">
        <div className="flex justify-between items-center">
          <div>
            <div className="font-medium">{data.plan.charAt(0).toUpperCase()+data.plan.slice(1)} ({data.billing})</div>
            <button className="text-sm text-gray-500 underline mt-1" onClick={() => onChange({ ...data, billing: data.billing==='monthly' ? 'yearly' : 'monthly' })}>Change</button>
          </div>
          <div className="font-semibold">${planPrice}/{data.billing==='monthly'?'mo':'yr'}</div>
        </div>

        <div className="mt-4 space-y-2">
          {addonsList.filter(a => data.addons.includes(a.id)).map(a => (
            <div key={a.id} className="flex justify-between text-sm text-gray-700">
              <div>{a.id.replace('-', ' ')}</div>
              <div>+${a.price}/{data.billing==='monthly'?'mo':'yr'}</div>
            </div>
          ))}
        </div>

        <div className="mt-4 flex justify-between text-gray-700">
          <div className="text-sm">Total (per {data.billing==='monthly'?'month':'year'})</div>
          <div className="font-bold text-indigo-700">${total}/{data.billing==='monthly'?'mo':'yr'}</div>
        </div>

        <div className="mt-6">
          <button onClick={onConfirm} className="w-full bg-indigo-600 text-white py-2 rounded">Confirm</button>
        </div>
      </div>
    </div>
  )
}

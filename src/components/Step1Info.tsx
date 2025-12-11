
import type { FormData } from '../App'

type Props = {
  data: FormData
  onChange: (d: FormData) => void
}

export default function Step1Info({ data, onChange }: Props) {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-2">Personal info</h2>
      <p className="text-gray-500 mb-6">Please provide your name, email, and phone number.</p>

      <div className="space-y-4 max-w-md">
        <label className="block">
          <div className="text-sm font-medium mb-1">Name</div>
          <input value={data.name} onChange={(e) => onChange({ ...data, name: e.target.value })} className="w-full border rounded px-3 py-2" />
        </label>
        <label className="block">
          <div className="text-sm font-medium mb-1">Email</div>
          <input value={data.email} onChange={(e) => onChange({ ...data, email: e.target.value })} className="w-full border rounded px-3 py-2" />
        </label>
        <label className="block">
          <div className="text-sm font-medium mb-1">Phone</div>
          <input value={data.phone} onChange={(e) => onChange({ ...data, phone: e.target.value })} className="w-full border rounded px-3 py-2" />
        </label>
      </div>
    </div>
  )
}

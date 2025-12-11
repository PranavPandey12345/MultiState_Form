import { assets } from '../../src/assets/assets'

export default function ThankYou() {
  return (
    <div className="text-center py-12">
      <img src={assets.thankYou} className="px-60"/>
      <h2 className="text-2xl font-bold mb-4">Thank you!</h2>
      <p className="text-gray-600">Thanks for confirming your subscription. We hope you have fun using our platform. If you ever need support, please feel free to email us at support@loremgaming.com.</p>
    </div>
  )
}

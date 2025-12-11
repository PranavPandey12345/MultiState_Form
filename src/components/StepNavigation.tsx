type Props = {
  step: number
  onNext: () => void
  onBack: () => void
}

export default function StepNavigation({ step, onNext, onBack }: Props) {
  return (
    <div className="mt-6 flex justify-end max-w-md">
      {step !== 1 ? (
        <>
          <button onClick={onBack} className="text-gray-600 mr-4">Go Back</button>
          {/* Don't show "Next Step" on the summary step (4) */}
          {step !== 4 && (
            <button onClick={onNext} className="bg-indigo-600 text-white px-4 py-2 rounded">Next Step</button>
          )}
        </>
      ) : (
        <button onClick={onNext} className="bg-indigo-600 text-white px-4 py-2 rounded">Next Step</button>
      )}
    </div>
  )
}

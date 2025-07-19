interface LoadingSpinnerProps {
  isVisible: boolean
}

export default function LoadingSpinner({ isVisible }: LoadingSpinnerProps) {
  if (!isVisible) return null

  return (
    <div className="fixed inset-0 bg-white/90 flex items-center justify-center z-50 transition-opacity">
      <div className="w-10 h-10 border-4 border-gray-300 border-t-slate-800 rounded-full animate-spin"></div>
    </div>
  )
}

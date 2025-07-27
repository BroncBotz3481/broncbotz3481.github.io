export default function LoadingSpinner() {
  return (
    <div className="flex flex-col items-center justify-center space-y-3">
      <div className="relative">
        <div className="w-12 h-12 border-4 border-orange-200 rounded-full animate-spin">
          <div className="absolute top-0 left-0 w-12 h-12 border-4 border-transparent border-t-orange-600 rounded-full animate-spin"></div>
        </div>
      </div>
      <p className="text-sm text-slate-600 animate-pulse">Loading...</p>
    </div>
  )
}

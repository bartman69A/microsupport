export function FloresLogo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex flex-col items-center ${className}`}>
      <img
        src="/Experience.svg"
        alt="Flores - Better Benefits Experience"
        className="w-auto h-16 md:h-20"
      />
    </div>
  )
}

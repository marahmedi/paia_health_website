import { ArrowRight } from "lucide-react"
import { cn } from "../../lib/utils"


export function InteractiveHoverButton({
  children,
  className,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className={cn(
        "group bg-background relative w-auto cursor-pointer h-[2rem] overflow-hidden rounded-full border border-white/50 px-6 text-center font-semibold",
        className
      )}
      {...props}
    >
      <div className="flex items-center gap-2">
        <div className="bg-[#B0A1BF] h-2 w-2 rounded-full transition-all duration-300 group-hover:scale-[100.8] animate-pulse"></div>
        <span className="inline-block transition-all duration-300 group-hover:translate-x-12 group-hover:opacity-0 text-white">
          {children}
        </span>
      </div>
      <div className="text-black absolute top-0 z-10 flex h-full w-full translate-x-12 items-center justify-center gap-2 opacity-0 transition-all duration-300 group-hover:-translate-x-5 group-hover:opacity-100">
        <span>{children}</span>
        <ArrowRight />
      </div>
    </button>
  )
}


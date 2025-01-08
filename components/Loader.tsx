import { Loader2 } from "lucide-react"
export default function Loader({ size = 24, color = "text-primary" }: { size?: number; color?: string }) {
  return (
    <div className="flex items-center justify-center" role="status">
      <Loader2
        size={size}
        className={`${color} animate-spin`}
        aria-hidden="true"
      />
      <span className="sr-only">Cargando...</span>
    </div>
  )
}
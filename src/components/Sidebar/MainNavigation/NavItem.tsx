import { ChevronDown } from 'lucide-react'
import { ElementType } from 'react'

type NavItemProps = {
  icon: ElementType
  label: string
}

export function NavItem({ icon: Icon, label }: NavItemProps) {
  return (
    <a
      href="#"
      className="group flex items-center rounded-lg bg-zinc-50 px-3 py-2 text-zinc-900 hover:bg-violet-50 hover:text-zinc-800"
    >
      <Icon size={20} className="ml-1 text-zinc-500" />
      <span className="ml-2 font-medium text-zinc-700 group-hover:text-violet-500">
        {label}
      </span>
      <ChevronDown
        size={20}
        className="ml-auto text-zinc-400 group-hover:text-violet-500"
      />
    </a>
  )
}

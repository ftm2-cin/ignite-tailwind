import Logo from './Logo'
import { Search } from 'lucide-react'

export function SideBar() {
  return (
    <aside className="space-y-6 border-r border-zinc-200 px-5 py-8">
      <Logo />
      <div className="itens-center flex w-full gap-2 rounded-lg border border-zinc-300 px-3 py-2 shadow-sm">
        <Search size={20} className="text-zinc-500" />
        <input
          type="text"
          placeholder="Search"
          className="flex-1 border-0 bg-transparent p-0 text-zinc-900 placeholder-zinc-600 "
        />
      </div>
    </aside>
  )
}

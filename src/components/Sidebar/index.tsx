import Logo from './Logo'
import { Cog, LifeBuoy, Search } from 'lucide-react'
import { MainNavigation } from './MainNavigation'
import { NavItem } from './MainNavigation/NavItem'
import { UsedSpaceWidget } from './UsedSpaceWidget'

export function SideBar() {
  return (
    <aside className="flex flex-col border-r border-zinc-200 px-5 py-8">
      <Logo />
      <div className="itens-center mt-6 flex w-full gap-2 rounded-lg border border-zinc-300 px-3 py-2 shadow-sm">
        <Search size={20} className="text-zinc-500" />
        <input
          type="text"
          placeholder="Search"
          className="flex-1 border-0 bg-transparent p-0 text-zinc-900 placeholder-zinc-600 "
        />
      </div>
      <MainNavigation />

      <div className="mb-3 mt-auto flex flex-col gap-5">
        <NavItem icon={LifeBuoy} label="Support" />
        <NavItem icon={Cog} label="Settings" />
      </div>

      <UsedSpaceWidget />
    </aside>
  )
}

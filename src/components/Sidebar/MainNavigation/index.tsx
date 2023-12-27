import {
  Home,
  BarChart,
  SquareStack,
  Flag,
  CheckSquare,
  Users,
} from 'lucide-react'
import { NavItem } from './NavItem'

export function MainNavigation() {
  return (
    <nav className="mt-6 flex flex-col space-y-1">
      <NavItem icon={Home} label="Home" />
      <NavItem icon={BarChart} label="Dashboard" />
      <NavItem icon={SquareStack} label="Projects" />
      <NavItem icon={CheckSquare} label="Tasks" />
      <NavItem icon={Flag} label="Reporting" />
      <NavItem icon={Users} label="Users" />
    </nav>
  )
}

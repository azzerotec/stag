import {
  CalendarIcon,
  DocumentDuplicateIcon,
  FolderIcon,
  HomeIcon,
  UsersIcon,
} from "@heroicons/react/24/outline";
import type { NavigationItem } from "./NavigationItem";
import { DesktopSidebar } from "./DesktopSidebar";

const navigation: NavigationItem[] = [
  { name: "Home", href: "/", icon: HomeIcon },
  { name: "Processos", href: "cases", icon: UsersIcon },
  { name: "Clientes", href: "clients", icon: FolderIcon },
  { name: "Agenda", href: "agenda", icon: CalendarIcon },
  {
    name: "Tarefas",
    href: "tasks",
    icon: DocumentDuplicateIcon,
  },
];

export const Sidebar = () => <DesktopSidebar navigation={navigation} />;

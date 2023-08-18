import type { NavigationItem } from "./NavigationItem";
import { DesktopSidebar } from "./DesktopSidebar";

const navigation: NavigationItem[] = [
  { name: "Home", href: "/" },
  { name: "Processos", href: "cases" },
  { name: "Clientes", href: "clients" },
  { name: "Agenda", href: "agenda" },
  { name: "Tarefas", href: "tasks" },
];

export const Sidebar = () => <DesktopSidebar navigation={navigation} />;

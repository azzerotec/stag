import { Link } from "@remix-run/react";
import { NavigationItem } from "./NavigationItem";

type Props = {
  navigation: NavigationItem[];
};

export const DesktopSidebar = ({ navigation }: Props) => (
  <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-gray-900 px-6">
    <div className="flex h-16 shrink-0 items-center">
      <img
        className="h-8 w-auto"
        src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
        alt="Your Company"
      />
    </div>
    <nav className="flex flex-1 flex-col">
      <ul className="flex flex-1 flex-col gap-y-7">
        <li>
          <ul className="-mx-2 space-y-1">
            {navigation.map((item) => (
              <NavigationItem key={item.href} {...item} />
            ))}
          </ul>
        </li>
        <li className="-mx-6 mt-auto">
          <div className="flex items-center justify-between px-6 py-3 text-sm font-semibold leading-6 text-white ">
            <Link
              to="profile"
              className="flex items-center gap-x-4 rounded-md p-2 px-4 hover:bg-gray-800"
            >
              <img
                className="h-8 w-8 rounded-full bg-gray-800"
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt=""
              />
              <span className="sr-only">Your profile</span>
              <span aria-hidden="true">Tom Cook</span>
            </Link>
            <Link to="logout" className="rounded-md p-2 hover:bg-gray-800">
              <span>logout</span>
            </Link>
          </div>
        </li>
      </ul>
    </nav>
  </div>
);

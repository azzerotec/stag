import { NavLink } from "@remix-run/react";

export type NavigationItem = {
  name: string;
  icon?: any;
  href: string;
  count?: number;
};

const commonStyles =
  "group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6";

const itemStyle = (isActive: boolean) =>
  isActive
    ? "bg-gray-800 text-white " + commonStyles
    : "text-gray-400 hover:bg-gray-800 hover:text-white " + commonStyles;

const Count = ({ count }: Pick<NavigationItem, "count">) => (
  <span
    className="ml-auto w-9 min-w-max whitespace-nowrap rounded-full bg-gray-900 px-2.5 py-0.5 text-center text-xs font-medium leading-5 text-white ring-1 ring-inset ring-gray-700"
    aria-hidden="true"
  >
    {count}
  </span>
);

export const NavigationItem = ({
  name,
  icon: Icon,
  href,
  count,
}: NavigationItem) => {
  return (
    <li>
      <NavLink to={href} className={({ isActive }) => itemStyle(isActive)}>
        {Icon ? <Icon className="h-6 w-6 shrink-0" aria-hidden="true" /> : null}
        {name}
        {count ? <Count count={count} /> : null}
      </NavLink>
    </li>
  );
};

import { useState } from "react";
import { RadioGroup as HeadlessuiRadioGroup } from "@headlessui/react";
import type { Plan } from "~/models/plan.server";

type Props = {
  settings: Plan[];
  name?: string;
};

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export const RadioGroup = ({ settings, name }: Props) => {
  const [selected, setSelected] = useState(settings[0].priceId);

  return (
    <HeadlessuiRadioGroup
      value={selected}
      onChange={setSelected}
      name={name}
      className="mb-4"
    >
      <HeadlessuiRadioGroup.Label className="sr-only">
        Privacy setting
      </HeadlessuiRadioGroup.Label>
      <div className="-space-y-px rounded-md bg-white">
        {settings.map((setting) => (
          <HeadlessuiRadioGroup.Option
            key={setting.name}
            value={setting.priceId}
            className={({ checked }) =>
              classNames(
                checked
                  ? "z-10 border-indigo-200 bg-aDDDEE0"
                  : "border-gray-200",
                "relative mb-4 flex cursor-pointer rounded border p-4 focus:outline-none"
              )
            }
          >
            {({ active, checked }) => (
              <>
                <span
                  className={classNames(
                    checked
                      ? "border-transparent bg-a454D58"
                      : "border-gray-300 bg-white",
                    active ? "" : "",
                    "mt-0.5 flex h-4 w-4 shrink-0 cursor-pointer items-center justify-center rounded-full border"
                  )}
                  aria-hidden="true"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-white" />
                </span>
                <span className="ml-3 flex flex-col">
                  <HeadlessuiRadioGroup.Label
                    as="span"
                    className={classNames(
                      checked ? "text-a7B7B7B" : "text-gray-900",
                      "block text-sm font-medium  font-inter"
                    )}
                  >
                    {setting.name}
                  </HeadlessuiRadioGroup.Label>

                  <HeadlessuiRadioGroup.Description
                    as="span"
                    className={classNames(
                      checked ? "text-gray-900" : "text-gray-900",
                      "block text-sm font-medium font-inter"
                    )}
                  >
                    {setting.description}
                  </HeadlessuiRadioGroup.Description>

                  <HeadlessuiRadioGroup.Description
                    as="span"
                    className={classNames(
                      checked ? "text-a424A57" : "text-gray-500",
                      "block text-sm font-inter"
                    )}
                  >
                    {setting.plan}
                  </HeadlessuiRadioGroup.Description>
                </span>
              </>
            )}
          </HeadlessuiRadioGroup.Option>
        ))}
      </div>
    </HeadlessuiRadioGroup>
  );
};

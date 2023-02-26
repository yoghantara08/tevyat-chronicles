import { selectDay } from "@/content";
import { Listbox } from "@headlessui/react";
import { AiFillCaretDown } from "react-icons/ai";

interface Props {
  selected: string;
  setSelected: any;
}

const SelectDay: React.FC<Props> = ({ selected, setSelected }) => {
  return (
    <Listbox value={selected} onChange={setSelected}>
      <div className="relative">
        <Listbox.Button className="min-w-[170px] bg-mobileNav py-2 px-5 rounded flex justify-between items-center">
          <span className="capitalize">{selected}</span>
          <AiFillCaretDown />
        </Listbox.Button>
        <Listbox.Options className="absolute w-full bg-mobileNav py-2 rounded mt-1 space-y-2">
          {selectDay.map((day) => (
            <Listbox.Option
              key={day.id}
              value={day.item}
              className={({ active }) =>
                `cursor-pointer px-5 py-1 ${active && "bg-slate-700"}`
              }
            >
              {day.item}
            </Listbox.Option>
          ))}
        </Listbox.Options>
      </div>
    </Listbox>
  );
};

export default SelectDay;

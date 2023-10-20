import { Option, Select } from "@material-tailwind/react";
import { useMaterialTailwindController } from "context";
import { IHeader, SelectProps } from "services/types/user";

const TableHeader = ({
  selectedType,
  selectedValue,
  selectedTypeHandler,
  selectedValueHandler,
  data,
}: IHeader) => {
  const [controller]: any = useMaterialTailwindController();
  const { sidenavColor } = controller;
  return (
    <div className="flex w-full items-end gap-4 my-2">
      <Select
        size="md"
        label="Sort By"
        color={sidenavColor}
        value={selectedType}
        onChange={selectedTypeHandler}
      >
        <Option value={"profile.allGem"}>All Gems</Option>
        <Option value={"profile.coin"}>Coins</Option>
        <Option value={"createdAt"}>Created At</Option>
        <Option value={"profile.soccer_level"}>Soccer Level</Option>
        <Option value={"profile.billiard_level"}>Billiard Level</Option>
        <Option value={"soccer_total_game"}>Soccer Total Game</Option>
        <Option value={"billiard_total_game"}>Billiard Total Game</Option>
        <Option value={"profile.cup"}>Cup</Option>
        <Option value={"profile.soccer_cup"}>Soccer Total Cup</Option>
        <Option value={"profile.billiard_cup"}>Billiard Total Cup</Option>
      </Select>
      <Select
        size="md"
        label="Value"
        color={sidenavColor}
        value={selectedValue}
        onChange={selectedValueHandler}
      >
        {data.map(({ id, label, value, slug }: SelectProps) => (
          <Option key={id} value={`${slug},${value}`}>
            {label}
          </Option>
        ))}
      </Select>
    </div>
  );
};

export default TableHeader;

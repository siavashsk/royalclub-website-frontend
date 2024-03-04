import { useState } from "react";
import { Select, Option, Input, IconButton } from "@material-tailwind/react";
import {  useMaterialTailwindController } from "context";
import { IHeader, SelectProps } from "services/types/user";
import { AiOutlineSearch } from "react-icons/ai";

const UserHeader = ({ selectedType, selectedValue, setSearchValue, selectedTypeHandler, selectedValueHandler, setIsEmpty, data }: IHeader) => {
  const [controller]: any = useMaterialTailwindController();
  const { sidenavColor } = controller;
  const [value, setValue] = useState("");

  function clickHandler() {
    if (value === "") setIsEmpty(true);
    setSearchValue(value);
  }

  return (
    <div className="flex flex-col justify-between w-full gap-4 my-2 md:flex-row">
      <div className="flex w-full gap-1 md:w-72">
        <Input label="Search user" value={value} color={sidenavColor} onChange={(e) => setValue(e.target.value)} />
        <IconButton className="w-full" size="md" color={sidenavColor} onClick={clickHandler}>
          <AiOutlineSearch size={20} />
        </IconButton>
      </div>
      <div className="flex items-end gap-2">
        <Select size="md" label="Sort By" color={sidenavColor} value={selectedType} onChange={selectedTypeHandler}>
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
        <Select size="md" label="Value" color={sidenavColor} value={selectedValue} onChange={selectedValueHandler}>
          {data.map(({ id, label, value, slug }: SelectProps) => (
            <Option key={id} value={`${slug},${value}`}>{label}</Option>
          ))}
        </Select>
      </div>
    </div>
  );
};

export default UserHeader;
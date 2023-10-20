export interface IHeader {
  data: any;
  selectedType: any;
  searchValue: any;
  selectedValue: string | undefined;
  setSearchValue: any;
  selectedTypeHandler: any;
  selectedValueHandler: any;
  setIsEmpty: any;
}

export interface SelectProps {
  id: number;
  label: string;
  value: string;
  slug: string | null;
}

export interface IAddTicket {
  user: any;
  open: boolean;
  size: any;
  handleOpen: any;
}

export interface ITicketItem {
  user: any;
  ticketId: string;
  name: string;
  value: string;
  blitType: string;
  blitCapacity: string;
  setCount: Function;
}

export interface IUserItem {
  className: string;
  item: any;
  setForceUpdate: Function;
}

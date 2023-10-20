export interface IModal {
  size: any;
  open: boolean;
  handleOpen: any;
  data: any;
  setForceUpdate: Function;
}

export interface IGemLogModal {
  id: string | number;
  open: boolean;
  size: string;
  handleOpen: Function;
}

export interface IModalValues {
  username: string;
  phone: string;
  coin: string;
  cup: string;
  canWithdraw: any;
  banLeague: any;
  soccer_cup: number;
  soccer_level: number;
  billiard_cup: number;
  billiard_level: number;
  invited_by: string;
}

export interface IEdit {
  id: string;
  name: string;
  blit_type: string;
  type: string;
  value: string;
  active: string;
}

export interface IEditModal {
  open: boolean;
  size: any;
  handleOpen: any;
  data: any;
}

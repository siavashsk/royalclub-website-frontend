export interface ICreateProps {
  name: string;
  description?: string;
  game: {
    soccer: string;
    billiard: string;
  };
  capacity: {
    min: string;
    mid: string;
    max: string;
  };
  type: {
    coin: string;
    gem: string;
  };
  cost: string | number;
  startTime: any;
  startAfter: any;
  activeStart: any;
  activeEnd: any;
}

export interface ICreateModal {
  open: boolean;
  size: any;
  handleOpen: any;
}

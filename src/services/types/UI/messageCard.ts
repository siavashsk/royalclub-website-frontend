export interface IMessageCard {
    id: number;
    img: string;
    name: string;
    message: string;
    action: JSX.Element | null;
  }
export interface User {
  id: string;
  name: string;
  email: string;
  role: string;
  active: boolean;
}

export interface UserMutation {
  name: string;
  email: string;
  role: string;
  active: boolean;
}

export interface Checkbox {
  val: boolean;
}
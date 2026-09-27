export interface Friend {
  name: string;
  phone: string;
  age: number;
}

export interface FriendName {
  name: string;
}

export interface Colleague {
  name: string;
  department: string;
  contact: {
    email: string;
    extension: number;
  };
}

export interface ColleagueHistory {
  current: Colleague[];
  former: Colleague[];
}

export interface EmailContact {
    name: string;
    email: string
}

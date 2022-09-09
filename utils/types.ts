export interface ContestFields {
  gruppenname: string;
  name: string;
  kategorie: string;
  tanzstil: string;
  musiktitel: string;
  choreograf: string;
  email: string;
  phone: string;
}

export interface ContestPayload {
  type: 'contest';
  gruppenname: string;
  name: string;
  kategorie: string;
  tanzstil: string;
  musiktitel: string;
  choreograf: string;
  email: string;
  phone: string;
}

export interface WorkshopsFields {
  name: string;
  email: string;
  phone: string;
  workshops: string;
}

export interface WorkshopsPayload {
  type: 'workshops';
  name: string;
  email: string;
  phone: string;
  workshops: string;
}

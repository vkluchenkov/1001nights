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

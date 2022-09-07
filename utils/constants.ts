interface Menu {
  name: string;
  link: string;
}

export const adminEmail = 'badmonday@ya.ru';

export const menu: Menu[] = [
  {
    name: 'Workshops',
    link: '/workshops',
  },
  {
    name: 'Wettbewerbe',
    link: '/wettbewerbe',
  },
  {
    name: 'Registrierung / Preise',
    link: '/preise',
  },
  {
    name: 'Fotogalerie',
    link: '/fotogalerie',
  },
];

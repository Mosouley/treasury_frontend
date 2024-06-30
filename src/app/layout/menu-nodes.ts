export const menuNodes = [
  {
    name: 'Dashboard',
    url: 'dashboard',
    icon: 'bx bx-lock',
    active: false,
    subMenuHeight: '0px',
  },

  {
    name: 'Assets & Liab',
    url: '',
    icon: 'category',
    active: false,
    subMenuHeight: '0px',
    subMenu: [
      {
        name: 'Liquidity',
        url: 'tabsandcards',
        icon: 'contact_page',
        active: false,
        subMenuHeight: '0px',
      },
      {
        name: 'Maturity Profile',
        url: 'analytics',
        icon: 'contact_page',
        active: false,
        subMenuHeight: '0px',
      },
      {
        name: 'Portfolio ',
        url: 'analytics',
        icon: 'contact_page',
        active: false,
        subMenuHeight: '0px',
      },
      {
        name: 'Exposure',
        url: 'outlook',
        icon: 'fingerprint',
        active: false,
        subMenuHeight: '0px',
      },
    ],
  },
  {
    name: 'Sales',
    url: '',
    icon: 'qr_code',
    active: false,
    subMenuHeight: '0px',
    subMenu: [
      {
        name: 'TradeFlow ',
        url: 'tradesflow',
        icon: 'fingerprint',
        active: false,
        subMenuHeight: '0px',
      },

      {
        name: 'Wallet Sizing',
        url: 'walletsizing',
        icon: 'fingerprint',
        active: false,
        subMenuHeight: '0px',
      },
      {
        name: 'FX Blotter',
        url: 'fxblotter',
        icon: 'contact_page',
        active: false,
        subMenuHeight: '0px',
      },
      {
        name: 'FX Flows',
        url: 'fxflows',
        icon: 'contact_page',
        active: false,
        subMenuHeight: '0px',
      },
    ],
  },

  {
    name: 'Trading',
    url: '',
    icon: 'list',
    active: false,
    subMenuHeight: '0px',
    subMenu: [
      {
        name: 'Trading Blotter',
        url: 'profile',
        icon: 'contact_page',
        active: false,
        subMenuHeight: '0px',
      },
    ],
  },

  {
    name: 'Reporting',
    url: '',
    icon: 'admin_panel_settings',
    active: false,
    subMenuHeight: '0px',
    subMenu: [
      {
        name: 'Periodic Sales',
        url: 'sales-per-period',
        icon: 'contact_page',
        active: false,
        subMenuHeight: '0px',
      },
      {
        name: 'Reporting 2',
        url: 'app1',
        icon: 'fingerprint',
        active: false,
        subMenuHeight: '0px',
      },
    ],
  },

  {
    name: 'Configuration',
    url: '',
    icon: 'admin_panel_settings',
    active: false,
    subMenuHeight: '0px',
    subMenu: [
      {
        name: 'Settings',
        url: 'settings',
        icon: 'contact_page',
        active: false,
        subMenuHeight: '0px',
      },
      {
        name: 'Position Update',
        url: 'position-update',
        icon: 'fingerprint',
        active: false,
        subMenuHeight: '0px',
      },
    ],
  },
];

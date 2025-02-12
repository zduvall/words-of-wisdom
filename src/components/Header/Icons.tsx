const BaseIcon = ({ children }: { children: React.ReactNode }) => (
  <svg
    className='w-6 h-6'
    fill='none'
    stroke='currentColor'
    viewBox='0 0 24 24'
    xmlns='http://www.w3.org/2000/svg'
  >
    {children}
  </svg>
);

const HamburgerIcon = () => (
  <BaseIcon>
    <path
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={2}
      d='M4 6h16M4 12h16M4 18h16'
    />
  </BaseIcon>
);

const CloseIcon = () => (
  <BaseIcon>
    <path
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={2}
      d='M6 18L18 6M6 6l12 12'
    />
  </BaseIcon>
);

export { HamburgerIcon, CloseIcon };

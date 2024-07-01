'use client';

import { INavbarItemProps } from '@/types/component-props';
import React, { memo } from 'react';

export const NavbarItem: React.FC<INavbarItemProps> = memo(({ label, active }) => (
  <div className={active ? 'text-white cursor-default' : 'text-gray-200 hover:text-gray-300 cursor-not-allowed transition'}>
    {label}
  </div>
));

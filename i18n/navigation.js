import { createNavigation } from 'next-intl/navigation';
import { routing as _routing } from './routing';

export const routing = _routing; 
export const { Link, redirect, usePathname, useRouter, getPathname } =
  createNavigation(routing);

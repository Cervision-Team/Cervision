import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  locales: ['az', 'en', 'ru'],
  defaultLocale: 'az',
  localeDetection: false
});

export const config = {
  matcher: [
    '/',
    '/(az|en|ru)/:path*'
  ]
};

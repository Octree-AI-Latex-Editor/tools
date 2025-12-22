import {getRequestConfig} from 'next-intl/server';
import {getRequestLocale, getMessages} from '@/lib/i18n/server';

export default getRequestConfig(async () => {
  const locale = await getRequestLocale();
  const messages = await getMessages(locale);

  return {
    locale,
    messages
  };
});

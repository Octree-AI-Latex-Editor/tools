import { redirect } from 'next/navigation';

// This page should never be reached due to middleware redirect,
// but if it is, redirect to default locale
export default function RootPage() {
  redirect('/en');
}

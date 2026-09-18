import { redirect } from 'next/navigation';

export default function RootPage() {
  // إعادة توجيه المستخدم تلقائياً للغة العربية أو اللغة الافتراضية للمنصة
  redirect('/ar');
}
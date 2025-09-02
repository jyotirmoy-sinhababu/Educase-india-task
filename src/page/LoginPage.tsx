import { PhoneFrame } from '@/components/phone-frame';
import LoginForm from '@/components/login-form';

export default function LoginPage() {
  return (
    <main className='min-h-screen bg-zinc-50 antialiased'>
      <PhoneFrame>
        <LoginForm />
      </PhoneFrame>
    </main>
  );
}

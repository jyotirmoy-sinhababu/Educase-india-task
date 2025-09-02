import SignupForm from '@/components/Signup-form';
import { PhoneFrame } from '@/components/phone-frame';

export default function Page() {
  return (
    <main className='min-h-screen bg-zinc-50 antialiased'>
      <PhoneFrame>
        <div>
          <SignupForm />
        </div>
      </PhoneFrame>
    </main>
  );
}

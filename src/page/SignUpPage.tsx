import SignupForm from '@/components/Signup-form';
import { PhoneFrame } from '@/components/phone-frame';

export default function SignUpPage() {
  return (
    <main className='min-h-screen bg-zinc-50 antialiased'>
      <PhoneFrame>
        <h1 className='text-2xl md:text-3xl font-semibold leading-tight text-pretty'>
          <span className='block text-left pl-4 pb-3'>Create your</span>
          <span className='block text-left pl-4 pb-3'>PopX account</span>
        </h1>
        <SignupForm />
      </PhoneFrame>
    </main>
  );
}

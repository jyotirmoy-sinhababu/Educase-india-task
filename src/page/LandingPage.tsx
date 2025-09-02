import { Button } from '@/components/ui/button';
import { PhoneFrame } from '@/components/phone-frame';
const LandingPage = () => {
  return (
    <main className='min-h-screen bg-zinc-50 antialiased'>
      <PhoneFrame>
        {/* Content anchored to the bottom of the phone frame */}
        <div className='mt-auto px-5 pb-6'>
          <h1 className='text-2xl font-semibold text-zinc-900 text-balance'>
            Welcome to PopX
          </h1>
          <p className='mt-2 text-zinc-500 leading-relaxed'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          </p>

          <div className='mt-4 space-y-3'>
            <Button className='w-full bg-violet-600 hover:bg-violet-700'>
              Create Account
            </Button>
            <Button
              variant='secondary'
              className='w-full bg-violet-200 hover:bg-violet-300 text-violet-900'
            >
              Already Registered? Login
            </Button>
          </div>
        </div>
      </PhoneFrame>
    </main>
  );
};

export default LandingPage;

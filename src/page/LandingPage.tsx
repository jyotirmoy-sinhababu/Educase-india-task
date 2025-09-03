import { Button } from '@/components/ui/button';
import { PhoneFrame } from '@/components/phone-frame';
import { useNavigate } from 'react-router-dom';
const LandingPage = () => {
  const navigate = useNavigate();
  return (
    <main className=' bg-zinc-50 antialiased'>
      <PhoneFrame>
        {/* Content anchored to the bottom of the phone frame */}
        <div className='mt-auto px-5 pb-6'>
          <h1 className='text-2xl font-semibold text-zinc-900 text-balance text-left'>
            Welcome to PopX
          </h1>
          <p className='mt-2 text-zinc-500 leading-relaxed text-left'>
            Lorem ipsum dolor sit amet,
            <br />
            consectetur adipiscing elit,
          </p>

          <div className='mt-4 space-y-3'>
            <Button
              onClick={() => {
                navigate('sign');
              }}
              className='w-full bg-violet-600 hover:bg-violet-700 cursor-pointer'
            >
              Create Account
            </Button>
            <Button
              onClick={() => {
                navigate('login');
              }}
              variant='secondary'
              className='w-full bg-violet-200 hover:bg-violet-300 text-violet-900 cursor-pointer'
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

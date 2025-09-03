import profile from '../assets/Ellipse.png';
import { Camera } from 'lucide-react';
import { cn } from '@/lib/utils';

type Props = {
  name?: string;
  email?: string;
  bio?: string;
  avatarSrc?: string;
  className?: string;
};
const AccountSettingPage = ({
  name = 'Marry Doe',
  email = 'Marry@Gmail.Com',
  bio = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam.',
  className,
}: Props) => {
  return (
    <section
      aria-label='Account Settings'
      className={cn(
        'mx-auto w-full max-w-sm overflow-hidden rounded-lg border bg-card text-card-foreground shadow-sm',
        className
      )}
    >
      <header className='border-b bg-background/60 px-4 py-3'>
        <h2 className='text-pretty text-base font-semibold text-left'>
          Account Settings
        </h2>
      </header>

      <div className='px-4 py-6'>
        <div className='flex items-start gap-4'>
          <div className='relative inline-block'>
            <img
              src={
                profile ||
                '/placeholder.svg?height=64&width=64&query=profile%20avatar'
              }
              alt='Profile photo'
              className='h-16 w-16 rounded-full border object-cover'
            />
            <button
              type='button'
              aria-label='Change profile photo'
              className='absolute -bottom-1 -right-1 grid h-6 w-6 place-items-center rounded-full bg-blue-600 text-white ring-2 ring-white shadow'
            >
              <Camera className='h-3.5 w-3.5' aria-hidden='true' />
            </button>
          </div>

          <div className='min-w-0'>
            <p className='text-sm font-semibold leading-6 text-left'>{name}</p>
            <p className='text-sm text-muted-foreground'>{email}</p>
          </div>
        </div>

        <p className='mt-6 max-w-prose text-pretty text-sm text-left leading-6 text-muted-foreground'>
          {bio}
        </p>

        <div className='mt-6 border-t border-dashed pt-6'>
          <div
            className='min-h-[520px] rounded-md bg-muted/30'
            aria-hidden='true'
          />
        </div>
      </div>
    </section>
  );
};

export default AccountSettingPage;

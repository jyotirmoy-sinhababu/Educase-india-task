import React from 'react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';

function LoginForm() {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const isValid = email.trim().length > 0 && password.trim().length > 0;

  return (
    <div className='px-5 pt-12 pb-8'>
      {/* Heading */}
      <h1 className='text-3xl font-semibold text-zinc-900 text-pretty text-left'>
        {'Signin to your'}
        <br />
        {'PopX account'}
      </h1>
      <p className='mt-3 text-zinc-500 leading-relaxed text-left'>
        Lorem ipsum dolor sit amet,
        <br /> consectetur adipiscing elit,
      </p>

      {/* Form */}
      <form className='mt-6 space-y-4' onSubmit={(e) => e.preventDefault()}>
        {/* Email */}
        <div className='space-y-1.5'>
          <Label
            htmlFor='email'
            className='text-sm font-medium text-violet-600'
          >
            Email Address
          </Label>
          <Input
            id='email'
            type='email'
            inputMode='email'
            placeholder='Enter email address'
            autoComplete='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className='h-11 rounded-lg border-zinc-300 text-zinc-900 placeholder:text-zinc-400 focus-visible:ring-2 focus-visible:ring-violet-500'
          />
        </div>

        {/* Password */}
        <div className='space-y-1.5'>
          <Label
            htmlFor='password'
            className='text-sm font-medium text-violet-600'
          >
            Password
          </Label>
          <Input
            id='password'
            type='password'
            placeholder='Enter password'
            autoComplete='current-password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className='h-11 rounded-lg border-zinc-300 text-zinc-900 placeholder:text-zinc-400 focus-visible:ring-2 focus-visible:ring-violet-500'
          />
        </div>

        {/* Submit */}
        <Button
          type='submit'
          disabled={!isValid}
          aria-disabled={!isValid}
          className={`w-full rounded-[7px] py-3 font-semibold text-[#FFFFFF] ${
            isValid
              ? 'bg-violet-600 hover:bg-violet-700 text-white'
              : 'bg-zinc-300 text-white cursor-not-allowed hover:bg-zinc-300'
          }`}
        >
          Login
        </Button>
      </form>
    </div>
  );
}

export default LoginForm;

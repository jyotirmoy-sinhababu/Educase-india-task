import { useForm } from 'react-hook-form';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

type FormValues = {
  email: string;
  password: string;
};

function LoginForm() {
  const route = useNavigate();

  // react-hook-form with onChange mode to keep the button enable/disable behavior responsive
  const {
    register,
    handleSubmit,
    formState: { errors, isValid, isSubmitting },
  } = useForm<FormValues>({
    mode: 'onChange',
    defaultValues: { email: '', password: '' },
  });

  const onSubmit = async (_data: FormValues) => {
    // navigate after successful validation
    route('/account');
  };

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

      <form
        className='mt-6 space-y-4'
        autoComplete='off'
        onSubmit={handleSubmit(onSubmit)}
      >
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
            autoComplete='off'
            autoCorrect='off'
            autoCapitalize='none'
            spellCheck={false}
            aria-invalid={!!errors.email}
            {...register('email', {
              required: 'Email is required',
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, // Basic email pattern
                message: 'Enter a valid email',
              },
            })}
            className='h-11 rounded-lg border-zinc-300 text-zinc-900 placeholder:text-zinc-400 focus-visible:ring-2 focus-visible:ring-violet-500'
          />
          {errors.email ? (
            <p className='text-sm text-red-600'>{errors.email.message}</p>
          ) : null}
        </div>

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
            autoComplete='new-password'
            autoCorrect='off'
            autoCapitalize='none'
            spellCheck={false}
            aria-invalid={!!errors.password}
            {...register('password', {
              required: 'Password is required',
              minLength: { value: 6, message: 'Minimum 6 characters' },
            })}
            className='h-11 rounded-lg border-zinc-300 text-zinc-900 placeholder:text-zinc-400 focus-visible:ring-2 focus-visible:ring-violet-500'
          />
          {errors.password ? (
            <p className='text-sm text-red-600'>{errors.password.message}</p>
          ) : null}
        </div>

        {/* Submit */}
        <Button
          type='submit'
          disabled={!isValid || isSubmitting}
          aria-disabled={!isValid || isSubmitting}
          className={`w-full rounded-[7px] py-3 font-semibold text-[#FFFFFF] cursor-pointer ${
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

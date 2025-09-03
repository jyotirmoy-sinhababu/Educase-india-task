import * as React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
// import { useToast } from '@/hooks/use-toast';
import useToast from 'react-hook-toast';
import { cn } from '@/lib/utils';
import { Eye, EyeOff } from 'lucide-react';

type SignupValues = {
  fullName: string;
  phone: string;
  email: string;
  password: string;
  company?: string;
  isAgency?: 'yes' | 'no';
};

function SignupForm({ className }: { className?: string }) {
  const toast = useToast();
  const [showPassword, setShowPassword] = React.useState(false);

  const {
    register,
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SignupValues>({
    defaultValues: {
      fullName: '',
      phone: '',
      email: '',
      password: '',
      company: '',
      isAgency: undefined,
    },
    mode: 'onSubmit',
  });

  const onSubmit = async (_values: SignupValues) => {
    await new Promise((r) => setTimeout(r, 600));
    toast({
      title: 'Account created Successful',
      // description: 'We’ve received your details.',
    });
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={cn('space-y-4', 'm-8', className)}
      style={{ margin: '6px' }}
      noValidate
    >
      <FormField label='Full Name' required error={errors.fullName?.message}>
        <Input
          id='fullName'
          placeholder='Marry Doe'
          autoComplete='name'
          aria-required='true'
          aria-invalid={!!errors.fullName}
          {...register('fullName', {
            required: 'Please enter your full name',
            minLength: { value: 2, message: 'Please enter your full name' },
          })}
        />
      </FormField>

      <FormField label='Phone number' required error={errors.phone?.message}>
        <Input
          id='phone'
          type='tel'
          inputMode='tel'
          placeholder='123 456 7890'
          autoComplete='tel'
          aria-required='true'
          aria-invalid={!!errors.phone}
          {...register('phone', {
            required: 'Enter a valid phone',
            minLength: { value: 7, message: 'Enter a valid phone' },
            maxLength: { value: 20, message: 'Phone number too long' },
            pattern: {
              value: /^[0-9+\-() ]+$/,
              message: 'Only numbers and basic symbols are allowed',
            },
          })}
        />
      </FormField>

      <FormField label='Email address' required error={errors.email?.message}>
        <Input
          id='email'
          type='email'
          placeholder='name@example.com'
          autoComplete='email'
          aria-required='true'
          aria-invalid={!!errors.email}
          {...register('email', {
            required: 'Enter a valid email',
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: 'Enter a valid email',
            },
          })}
        />
      </FormField>

      <FormField label='Password' required error={errors.password?.message}>
        <div className='relative'>
          <Input
            id='password'
            type={showPassword ? 'text' : 'password'}
            placeholder='Enter a strong password'
            autoComplete='new-password'
            aria-required='true'
            aria-invalid={!!errors.password}
            {...register('password', {
              required: 'Password must be at least 8 characters',
              minLength: {
                value: 8,
                message: 'Password must be at least 8 characters',
              },
              maxLength: { value: 72, message: 'Password is too long' },
            })}
          />
          <Button
            type='button'
            variant='ghost'
            size='icon'
            className='absolute right-1 top-1/2 -translate-y-1/2'
            aria-label={showPassword ? 'Hide password' : 'Show password'}
            onClick={() => setShowPassword((s) => !s)}
          >
            {showPassword ? (
              <EyeOff className='h-4 w-4' />
            ) : (
              <Eye className='h-4 w-4' />
            )}
          </Button>
        </div>
        <p className='text-xs text-muted-foreground'>Minimum 8 characters.</p>
      </FormField>

      <FormField label='Company name' error={errors.company?.message}>
        <Input
          id='company'
          placeholder='Your company'
          autoComplete='organization'
          aria-invalid={!!errors.company}
          {...register('company')}
        />
      </FormField>

      <fieldset className='mt-2'>
        <legend className='mb-2 text-sm font-medium'>
          Are you an Agency?
          <span className='pl-1 text-[#6D28D9]' aria-hidden='true'>
            *
          </span>
        </legend>

        <Controller
          name='isAgency'
          control={control}
          rules={{ required: 'Please select one' }}
          render={({ field }) => (
            <RadioGroup
              value={field.value}
              onValueChange={field.onChange}
              className='flex items-center gap-6'
              aria-required='true'
            >
              <div className='flex items-center space-x-2'>
                <RadioGroupItem id='agency-yes' value='yes' />
                <Label htmlFor='agency-yes'>Yes</Label>
              </div>
              <div className='flex items-center space-x-2'>
                <RadioGroupItem id='agency-no' value='no' />
                <Label htmlFor='agency-no'>No</Label>
              </div>
            </RadioGroup>
          )}
        />
        {errors.isAgency?.message ? (
          <p className='mt-1 text-xs text-destructive'>
            {errors.isAgency.message}
          </p>
        ) : null}
      </fieldset>

      <Button
        type='submit'
        disabled={isSubmitting}
        className='mt-6 w-full bg-[#6D28D9] text-white hover:bg-[#5B21B6] focus-visible:ring-[#6D28D9]'
      >
        {isSubmitting ? 'Creating...' : 'Create Account'}
      </Button>
    </form>
  );
}

function FormField({
  label,
  required = false,
  error,
  children,
}: {
  label: string;
  required?: boolean;
  error?: string;
  children: React.ReactNode;
}) {
  const id =
    (React.isValidElement(children) && (children.props as any).id) || undefined;

  return (
    <div>
      <Label htmlFor={id} className='text-sm font-medium'>
        {label}
        {required ? (
          <span className='pl-1 text-[#6D28D9]' aria-hidden='true'>
            *
          </span>
        ) : null}
      </Label>
      <div className='mt-2'>{children}</div>
      {error ? <p className='mt-1 text-xs text-destructive'>{error}</p> : null}
    </div>
  );
}

export default SignupForm;

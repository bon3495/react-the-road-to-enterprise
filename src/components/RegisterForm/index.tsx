import { PathName } from '@/constants/defaultValues';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import * as yup from 'yup';
import { FcGoogle } from 'react-icons/fc';
import { BsFacebook } from 'react-icons/bs';
import { InputController } from '../FormController';
import { RegisterFormType } from './registerForm.types';

const RegisterForm = () => {
  const schema = yup.object().shape({
    firstName: yup.string().trim().nullable().required('First name is required'),
    lastName: yup.string().trim().nullable().required('Last name is required'),
    email: yup.string().trim().nullable().email('Email is invalid.').required('Email is required'),
    password: yup.string().required('Password is required').min(6, 'Password must be at least 6 characters'),
  });
  const methods = useForm<RegisterFormType>({
    resolver: yupResolver(schema),
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
    },
  });

  const { handleSubmit, control } = methods;

  const onSubmit = (data: RegisterFormType) => {
    console.log(data);
  };

  return (
    <section className="relative z-10 w-full max-w-[420px] rounded-lg bg-white/80 p-4 shadow-form backdrop-blur-2xl sm:p-8 md:max-w-[550px]">
      <h2 className="mx-auto w-fit font-dancing text-3xl font-bold text-primary sm:text-5xl">Register</h2>

      <div className="mt-4 flex flex-col items-center gap-x-6 sm:mt-10 md:flex-row">
        <button className="hover:bg-input mb-4 flex h-inputMobile w-full items-center justify-center gap-x-2 rounded-lg border-2 border-borderColor/50 bg-white px-4 transition hover:shadow-input sm:h-input md:mb-0">
          <FcGoogle className="text-xl" />
          <span>Sign in with Google</span>
        </button>
        <button className="flex h-inputMobile w-full items-center justify-center gap-x-2 rounded-lg bg-fbColor px-4 text-white transition hover:bg-fbColorHover hover:shadow-input sm:h-input">
          <BsFacebook className="text-xl" />
          <span>Sign in with Facebook</span>
        </button>
      </div>

      <p className="relative my-3 text-center before:absolute before:left-0 before:top-1/2 before:block before:h-[1px] before:w-[40%] before:-translate-y-1/2 before:bg-borderColor before:content-[''] after:absolute after:right-0 after:top-1/2 after:block after:h-[1px] after:w-[40%] after:-translate-y-1/2 after:bg-borderColor after:content-[''] sm:my-5 before:sm:w-[45%] after:sm:w-[45%]">
        <span className="relative z-10 px-3 text-sm text-text">or</span>
      </p>
      <form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
        <div className="mb-3 flex flex-col items-center gap-x-0 gap-y-3 sm:mb-5 sm:gap-y-5 md:flex-row md:gap-x-6 md:gap-y-0">
          <InputController
            control={control}
            name="firstName"
            label="First Name"
            placeholder="Please fill in the first name"
            className="w-full flex-1"
          />
          <InputController
            control={control}
            name="lastName"
            label="Last Name"
            placeholder="Please fill in the last name"
            className="w-full flex-1"
          />
        </div>
        <InputController
          control={control}
          name="email"
          label="Email"
          placeholder="Please fill in the email"
          className="mb-3 sm:mb-5"
        />
        <InputController
          control={control}
          name="password"
          label="Password"
          placeholder="Please fill in the password"
          className="mb-4"
          typeInput="password"
        />

        <p className="text-right text-sm italic text-text">
          Already haven an account?{' '}
          <Link
            to={PathName.SignIn}
            className="inline-block text-primary underline transition-all duration-200 ease-in-out hover:text-primary/60"
          >
            <span>Sign In</span>
          </Link>
        </p>

        <button
          className="mt-6 flex h-inputMobile w-full items-center justify-center rounded-lg bg-gradientPrimary text-white shadow-card transition hover:shadow-primary sm:mt-8 sm:h-input"
          type="submit"
        >
          Submit
        </button>
      </form>
    </section>
  );
};

export default RegisterForm;

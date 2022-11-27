import { FormCommon } from '@/constants/commonTypes';
import { PathName } from '@/constants/defaultValues';
import { yupResolver } from '@hookform/resolvers/yup';
import { FieldErrors, useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import { BsFacebook } from 'react-icons/bs';
import * as yup from 'yup';
import { InputController } from '../FormController';

const SignInForm = () => {
  const schema = yup.object().shape({
    email: yup
      .string()
      .trim()
      .nullable()
      .email('Email is invalid.')
      .required('Email is required'),
    password: yup
      .string()
      .required('Password is required')
      .min(6, 'Password must be at least 6 characters'),
  });
  const methods = useForm<FormCommon>({
    resolver: yupResolver(schema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const { handleSubmit, control } = methods;

  const onSubmit = (data: FormCommon) => {
    console.log(data);
  };

  const onError = <T extends FieldErrors>(err: T) => {
    console.log(err);
  };

  return (
    <section className="relative z-10 w-full max-w-[420px] rounded-lg bg-white/80 p-4 shadow-form backdrop-blur-2xl sm:p-8 md:max-w-[550px]">
      <h2 className="mx-auto w-fit font-dancing text-3xl font-bold text-primary sm:text-5xl">
        Sign In
      </h2>
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
      <form onSubmit={handleSubmit(onSubmit, onError)} autoComplete="off">
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
        <p className="text-right">
          <Link
            to={PathName.ForgotPassword}
            className="inline-block text-sm italic text-primary transition-all duration-200 ease-in-out hover:text-primary/60 hover:underline"
          >
            Forgot your password?
          </Link>
        </p>
        <button
          className="mt-6 flex h-inputMobile w-full items-center justify-center rounded-lg bg-gradientPrimary text-white shadow-card transition hover:shadow-primary sm:mt-8 sm:h-input"
          type="submit"
        >
          Submit
        </button>

        <p className="mt-8 text-center text-sm italic">
          New member?{' '}
          <Link
            to={PathName.Register}
            className="text-primary underline transition hover:text-primary/60"
          >
            Register now
          </Link>
        </p>
      </form>
    </section>
  );
};

export default SignInForm;

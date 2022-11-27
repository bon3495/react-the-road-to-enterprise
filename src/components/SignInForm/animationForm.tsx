import { FormCommon } from '@/constants/commonTypes';
import { PathName } from '@/constants/defaultValues';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm, useWatch } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import { BsFacebook } from 'react-icons/bs';
import {
  useRive,
  useStateMachineInput,
  Layout,
  Fit,
  Alignment,
  UseRiveParameters,
  RiveState,
  StateMachineInput,
} from 'rive-react';
import * as yup from 'yup';
import { InputController } from '../FormController';
import { STATE_MACHINE_NAME } from './constant';
import { useState } from 'react';

const SignInForm = (riveProps: UseRiveParameters = {}) => {
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
  const [inputLookMultiplier, setInputLookMultiplier] = useState(0);
  const { rive: riveInstance, RiveComponent }: RiveState = useRive({
    src: 'login-teddy.riv',
    stateMachines: STATE_MACHINE_NAME,
    autoplay: true,
    layout: new Layout({
      fit: Fit.Cover,
      alignment: Alignment.Center,
    }),
    ...riveProps,
  });

  const isCheckingInput: StateMachineInput | null = useStateMachineInput(
    riveInstance,
    STATE_MACHINE_NAME,
    'isChecking'
  );
  const numLookInput: StateMachineInput | null = useStateMachineInput(
    riveInstance,
    STATE_MACHINE_NAME,
    'numLook'
  );
  const trigSuccessInput: StateMachineInput | null = useStateMachineInput(
    riveInstance,
    STATE_MACHINE_NAME,
    'trigSuccess'
  );
  const trigFailInput: StateMachineInput | null = useStateMachineInput(
    riveInstance,
    STATE_MACHINE_NAME,
    'trigFail'
  );
  const isHandsUpInput: StateMachineInput | null = useStateMachineInput(
    riveInstance,
    STATE_MACHINE_NAME,
    'isHandsUp'
  );

  const { handleSubmit, control } = methods;

  const onSubmit = (data: FormCommon) => {
    trigSuccessInput?.fire();
    console.log(data);
  };

  const onError = () => {
    trigFailInput?.fire();
  };

  const emailValue = useWatch({
    control,
    name: 'email',
  });

  const handleFocusEmail = () => {
    if (!isCheckingInput || !numLookInput) return;
    isCheckingInput.value = true;
    if (numLookInput.value !== emailValue.length * inputLookMultiplier) {
      numLookInput.value = emailValue.length * inputLookMultiplier;
    }
  };

  const handleBlueEmail = () => {
    if (!isCheckingInput) return;
    isCheckingInput.value = false;
  };

  const handleChangeEmail = (newVal: string) => {
    if (!isCheckingInput || !numLookInput) return;
    if (!isCheckingInput.value) {
      isCheckingInput.value = true;
    }
    const numChars = newVal.length;
    numLookInput.value = numChars * inputLookMultiplier;
  };

  return (
    <section className="mt-[-10%]">
      <RiveComponent className="hidden h-[400px] md:block" />
      <div className="relative z-10 w-[420px] rounded-lg bg-white/80 p-4 shadow-form backdrop-blur-2xl sm:p-8 md:w-[550px]">
        <div className="flex flex-col items-center gap-x-6 md:flex-row">
          <button className="hover:bg-input mb-4 flex h-inputMobile w-full items-center justify-center gap-x-2 rounded-lg border-2 border-borderColor/50 bg-white px-4 transition hover:shadow-input sm:h-input md:mb-0">
            <FcGoogle className="text-xl" />
            <span>Sign in with Google</span>
          </button>
          <button className="flex h-inputMobile w-full items-center justify-center gap-x-2 rounded-lg bg-fbColor px-4 text-white transition hover:bg-fbColorHover hover:shadow-input sm:h-input">
            <BsFacebook className="text-xl" />
            <span>Sign in with Facebook</span>
          </button>
        </div>

        <p className="relative my-3 text-center before:absolute before:left-0 before:top-1/2 before:block before:h-[1px] before:w-[40%] before:-translate-y-1/2 before:bg-borderColor before:content-[''] after:absolute after:right-0 after:top-1/2 after:block after:h-[1px] after:w-[40%] after:-translate-y-1/2 after:bg-borderColor after:content-[''] before:sm:w-[45%] after:sm:w-[45%]">
          <span className="relative z-10 px-3 text-sm text-text">or</span>
        </p>
        <form onSubmit={handleSubmit(onSubmit, onError)} autoComplete="off">
          <InputController
            control={control}
            name="email"
            label="Email"
            placeholder="Please fill in the email"
            className="mb-3 sm:mb-5"
            extendOnFocus={handleFocusEmail}
            extendOnBlur={handleBlueEmail}
            extendOnchange={handleChangeEmail}
            setInputLookMultiplier={setInputLookMultiplier}
            inputLookMultiplier={inputLookMultiplier}
          />
          <InputController
            control={control}
            name="password"
            label="Password"
            placeholder="Please fill in the password"
            className="mb-4"
            typeInput="password"
            extendOnFocus={() =>
              isHandsUpInput ? (isHandsUpInput.value = true) : null
            }
            extendOnBlur={() =>
              isHandsUpInput ? (isHandsUpInput.value = false) : null
            }
          />
          <p className="text-right">
            <Link
              to={PathName.Register}
              className="inline-block text-sm italic text-primary transition-all duration-200 ease-in-out hover:text-primary/60"
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
        </form>
      </div>
    </section>
  );
};

export default SignInForm;

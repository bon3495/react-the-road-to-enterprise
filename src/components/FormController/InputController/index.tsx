import clsx from 'clsx';
import React, { useEffect, useRef } from 'react';
import { Controller, FieldValues, Path } from 'react-hook-form';
import { TypeInput } from '../formController.types';

interface InputControllerProps<T extends FieldValues> {
  name: Path<T>;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  control: any;
  extendOnchange?: (value: string) => void;
  label?: string;
  placeholder?: string;
  disabled?: boolean;
  autoComplete?: string;
  typeInput?: TypeInput;
  suffixIcon?: React.ReactNode;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  className?: string | number | symbol | any;
  extendOnFocus?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  extendOnBlur?: (e: string) => void;
  setInputLookMultiplier?: (value: number) => void;
  inputLookMultiplier?: number;
}

const InputController = <T extends FieldValues>(
  props: InputControllerProps<T>
) => {
  const {
    name,
    control,
    extendOnchange,
    label,
    placeholder,
    disabled,
    className,
    autoComplete = 'off',
    typeInput = 'text',
    extendOnFocus,
    extendOnBlur,
    setInputLookMultiplier,
    inputLookMultiplier,
    ...rest
  } = props;
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (!setInputLookMultiplier) return;
    if (inputRef?.current && !inputLookMultiplier) {
      setInputLookMultiplier(
        (inputRef.current as HTMLInputElement).offsetWidth / 100
      );
    }
  }, []);

  return (
    <div className={clsx('flex flex-col', { [className]: className })}>
      {label && (
        <label htmlFor={name} className="mb-2 w-fit text-sm text-primary">
          {label}
        </label>
      )}
      <Controller
        name={name}
        control={control}
        render={({
          field: { value, onChange, onBlur, ...restField },
          fieldState: { error },
        }) => (
          <div className="flex flex-col gap-y-1">
            <div className="relative flex items-center">
              <input
                type={typeInput}
                id={name}
                {...rest}
                {...restField}
                ref={el => {
                  restField.ref(el);
                  inputRef.current = el;
                }}
                value={value}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  onChange(e.target.value);
                  extendOnchange?.(e.target.value);
                }}
                placeholder={placeholder}
                disabled={disabled}
                className={clsx('inputCommon', {
                  inputNormal: !error?.message,
                  inputError: error?.message,
                })}
                autoComplete={autoComplete}
                onFocus={extendOnFocus}
                onBlur={(e: React.ChangeEvent<HTMLInputElement>) => {
                  onBlur();
                  extendOnBlur?.(e.target.value);
                }}
              />
            </div>
            {error?.message && (
              <span className="px-2 text-xs text-error sm:text-sm">
                {error?.message}
              </span>
            )}
          </div>
        )}
      />
    </div>
  );
};

export default InputController;

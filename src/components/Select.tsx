import React from 'react';
import ReactSelect, { SingleValue } from 'react-select';

//using the library React Select https://react-select.com/home

type MyProps = {
  label?: string;
  id: string;
  data: Array<{ value: string; label: string }>;
  value: { value: string; label: string };
  required?: boolean;
  errorVisible?: boolean;
  errorText?: string;
  placeholder?: string;
  onChange?: (
    newValue: SingleValue<{
      value: string;
      label: string;
    }>
  ) => void;
};

export function Select({
  id,
  label,
  data,
  required = false,
  errorVisible = false,
  errorText,
  placeholder = 'Sélectionner',
  onChange,
  value,
}: MyProps) {
  return (
    <div className="mb-5">
      <div className="sm:w-72 w-full">
        <ReactSelect
          aria-label={label}
          placeholder={placeholder}
          id={id}
          name="foo" //needed for required prop to work !
          required={required}
          unstyled
          options={data}
          value={value}
          classNames={{
            control: (state) =>
              `${state.menuIsOpen ? 'rounded-b-none ' : ''} ${
                state.isFocused
                  ? 'border-primary outline-none ring-2 ring-white ring-opacity-75 ring-offset-2 ring-offset-primary'
                  : ''
              } h-10 font-content relative sm:w-72 w-full cursor-default rounded-lg bg-white py-2 pl-3 pr-3 text-left shadow-md sm:text-sm`,

            menu: () =>
              'font-content relative sm:w-72 w-full cursor-default rounded-b-lg bg-white text-left shadow-md focus:outline-none focus-visible:border-primary focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-primary sm:text-sm',

            option: (state) =>
              `${
                state.isFocused ? 'bg-primary text-secondary ' : ''
              } py-2 pl-3 pr-3`,

            dropdownIndicator: () => 'text-primary',
          }}
          defaultValue={null}
          onChange={onChange}
        ></ReactSelect>
      </div>
    </div>
  );
}

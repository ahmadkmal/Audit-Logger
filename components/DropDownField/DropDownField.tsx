import React, { useState } from 'react'

type DropDownFieldProps = {
    label: string
    value?: string
    options: string[]
    onChange: (value:React.ChangeEvent<HTMLSelectElement> ) => void
    defaultValue?: string
    name: string
  }
const DropDownField:React.FC<DropDownFieldProps> = ({ onChange, value='', options, label,defaultValue="" ,name}) => {
    const selectRef = React.useRef<HTMLSelectElement>(null)
    React.useEffect(() => {
      if(selectRef.current && (value||defaultValue) ) selectRef.current.value = value?value:defaultValue;
    }, [value,defaultValue])
    
    return (
    <>
      <label className="ml-0.5 block text-sm font-medium text-gray-900 ">
        {label}
      </label>
      <select
        onChange={(e)=>{
          typeof onChange == 'function' && onChange(e)
        }}
        name={name}
        defaultValue={defaultValue}
        ref={selectRef}
        className="min-w-[12.5rem] block w-full rounded border border-gray-300 bg-gray-50 p-1.5 text-sm text-gray-900 focus:border-blue-300 focus:ring-blue-300"
      >
        <option value=""  hidden disabled > </option>
        {options.map((option: string, index: number) => {
          return (
            <option key={index} value={option}>
              {option}
            </option>
          )
        })}
      </select>
    </>)
  }
    export default DropDownField;
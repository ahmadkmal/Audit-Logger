import React from 'react'
type InputFiledProps = {
    type?: string
    label?: string
    defaultValue?: string
    value?: string
    placeholder?: string
    name: string
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
    [key: string]: any
  }
  const InputFiled :React.FC<InputFiledProps> = ({type='text' , label='',defaultValue='',placeholder='' ,value,onChange,name,...props}) => {
    const [currentType,setType] = React.useState<string>('text')
    const [inputValue, setValue] = React.useState(defaultValue)
    React.useEffect(() => {
      if( value||defaultValue ) {
        setValue(value?value:defaultValue);
        setType(type)
      }
    }, [value,defaultValue])
    return (
      <>
      <label  className="block ml-0.5 text-sm font-medium text-gray-900 dark:text-gray-300">{label}</label>
      <input type={currentType} onChange={
        (e) => {
          setValue(e.target.value);
          if(onChange) onChange(e);
        }
      }
      onFocus={()=>{
        setType(type)
      }
    }
    name={name}
      value={inputValue}
       className="min-w-[12.5rem] bg-gray-50 font-medium border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5 " placeholder={placeholder}  {...props}/>
      </>
      )
  }
  export default InputFiled;
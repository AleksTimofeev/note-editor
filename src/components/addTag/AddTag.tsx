import React, {useState} from 'react';

export const AddTag = () => {

  const [value, setValue] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.currentTarget.value)
  }
  const handleOnEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if(e.key === 'Enter'){
      if(value.trim().length > 2)

        setValue('')
    }
  }
  const handleAddTag = () => {

    setValue('')
  }

  return (
    <div>
      <input
        type="text"
        placeholder={'add tag'}
        value={value}
        onChange={handleChange}
        onKeyPress={handleOnEnter}
      />
      <button
        onClick={handleAddTag}
      >add tag</button>
    </div>
  );
}
import React, {useState} from 'react';
import {useAppDispatch} from "../../store/store";
import {addTag} from "../../store/noteReducer";

export const AddTag = () => {

  const dispatch = useAppDispatch()

  const [value, setValue] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.currentTarget.value)
  }
  const handleOnEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if(e.key === 'Enter'){
      if(value.trim().length > 2){
        dispatch(addTag(value.trim()))
        setValue('')
      }
    }
  }
  const handleAddTag = () => {
    if(value.trim().length > 2){
      dispatch(addTag(value.trim()))
      setValue('')
    }
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
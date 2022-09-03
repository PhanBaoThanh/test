import React,{useContext, useRef,useState} from 'react'
import './input.scss'
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { TodoListContext } from '../../Context/TodoListContext';



const Input = () => {
  const [value,setValue] = useState("")
  const inputRef = useRef()
  const {setList,id,setId} = useContext(TodoListContext)
  //Them 1 item vao todoList
  const handleAddItem = () => {
    if(inputRef.current.value !== "" || inputRef.current.value !== null){
      setList(prev => [
        ...prev,
        {
          id: id + 1,
          name: value,
          completed: false
        }
      ])
      setId(prev => prev + 1)
      setValue("")
    }
  }

  const handleKeyDown = e => {
    if(e.keyCode === 13)
      handleAddItem()
  }

  //Cap nhat value vao state
  const handleChangeValue = () => {
    setValue(inputRef.current.value)
  }
  return (
    <div className='input'>
      <input ref={inputRef} value={value} type="text" placeholder='Mời nhập công việc vào đây' onKeyDown={e => handleKeyDown(e)} onChange={handleChangeValue} className='input__item' />
      <div className='input__addBtn' onClick={handleAddItem}>
        <AddCircleIcon className='input__addBtn__icon'/>
      </div>
    </div>
  )
}

export default Input
import React, { useRef, useState } from 'react'
import './modal.scss'

const Modal = ({id,handleChangeItem,setModalOpen}) => {

    const [inputValue,setInputValue] = useState("")
    const inputRef = useRef()

    const handleClickModalBox = e => {
        e.stopPropagation()
    }

    const handleClickSaveBtn = () => {
        handleChangeItem(id,inputValue)
        setModalOpen(prev => !prev)
    }

    return (
        <div className='modal' onClick={() => setModalOpen(prev => !prev)}>
            <div className='modal__box' onClick={e => handleClickModalBox(e)}>
                <div className='modal__input'>
                    <input ref={inputRef} value={inputValue} type='text' placeholder='Mời nhập tên công việc' onChange={() => setInputValue(inputRef.current.value)}/>
                </div>

                <div className='modal__btn'>
                    <div className='modal__btn__item cancel' onClick={() => setModalOpen(prev => !prev)}>Bỏ qua</div>
                    <div className='modal__btn__item save' onClick={handleClickSaveBtn}>Lưu</div>
                </div>
            </div>
        </div>
    )
}

export default Modal
import React, { useContext, useState } from 'react'
import './listItem.scss'
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import CheckIcon from '@mui/icons-material/Check';
import { TodoListContext } from '../../Context/TodoListContext';
import CloseIcon from '@mui/icons-material/Close';
import Modal from '../Modal/Modal';

const ListItem = ({id,name,completed}) => {

    const [modalOpen,setModalOpen] = useState(false)
    const {setList} = useContext(TodoListContext)

    //Thay doi cong viec
    const handleChangeItem = (id,name) => {
        setList(prev => prev.map(item => {
            if(item.id === id)
                item.name = name
            return item;
        }))
    }

    //Hoan thanh cong viec
    const handleCompletedItem = () => {
        setList(prev => prev.map(item => {
            if(item.id === id)
                item.completed = true
            return item;
        }))
    }

    //Huy hoan thanh cong viec
    const handleCancelItem = () => {
        setList(prev => prev.map(item => {
            if(item.id === id)
                item.completed = false
            return item;
        }))
    }

    //Xoa cong viec
    const handleDeleteItem = () => {
        setList(prev => prev.filter(item => item.id !== id))
    }

    return (
        <>
            <div id={id} className='list__item'>
                <div className='list__item__text'><p>{name}</p></div>
                <div className='list__item__completed' style={completed ? {color: "green"} : {color: "red"}}>
                    <p>{completed ? "Đã hoàn thành" : "Chưa hoàn thành"}</p>
                </div>
                <div className='list__item__btn'>
                    <div className='list__item__btn__change' onClick={() => setModalOpen(!modalOpen)}><EditIcon /></div>
                    <div className='list__item__btn__delete' onClick={handleDeleteItem}><DeleteIcon /></div>
                    {completed ? (
                        <div className='list__item__btn__cancel' onClick={handleCancelItem}><CloseIcon /></div>
                    ) : (
                        <div className='list__item__btn__completed' onClick={handleCompletedItem}><CheckIcon /></div>
                    )}
                </div>
            </div>
            {modalOpen ? (
                <Modal id={id} handleChangeItem={handleChangeItem} setModalOpen={setModalOpen}/>
            ) : (
                <></>
            )}
        </>
    )
}

export default ListItem
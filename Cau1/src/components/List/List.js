import React, { useContext } from 'react'
import './list.scss'
import ListItem from '../ListItem/ListItem';
import { TodoListContext } from '../../Context/TodoListContext';

const List = () => {

    const {list} = useContext(TodoListContext)
    return (
        <div className='list'>
            {list.map((item,index) => <ListItem key={index} id={item.id} name={item.name} completed={item.completed}/>)}
        </div>
    )
}

export default List
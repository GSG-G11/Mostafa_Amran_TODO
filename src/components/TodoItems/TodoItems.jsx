import React from 'react';

const TodoItems = ({ items, deleteItem }) => {

    return (
        <div className='items-list'>

            <ul>

                {items.length ? items.map((item) => (
                    <li key={item.id}>
                        
                        <p> {item.description}

                        </p>
                        <span onClick={() => deleteItem(item.id)}> <i className="fa-solid fa-trash-can"></i></span>
                    </li>
                ))

                    : <li> No Items</li>}


            </ul>
        </div>
    )
}

export default TodoItems
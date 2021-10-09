import React, { Component, useState } from 'react';
import '../../index.css';

const ItemAddForm = (props) => {
    const [label, setLabel] = useState('')

    const onLabelChange = (e) => {
		setLabel(e.target.value)
	}

	const onSubmit = (e) => {   
		e.preventDefault();
		props.onItemAdded(label)
		setLabel('')
	}

    return (
        <form className='item-add-form d-flex' onSubmit={onSubmit}>
            <input type='text' className='form-control'  placeholder='What needs to be done' onChange={onLabelChange} value={label}/>
            <button
                className='btn btn-outline-secondary'
            >
                Add Item
            </button>
        </form>
    );
}

export default ItemAddForm;

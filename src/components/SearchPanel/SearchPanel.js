import React, { Component, useState } from 'react';
import '../../index.css';

const SearchPanel = (props) => {
    const [term, setTerm] = useState('')

	const onSearchChange = (e) => {
		const term = e.target.value;
		setTerm(term);
		props.onSearchChange(term)
	};
    return (
        <form>
            <input
                type='text'
                className='form-control search-input'
                placeholder='type to search'
                value={term}
                onChange={onSearchChange}
            />
        </form>
    );
}

export default SearchPanel;
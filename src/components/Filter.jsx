import React, { Component } from 'react'
import { Input, Menu } from 'semantic-ui-react'

const Filter = ({ setFilter, filterBy, searchQuery, setSearchQuery }) => (
    <Menu secondary>
        <Menu.Item
            active={filterBy === 'oll'}
            onClick={setFilter.bind(this, 'oll')}
        >Всі</Menu.Item>
        <Menu.Item
            active={filterBy === 'price_high'}
            onClick={setFilter.bind(this, 'price_high')}
        >Ціна (дорогі)</Menu.Item>
        <Menu.Item
            active={filterBy === 'price_low'}
            onClick={setFilter.bind(this, 'price_low')}
        >Ціна (дешеві)</Menu.Item>
        <Menu.Item
            active={filterBy === 'author'}
            onClick={setFilter.bind(this, 'author')}
        >Автор</Menu.Item>
        <Menu.Item>
            <Input
                icon="search"
                onChange={e => setSearchQuery(e.target.value)}
                value={searchQuery}
                placeholder='Пошук по книгам...'
            />
        </Menu.Item>
    </Menu>
)

export default Filter;
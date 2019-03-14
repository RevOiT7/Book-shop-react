import React from 'react';
import { Menu } from 'semantic-ui-react';


const MenuComponents = () => (
    <Menu>
        <Menu.Item name='browse' onClick={this.handleItemClick}>
            Магазин книг
        </Menu.Item>

        <Menu.Menu position='right'>
            <Menu.Item name='signup' onClick={this.handleItemClick}>
                Разом: &nbsp; <b>0</b> грн.
            </Menu.Item>

            <Menu.Item name='help' onClick={this.handleItemClick}>
                Корзинка (<b>0</b>)
            </Menu.Item>
        </Menu.Menu>
    </Menu>

);

export default MenuComponents;
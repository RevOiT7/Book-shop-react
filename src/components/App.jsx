import React, { Component } from 'react';
import axios from 'axios';
import Menu from './Menu';
import BookCard from './BookCard'
import Filter from '../containers/Filter'
import { Container, Card } from 'semantic-ui-react';


class App extends Component {
    componentWillMount() {
        const {setBooks} = this.props;
       axios.get('/books.json').then(response => {
           setBooks(response.data)
       });
    }

    render(){
        const {books, isReady} = this.props;
        return (
            <Container>
              <Menu />
                <Filter />
                <Card.Group itemsPerRow={4}>
                    {!isReady ? 'Загрузка...' : books.map(book => <BookCard {...book} /> )}
                </Card.Group>
            </Container>

        );

    }
}

export default App;

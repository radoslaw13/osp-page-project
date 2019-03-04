import React, { Component } from 'react';
import FormAddEdit from './FormAddEdit';
import '../assets/css/AddPost.css';

class Add extends Component {
    

    render() {
        return (
            <FormAddEdit 
                addOrEdit="Dodawanie posta"
                button="Dodaj post"
                saveOrUpdate="save"
                history={this.props.history}
            />
        )
    }
}

export default Add;
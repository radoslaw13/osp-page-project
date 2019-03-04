import React, { Component } from 'react';
import FormAddEdit from './FormAddEdit';
import '../assets/css/AddPost.css';


class Edit extends Component {

    render() {
        return (
            <div>
            <FormAddEdit 
                match={this.props.match}
                addOrEdit="Edycja"
                button="Edytuj post"
                history={this.props.history}
            />
            </div>
        )
    }
}

export default Edit;
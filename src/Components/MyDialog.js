import React, { Component } from 'react';
import {Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    Button} from '@material-ui/core';


class MyDialog extends Component {
    render() {
        return (
            <Dialog
                open={this.props.open}
                onClose={this.props.onClose}
            >
                <DialogTitle>{this.props.dialogTitle}</DialogTitle>
                <DialogContent>
                    <DialogContentText>{this.props.dialogText}</DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={this.props.onClose} >{this.props.buttonOnDisagree}</Button>
                    <Button onClick={this.props.onAgree} >{this.props.buttonOnAgree}</Button>
                </DialogActions>
            </Dialog>
        )
    }
}

export default MyDialog;
import * as React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

export default class FormDialog extends React.Component {
  state = {
    open: false,
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    return (
      <div>
        <Button variant="outlined" color="primary" onClick={this.handleClickOpen}>
          Open form dialog
        </Button>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Battle!</DialogTitle>
          <DialogContent>
            <DialogContentText>
                Choose creature for attack:  
            </DialogContentText>
            
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
                Cansel
            </Button>
            <Button onClick={this.handleClose} color="primary">
                Fight!
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}
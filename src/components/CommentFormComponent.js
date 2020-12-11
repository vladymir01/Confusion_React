import React, { Component } from 'react';
import {Button, Modal, ModalHeader, ModalBody, FormGroup, Label,Input} from 'reactstrap';
import { LocalForm, Control, Errors  } from 'react-redux-form';

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);

class CommentForm extends Component {
    constructor(props){
        super(props);
        this.state={
            isModalOpen: false,
            rating:1
            
        };
        this.toggleModal = this.toggleModal.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    toggleModal() {
        this.setState({
          isModalOpen: !this.state.isModalOpen
        });
      }

      handleSubmit(values) {
        console.log('Current State is: ' + JSON.stringify(values));
        alert('Current State is: ' + JSON.stringify(values));
        
        
    }

    render(){
        return(<div>
                        <Button outline onClick={this.toggleModal}><span className="fa fa-pencil fa-lg"></span> Submit Comment</Button>
                        
                        <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                        <ModalHeader toggle={this.toggleModal}>Submit Comment</ModalHeader>
                        <ModalBody>
                            <LocalForm model="feedback" onSubmit={(values)=>this.handleSubmit(values)}>
                            <FormGroup>
                                        <Label htmlFor="rating">Rating</Label>
                                        <Control.select model=".rating" name="rating"
                                        className="form-control">
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                    </Control.select>
                             </FormGroup>
                             <FormGroup>
                                    <Label htmlFor="name">Your name</Label>
                                    <Control.text model=".name" id="name" name="name"
                                        placeholder="Your Name"
                                        className="form-control"
                                        validators={{
                                            required, minLength: minLength(3), maxLength: maxLength(15)
                                        }}
                                    />
                                    <Errors
                                        className="text-danger"
                                        model=".name"
                                        show="touched"
                                        messages={{
                                            required: 'Required',
                                            minLength: 'Must be greater than 2 characters',
                                            maxLength: 'Must be 15 characters or less'
                                        }}
                                     />

                             </FormGroup>
                             <FormGroup>
                                    <Label htmlFor="comment" >Comment</Label>
                                
                                    <Control.textarea model=".comment" id="comment" name="comment"
                                        rows="6"
                                        className="form-control" 
                                    />
                             </FormGroup>
                             <FormGroup>
                             <Button type="submit" color="primary">
                                        Submit
                                    </Button>
                            </FormGroup>   

                            </LocalForm>                                
                        </ModalBody>
                    </Modal>
            </div>) 
    }
}

export default CommentForm;
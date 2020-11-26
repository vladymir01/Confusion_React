import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody,CardTitle, Breadcrumb, 
    BreadcrumbItem,Button, Modal, ModalHeader, ModalBody, FormGroup, Label,Input } from 'reactstrap';
import { Link } from 'react-router-dom';
import { LocalForm, Control, Errors } from 'react-redux-form';
//import CommentForm from './CommentFormComponent';


/* The Comment Form Component */

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
                            <LocalForm onSubmit={(values)=>this.handleSubmit(values)}>
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

/* End of the CommentForm Component*/

function RenderDish(dish){
    return(
   
        <Card>
            <CardImg width="100%" src={dish.image} alt={dish.name} />
            <CardBody>
                <CardTitle>{dish.name}</CardTitle>
                <CardText>{dish.description}</CardText>
            </CardBody>
        </Card>
    );
}

function RenderComments(comments){
    
   const comm = comments.map ((comment)=>{           
                            return (<div key={comment.id}>
                                        <div>{comment.comment}</div>
                                            
                                        <div>-- {comment.author}, {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'})
                                                                        .format(new Date(Date.parse(comment.date)))
                                                                    }
                                        </div>
                                        
                                </div>)});
    return (<div>
                {comm}
                <CommentForm/>
            </div>);
}


const DishDetail=(props)=>{

  

    return (
    <div className="container">
                    
    
                <div className="row">
                    <Breadcrumb>

                        <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                        <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>{props.dish.name}</h3>
                        <hr />
                    </div>                
                </div>
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        {/*<RenderDish dish={props.dish} />*/}
                        {RenderDish(props.dish)}
                    </div>
                    <div className="col-12 col-md-5 m-1">
                {/*<RenderComments comments={props.comments} />*/}
                {RenderComments(props.comments)}
                
                    </div>
                </div>
    </div>

    );

}

export default DishDetail;


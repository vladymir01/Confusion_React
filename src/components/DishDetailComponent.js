import React, {Component} from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody,CardTitle } from 'reactstrap';

class DishDetail extends Component{
    constructor(props){
        super(props);
    }

    render(){
        //console.log(this.props.dish);
        const comments = this.props.dish.comments.map((comment)=>{           
            return (<div key={comment.id}>
                        <div>{comment.comment}</div>
                         {/*<div> -- {comment.author}, {comment.date} </div>*/}
                        <div>-- {comment.author}, {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'})
                                                    .format(new Date(Date.parse(comment.date)))
                                                  }
                         </div>
                         
                  </div>)});
        return(  
            <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-5 m-1">
                            <Card>
                                <CardImg width="100%" src={this.props.dish.image} alt={this.props.dish.name} />
                                <CardBody>
                                    <CardTitle>{this.props.dish.name}</CardTitle>
                                    <CardText>{this.props.dish.description}</CardText>
                                </CardBody>
                            </Card>
                        </div>
                        <div className="col-12 col-md-5 m-1">
                            <h4>Comments</h4>
                            {comments}
                        </div>
                    </div>      
            </div>
                
            
            
        );
        
    }
}

export default DishDetail;
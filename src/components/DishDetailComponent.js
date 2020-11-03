import React from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody,CardTitle } from 'reactstrap';

function RenderDish(dish){
    return(
    <div className="col-12 col-md-5 m-1">
        <Card>
            <CardImg width="100%" src={dish.image} alt={dish.name} />
            <CardBody>
                <CardTitle>{dish.name}</CardTitle>
                <CardText>{dish.description}</CardText>
            </CardBody>
        </Card>
    </div>);
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
    return comm;
}

const DishDetail=(props)=>{
    return (
        <div className="container">
            <div className="row">
                {RenderDish(props.dish)}
                <div className="col-12 col-md-5 m-1">
                                <h4>Comments</h4>
                                {RenderComments(props.dish.comments)}
                </div>
            </div>
           
        </div>
    );

}

export default DishDetail;

/* class DishDetail extends Component{
    constructor(props){
        super(props);
    }

    render(){
        
        const comments = this.props.dish.comments.map((comment)=>{           
            return (<div key={comment.id}>
                        <div>{comment.comment}</div>
                         
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



export default DishDetail;*/
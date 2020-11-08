import React from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody,CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';

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
    return comm;
}


const DishDetail=(props)=>{

  

    return (
    <div className="container">
                    {/*<div className="row">
                                {RenderDish(props.dish)}
                                <div className="col-12 col-md-5 m-1">
                                                <h4>Comments</h4>
                                                {RenderComments(props.dish.comments)}
                                </div>
                    </div>*/}
           
    

    
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
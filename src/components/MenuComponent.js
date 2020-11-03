import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody,CardTitle } from 'reactstrap';
//import DishDetail from '../components/DishDetailComponent.js';

function RenderMenuItem ({dish, onClick}) {
  return (
      <Card onClick={() => onClick(dish.id)}>
          <CardImg width="100%" src={dish.image} alt={dish.name} />
          <CardImgOverlay>
              <CardTitle>{dish.name}</CardTitle>
          </CardImgOverlay>
      </Card>
  );
}

//class Menu extends Component {
  /*  constructor(props) {
        super(props);
        this.state = {
            selectedDish: null
        };
    }*/

    /*onDishSelect(dish) {
        this.setState({ selectedDish: dish});
    }*/

   /* renderDish(dish) {
        if (dish != null)
            return(
                <DishDetail dish={dish}/>
            );
        else
            return(
                <div></div>
            );
    }*/
    const Menu = (props) => {
            const menu = props.dishes.map((dish) => {
                          return (
                              <div className="col-12 col-md-5 m-1"  key={dish.id}>
                                  <RenderMenuItem dish={dish} onClick={props.onClick} />
                              </div>
                          );
                      });


   /* render() {
        const menu = this.props.dishes.map((dish) => {
            return (
              <div  className="col-12 col-md-5 m-1" key={dish.id}>
                <Card  onClick={() => this.props.onClick(dish.id)}>
                  <CardImg width="100%" src={dish.image} alt={dish.name} />
                  <CardImgOverlay>
                      <CardTitle>{dish.name}</CardTitle>
                  </CardImgOverlay>
                </Card>
              </div>
            );
        });*/


        return (
          <div className="container">
            <div className="row">
              {menu}
            </div>
            
                  
                    {/*this.renderDish(this.state.selectedDish)*/}
                  
            
                
          </div>
        );
    }


export default Menu;
import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './MenuComponent';
import DishDetail from './DishDetailComponent';
/*import { DISHES } from '../shared/dishes';
import { COMMENTS } from '../shared/comments';
import { PROMOTIONS } from '../shared/promotions';
import { LEADERS } from '../shared/leaders';*/
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import About from './AboutComponent';
import Contact from './ContactComponent';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { addComment } from '../redux/ActionCreators';



const mapStateToProps = state => {
  return {
    dishes: state.dishes,
    comments: state.comments,
    promotions: state.promotions,
    leaders: state.leaders
  }
}

const mapDispatchToProps = dispatch => ({
  
  addComment: (dishId, rating, author, comment) => dispatch(addComment(dishId, rating, author, comment))

});

class Main extends Component {

  constructor(props) {
    super(props);
   /* this.state = {
        dishes: DISHES,
        comments: COMMENTS,
        promotions: PROMOTIONS,
        leaders: LEADERS
    };*/
  }

 

 /* onDishSelect(dishId) {
    this.setState({ selectedDish: dishId});
  }*/

   renderDish(dish) {
        if (dish != null)
            return(
                <DishDetail dish={dish}/>
            );
        else
            return(
                <div></div>
            );
    }

  render() {
    const DishWithId = ({match}) => {
                                  return(
                                      <DishDetail dish={this.props.dishes.filter((dish) => dish.id === parseInt(match.params.dishId,10))[0]} 
                                        comments={this.props.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId,10))}
                                        addComment={this.props.addComment} />
                                  );
                                };

        const HomePage = () => {
                                return(
                                  <Home 
                                        dish={this.props.dishes.filter((dish) => dish.featured)[0]}
                                        promotion={this.props.promotions.filter((promo) => promo.featured)[0]}
                                        leader={this.props.leaders.filter((leader) => leader.featured)[0]}
                                   />
                                );
                              }
   
    return (
      <div>
          <Header/>
          <Switch>   
                  <Route path='/home' component={HomePage} />
                  <Route exact path='/menu' component={() => <Menu dishes={this.props.dishes} />} />
                  <Route exact path='/contactus' component={Contact} />} />
                  <Route path='/menu/:dishId' component={DishWithId} />
                  <Route exact path='/aboutus' component={()=> <About leaders={this.props.leaders}/>} />
                  <Redirect to="/home" />

          </Switch>
          <Footer/>
      </div>
    );
  }
}

//export default Main;
//export default withRouter(connect(mapStateToProps)(Main));
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
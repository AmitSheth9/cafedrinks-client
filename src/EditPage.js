import React, { Component } from 'react'
import { getCategories, getDrink, updateDrink } from './fetch-utils'

export default class EditPage extends Component {
    state = {
        drink: [],
        categories: [],
    
    }

    componentDidMount = async () => {
        const drink = await getDrink(this.props.match.params.id);
        this.setState({drink});
        const categories = await getCategories()
        this.setState({categories});
    }
    handleSubmit = async e => {
        e.preventDefault();
        const current = this.state.drink;
        let drinkEdit = {
            name: this.state.nameEdit || current.name,
            price: this.state.priceEdit || current.price,
            calories: this.state.caloriesEdit || current.calories,
            category_id: this.state.categoryEdit || 1,
            image: this.state.imageEdit || current.image
        }
        await updateDrink(this.props.match.params.id, drinkEdit);
        this.props.history.push('/');
    }

    render() {
        const drinkitem = this.state.drink;
        console.log(this.state);
        return (
            
            <div className='detail-box'>
                <div className='cafedrink'>
                        <p>ID: {this.props.match.params.id}</p>
                        <p>Name: {drinkitem.name}</p>
                        <p>Price: {drinkitem.price}</p>
                        <p>Calories: {drinkitem.calories}</p>
                        <p>Category: {drinkitem.category}</p>
                        <img src={drinkitem.image} alt={drinkitem.name}/>
                    </div>
                    <br/>
                    <form onSubmit={this.handleSubmit} className='edit-form'>
                        <label>Name:<input defaultValue={drinkitem.name} onChange={(e) => this.setState({ nameEdit: e.target.value})}/>
                        </label><br/>
                        <label>Price<input defaultValue={drinkitem.price} onChange={(e) => this.setState({ priceEdit: e.target.value})}/></label><br/>
                        <label>Calories<input defaultValue={drinkitem.calories} onChange={(e) => this.setState({ caloriesEdit: e.target.value})}/> </label><br/>
                        <label>Category:<select
                        value={drinkitem.category_id}
                        onChange={(e) => this.setState({ categoryEdit: e.target.value})}>
                            {this.state.categories.map(category =>
                        <option
                        key={category.category}
                        value={category.id}>
                        {category.category}</option>)}
                        </select></label><br/>
                       <label>Image:<input defaultValue={drinkitem.image} onChange={(e) => this.setState({ imageEdit: e.target.value })}/></label>
                       <button>Submit</button>
                    </form>
            </div>
        )
    }
}

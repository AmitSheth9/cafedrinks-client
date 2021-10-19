import React, { Component } from 'react'
import { getCategories, postDrink } from './fetch-utils'


export default class CreatePage extends Component {
    state = {
        name: '',
        price: 0,
        calories: 0,
        category: 1,
        img: '',
        categories: []
    }

    componentDidMount = async () => {
        const categories = await getCategories()
        this.setState({ categories: categories });
    }

    nameChange = e => this.setState({ name: e.target.value })
    priceChange = e => this.setState({ price: Number(e.target.value) })
    caloriesChange = e => this.setState({ calories: Number(e.target.value)})
    categoryChange = e => this.setState({ category: Number(e.target.value)})
    imageChange = e => this.setState({ img: e.target.value})

    handleSubmit = async e => {
        e.preventDefault();
        let newDrink = {
            name: this.state.name,
            price: this.state.price,
            calories: this.state.calories,
            category_id: this.state.category,
            image: this.state.img
        }
        await postDrink(newDrink);
        this.props.history.push('/');
    }
   

    render() {
        console.log(this.state); 
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>Name:<input onChange={this.nameChange}/></label>
                    <label>Price:<input type='number' onChange={this.priceChange}/></label>
                    <label>Calories:<input type='number' onChange={this.caloriesChange}/></label>
                    <label>Category<select onChange={this.categoryChange}>
                        {this.state.categories.map(category =>
                        <option
                        key={category.category}
                        value={category.id}>
                        {category.category}</option>)}
                        </select></label>
                    <label>Image:<input onChange={this.imageChange}/></label>
                    <button>Submit</button>
                    
                </form>
            </div>
        )
    }
}

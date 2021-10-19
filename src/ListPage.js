import React, { Component } from 'react'
import { getCafeDrinks } from './fetch-utils';
import { Link } from 'react-router-dom';


export default class ListPage extends Component {
   state = {
       cafeDrinks: []
   }

   componentDidMount = async() => {
        const cafeDrinks = await getCafeDrinks();

        this.setState({ cafeDrinks: cafeDrinks})
   }
   
   
   
    render() {
        const { cafeDrinks } = this.state;
        console.log(cafeDrinks);

        return (
            <div className='cafedrinks'>
                {cafeDrinks.map(({
                    id,
                    name,
                    price,
                    calories,
                    category,
                    image,
                }) =>
                <Link to={`edit/${id}`} key={`${id}`}>
                    <div className='cafedrink'>
                        <p>ID: {id}</p>
                        <p>Name: {name}</p>
                        <p>Price: {price}</p>
                        <p>Calories: {calories}</p>
                        <p>Category: {category}</p>
                        <img src={image} alt={name}/>
                    </div>



                </Link>)


            }
            </div>
        )
    }
}

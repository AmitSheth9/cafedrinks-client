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

        return (
            <div className='cafedrinks'>
                {cafeDrinks.map(({
                    id,
                    name,
                    price,
                    calories,
                    category,
                    image
                }) =>
                <Link to={`edit/${id}`} key={`${id}`}>
                    <div className='cafedrink'>
                        <p>{id}</p>
                        <p>{name}</p>
                        <p>{price}</p>
                        <p>{calories}</p>
                        <p>{category}</p>
                        <image src={image} alt={name}/>
                    </div>



                </Link>)


            }
            </div>
        )
    }
}

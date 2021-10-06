import request from 'superagent';

const URL = 'https://cafedrinks6b.herokuapp.com';



export async function getCafeDrinks() {
    const response = await request.get(`${URL}/cafedrinks`)
    
    return response.body;
}
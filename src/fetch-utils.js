import request from 'superagent';

const URL = 'https://cafedrinks6b.herokuapp.com';



export async function getCafeDrinks() {
    const response = await request.get(`${URL}/cafedrinks`)
    
    return response.body;
}

export async function getCategories() {
    const response = await request.get(`${URL}/categories`)
    return response.body;
}

export async function postDrink(drink) {
    const response = await request.post(`${URL}/cafedrinks`)
    .send(drink);
    return response.body;
}

export async function getDrink(id) {
    const response = await request.get(`${URL}/cafedrinks/${id}`)

    return response.body;

}

export async function updateDrink(id, edit) {
    const response = await request.put(`${URL}/cafedrinks/${id}`)
    .send(edit);

    return response.body
}
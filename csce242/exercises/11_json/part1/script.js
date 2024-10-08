const getShoes = async() => {
    const url = "https://portiaportia.github.io/json/shoes.json";

    try {
        const response = await fetch(url);
        return response.json();
    } catch(error) {
        console.log(error);
    }
};

const showShoes = async() => {
    const shoes = await getShoes();

    shoes.foreach((shoe)=> {

    });
};

//show all of the shoes when the page loads
//showShoes();
getShoes();

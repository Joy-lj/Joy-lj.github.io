//"https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita"

const getCocktails = async() => {
    try {
        return (await fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita")).json();
    } catch(error) {
        console.log(error);
    }
};

const showCocktails = async() => {
    const cocktails = await getCocktails();

    cocktails.forEach((cocktail)=> {
        const section = document.createElement("section");
        document.getElementById("cocktails").append(section);
    });
};

//show all of the shoes when the page loads
showCocktails();
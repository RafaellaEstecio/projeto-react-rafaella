import {useState} from "react";
import products from "../../assets/products.json"
import ProductCard from "../../components/ProductCard/ProductCard"
import {Main} from "./ProductsScreen.styled"

function ProductsScreen(props) {
    const {addToCart,
           filterText,
           minPrice,
           setMinPrice,
           isFilterText
        } = props

    const filterProductsByText = (e) =>{
        
        let filteredProducts = products;

        /** COMO UTILIZAR O FILTER
         * array.filter((variável alvo) => { condição})
         * let numeros = [1,2,3,4,5,9]
         * numeros.filter((i) =>{ i != 9}) = [1,2,3,4,5]

         * 
         * array.filter((variável alvo) => { condição})
         * let pessoas = [{ nome: 'pedro', idade: 12}, { nome: 'tiago', idade: 19}, { nome: 'marcos', idade: 34}]
         * pessoas.filter((pessoa) =>{ pessoa.idade < 18}) = [{ nome: 'pedro', idade: 12}]
         * **/

        if(minPrice > '0'){
            filteredProducts = filteredProducts.filter((product) => product.price >= minPrice  )
        }

        /*DEIXA POR ULTIMO DO ULTIMO*/
        // if(maxPrice != '0'){
        //     filteredProducts = filteredProducts.filter('filtrar por preço maximo')
        // }


        return filteredProducts.filter(
            (product) => product.name.toLowerCase().includes(filterText.toLowerCase())
        )

    }

    return (
        <Main>
            <section>
            <h1>Products</h1>
            {
                isFilterText
                &&  <input
                        placeholder="Preço mínimo"
                        type="number"
                        value={minPrice}
                        onChange={(e) => setMinPrice(e.target.value)}
                    />
            }
           

            <hr/>

                {
                   filterProductsByText()
                   .map((product)=>(
                       <ProductCard 
                       product={product}
                       addToCart={addToCart}
                       isOnProductsScreen={true}
                       key={product.id}/>       

                    ))
               } 
            </section>
           
        </Main>
    );
  }
  
  export default ProductsScreen;
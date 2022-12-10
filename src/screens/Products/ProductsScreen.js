import { useState } from "react";
import products from "../../assets/products.json"
import ProductCard from "../../components/ProductCard/ProductCard"
import { Main } from "./ProductsScreen.styled"
import { ORDENAR } from "../../consts";

function ProductsScreen(props) {
    const { addToCart,
        filterText,
        minPrice,
        setMinPrice,
        maxPrice,
        setMaxPrice,
        isFilterText,
        setFilterText,
    } = props

    const [selectedValue, setSelectedValue] = useState("")
    let filteredProducts = products;

    const clearFilters = () => {
        setMinPrice("");
        setMaxPrice("");
        setFilterText("");
        setSelectedValue(ORDENAR.EMPTY);
        filteredProducts = products;
    }

    const filterProductsByText = (e) => {
        if (minPrice > '0') {
            filteredProducts = filteredProducts.filter((product) => product.price >= minPrice)
        }
        if (maxPrice > '0') {
            filteredProducts = filteredProducts.filter((product) => product.price <= maxPrice)
        }


        if (selectedValue === ORDENAR.AZ) {
            filteredProducts = filteredProducts.sort(
                (a, b) => {
                    if (a.name < b.name) {
                        return -1
                    } else {
                        return 1
                    }
                }
            )
        }
         if (selectedValue === ORDENAR.ZA) {
            filteredProducts = filteredProducts.sort(
                (a, b) => {
                    if (a.name > b.name) {
                        return -1
                    } else {
                        return 1
                    }
                }
            )
        }
         if (selectedValue === ORDENAR.MENOR_MAIOR) {
            filteredProducts = filteredProducts.sort(
                (a, b) => {
                    if (a.price < b.price) {
                        return -1
                    } else {
                        return 1
                    }
                }
            )
        }
        if (selectedValue === ORDENAR.MAIOR_MENOR) {
            filteredProducts = filteredProducts.sort(
                (a, b) => {
                    if (a.price > b.price) {
                        return -1
                    } else {
                        return 1
                    }
                }
            )
        }

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
                    &&
                    <>
                        <input
                            placeholder="Preço mínimo"
                            type="number"
                            value={minPrice}
                            onChange={(e) => setMinPrice(e.target.value)}
                        />

                        <input
                            placeholder="Preço maxímo"
                            type="number"
                            value={maxPrice}
                            onChange={(e) => setMaxPrice(e.target.value)}
                        />
                        <select value={selectedValue}
                            onChange={e => setSelectedValue(e.target.value)}>
                            <option value={ORDENAR.EMPTY}>Ordenar</option>
                            <option value={ORDENAR.AZ}>Título A-Z</option>
                            <option value={ORDENAR.ZA}>Título Z-A</option>
                            <option value={ORDENAR.MENOR_MAIOR}>Menor valor</option>
                            <option value={ORDENAR.MAIOR_MENOR}>Maior valor</option>
                        </select>
                        <button onClick={clearFilters}>Limpar filtro</button>
                    </>
                }


                <hr />

                {
                    filterProductsByText()
                        .map((product) => (
                            <ProductCard
                                product={product}
                                addToCart={addToCart}
                                isOnProductsScreen={true}
                                key={product.id} />

                        ))
                }
            </section>

        </Main>
    );
}

export default ProductsScreen;
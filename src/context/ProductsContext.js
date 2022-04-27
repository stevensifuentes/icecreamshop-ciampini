import React, { createContext, useState, useEffect } from 'react'
import { collection, onSnapshot } from 'firebase/firestore'
import { db } from '../firebase/firebaseConfig'

export const ProductsContext = createContext()

export const ProductsContextProvider = ({ children }) => {
    const initialState = {
        products: []
    }

    const [state, setState] = useState(initialState)

    useEffect(() => {
        const prevProducts = state.products;

        onSnapshot(collection(db, 'Products'), (snapshot) => {
            const changes = snapshot.docChanges()

            changes.forEach(change => {
                if (change.type==='added') {
                    prevProducts.push({
                        ProductID: change.doc.id,
                        ProductName: change.doc.data().Nombre,
                        ProductPrice: change.doc.data().Precio,
                        ProductImg: change.doc.data().Imagen
                    })
                }
                setState({
                    products: prevProducts
                })
            })
        }, (error) => console.log(error))
    }, [])

    return (
        <ProductsContext.Provider value={ state }>
            { children }
        </ProductsContext.Provider>
    )
}


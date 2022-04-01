import { collection, onSnapshot } from 'firebase/firestore';
import React, { createContext } from 'react'
import { db } from '../firebase/firebaseConfig'

export const ProductsContext = createContext();

export class ProductsContextProvider extends React.Component {

    state = { 
        products: []
    }

    componentDidMount() {
        const prevProducts = this.state.products;

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
                this.setState({
                    products: prevProducts
                })
            })
        }, (error) => console.log(error))
    }

    render() {
        return (
            <ProductsContext.Provider value={{ products: [...this.state.products] }}>
                {this.props.children}
            </ProductsContext.Provider>
        )
    }
}


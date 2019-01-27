import React, { Component } from 'react';
import './App.css';

import axios from 'axios';

import { CSVLink } from "react-csv";

function searchingFor(term) {
    return function(x) {
        return x.name.toLowerCase().includes(term.toLowerCase()) || !term;
    }
}

class ConsumeApi extends Component {
    constructor() {
        super();
        this.state = {
            products: [],
            term: ''    
        };
        this.searchHandler = this.searchHandler.bind(this);
       
    }

    searchHandler(e){
        this.setState({ term : e.target.value })
    }

    componentDidMount() {
        axios.get('http://localhost:8080/api/test/products')
        .then(res => {
            console.log(res.data.products);
            const products = res.data.products;
            this.setState({ products })
        })
    }

  render() {
    
    const { products, term } = this.state;
    
    return (
      <div className="App">
    
        <form>
            <input type="text"
                    onChange={this.searchHandler}
                    value={term}
            />
        </form>

        <CSVLink data={products}>
            Download me
        </CSVLink>
        <table>
            <tbody>
               <tr>
                  <th>ID</th>
                  <th>Name</th> 
                  <th>Created At</th> 
                  <th>Ingredients</th> 
                  <th>Type</th> 
                  <th>Updated At</th> 
               </tr>
               {products.filter(searchingFor(term)).map(product => 
               (<tr key={product.id}>
                  <td>{product.id}</td>
                  <td>{product.name}</td>
                  <td>{product.createdAt}</td>
                  <td>{product.ingredients}</td>
                  <td>{product.type}</td>
                  <td>{product.updatedAt}</td>
               </tr>))}
               </tbody>
 
            </table>
      </div>      
    );
  }
}

export default ConsumeApi;

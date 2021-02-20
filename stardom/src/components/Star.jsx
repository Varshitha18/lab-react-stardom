import React, { Component } from 'react'
import prostar from './prostars.json';

export default class Star extends Component {
    constructor(){
        super();
        this.state = {
            prostars: [prostar[0],prostar[1],prostar[2],prostar[3],prostar[4]]
        }
    }

    renderProstars(){
        const data = this.state.prostars;
        const mapData = data.map( prostar => (
            <tr key={prostar.id}>
                <td><img src={prostar.pictureUrl } alt={prostar.pictureUrl} width = "150" height = "150"/></td>
                <td>{prostar.name}</td>
                <td>{prostar.popularity}</td>
                <td><button className="delete-button">Delete</button></td>     

            </tr>
        ));
        return mapData;
    }
    
    addRandom = () => {
        let remProstar = prostar.slice(5,prostar.length);
        const random = Math.floor(Math.random() * remProstar.length);
        this.setState( { prostars:this.state.prostars.concat(remProstar[random])});
    }

    sortName = () => {
        var stars = this.state.prostars;
        stars.sort( (prostar1,prostar2) => {
            let first = prostar1.name.toLowerCase();
            let second = prostar2.name.toLowerCase();
            if(first>second){
                return 1
            }
            else if(first>second){
                return -1
            }
            else{
                return 0
            }
        });
        this.setState({prostars:stars});
    }

    sortPopularity = () => {
        const stars = this.state.prostars;
        stars.sort( (prostar1,prostar2) => {
            let first = prostar1.popularity;
            let second = prostar2.popularity;
            if(first>second){
                return -1
            }
            else if(first<second){
                return 1
            }
            else{
                return 0
            }
        });
        this.setState({prostars:stars});
    }

    render() {
        return (
                <div className="table">
                    <div className="buttons">
                        <button className="getRandom" onClick={this.addRandom}>Get Random Contact</button>
                        <button className="sortByName" onClick={this.sortName}>Sort By Name</button>
                        <button className="sortByPopularity" onClick={this.sortPopularity}>Sort By Popularity</button>
                    </div>
                    <div >
                        <center>
                        <table className="tableProstar">
                            <thead className="heading">
                            <tr>
                                <th>Picture</th>
                                <th>Name</th>
                                <th>Popularity</th>
                                <th>Action</th>
                            </tr>
                            </thead>
                            <tbody>
                                {this.renderProstars()}
                            </tbody>
                        </table>
                        </center>
                    </div>

                </div>
        )
    }
}

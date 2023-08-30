import React from 'react';
import "./SearchNav.css";
import { NavLink } from 'react-router-dom/cjs/react-router-dom';
class SearchNav extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            search: "",
            arr: [
                {id: 1, name: 'Áo choàng băng giá'}
            ]
        }
        this.change = (e) => {
            this.setState({
                search: e.target.value
            })
        }
        this.Down = (e) => {
            e.preventDefault();
        }
        this.up = (e) => {
            e.preventDefault();
        }
        this.delete = (job) => {
            let deleteJod = this.state.arr;
            deleteJod = deleteJod.filter(item => item.id !== job.id)
            this.setState({
                arr: deleteJod
            })

        }
        this.key = (e) => {
            switch(e.which){
                case 13:
                    let add = this.state.arr;
                    if(add.length < 7){
                        add.unshift({
                            id: Math.floor(Math.random() * 100000),
                            name: this.state.search
                        });
                        this.setState({
                            arr: add
                        })
                    }
                    else{
                        add.pop();
                        add.unshift({
                            id: Math.floor(Math.random() * 100000),
                            name: this.state.search
                        });
                        this.setState({
                            arr: add
                        })
                        this.setState({
                            search: ""
                        })
                    }
                    break;
                default:
                    break;
            }
        }
    }
    render() {
        let name = this.state.arr;
        return (
            <div className='body'>
                <div className='search__box'>
                    <input
                    type='text' 
                    value={this.state.search} 
                    placeholder='Search Lenalen'
                    className='search__txt' 
                    onChange={(e) => this.change(e)}
                    onKeyDown={(e) => this.key(e)}
                    />
                    <button className='search__btn'>
                        Search?
                        <i className="fa-solid fa-magnifying-glass"></i>
                    </button>
                    <div className="search-history">
                        {name.map((item) => {
                            return(
                                <ul className="history__link" key={item.id}>
                                    <li key={item.id}><NavLink to="#" 
                                    onMouseDown={(e) => this.Down(e)}
                                    onMouseUp={(e) => this.up(e)}>
                                    <i className="fa-solid fa-magnifying-glass"></i>{item.name}
                                    <i className="fa-solid fa-xmark icon__close" 
                                    onClick={() => this.delete(item)}></i></NavLink></li>
                                </ul>
                            )
                        })}
                    </div>
                </div>
            </div>
        );
    }
}

export default SearchNav;
import s from './Searchbar.module.css'
import { Component } from 'react'
import { FcSearch } from 'react-icons/fc'

export class Searchbar extends Component {

    state = {
        input: ""
    }

    handleSubmit = e => {
        e.preventDefault();
        this.props.setQuery(this.state.input)
    }

    render() {
        return (
<header className={s.searchbar}>
    <form className={s.form} onSubmit={this.handleSubmit}>
       <button type="submit" className={s.button}>
                        <FcSearch className={s.serch} />
        <span className={s.button_label}> Search</span>
        </button>

       <input
       className={s.input}
        type="text"
        value={this.state.input}
       autoComplete="off"
       autoFocus
        placeholder="Search images and photos"
        onChange={(e) => this.setState({input: e.target.value})}
      />
   </form>
</header>
    )
    }
}
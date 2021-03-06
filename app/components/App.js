import React, {Component} from 'react'
import {Route} from 'react-router-dom'
import {connect} from 'react-redux'

import Header from './Header'
import Intro from './Intro'
import Content from './Content'
import About from './About'
import UsefullInfo from './UsefullInfo'
import Footer from './Footer'
import PopupsController from './PopupsController'
import {closePopup, fetchPartners} from '../actions'

const mapStateToProps = ({popups}) => ({
  isCategoriesOpen: popups.categories
})

class App extends Component {
	constructor(props) {
		super(props)

		this.state = {
			category: null
		}

		this.clearCategory = this.clearCategory.bind(this)
		this.handleKeyDown = this.handleKeyDown.bind(this)
	}

	componentDidMount(){
    const {dispatch} = this.props
		const ele = document.getElementById('preloader')
		if(ele){
			setTimeout(() => {
				document.getElementById('loading-percent').innerHTML = '100%';
				document.getElementById('loading-bar').style.width = '100%';
			}, 2300)
			setTimeout(() => {
				ele.classList.add('fadeOut')
			}, 2500)
			setTimeout(() => {
				ele.outerHTML = ''
			}, 3300)
		}
    dispatch(fetchPartners('mfo'))
    dispatch(fetchPartners('cards'))
	}

	clearCategory() {
		this.setState({category: null})
	}

	handleKeyDown(event) {
		const {dispatch} = this.props

		if(event.keyCode === 27) {
			dispatch(closePopup())
		}
	}

	render() {
    	const {isCategoriesOpen} = this.props
		return (
			<div onKeyDown={this.handleKeyDown} tabIndex="1" className="app">
				<Header />
				<Intro />
				<Content category={this.state.category} />
				<Route path="/:id" component={UsefullInfo} />
				<Footer />
				<PopupsController />
			</div>
		)
	}
}

export default connect(mapStateToProps)(App)

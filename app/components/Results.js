import React, {Component} from 'react'

import CardList from './CardList'
import ResultsPagination from './ResultsPagination'

class Results extends Component {
	getTitle() {
		const {url} = this.props

		switch(url) {
			case "/mfo":
				return "микрозаймов"
			case "/cards":
				return "кредитных карт"
			// case "/credits":
			// 	return "кредитов"
			default:
				return "микрозаймов"
		}
	}

	render() {
		const {url, cards, tail, isLoggedIn, partners, dispatch} = this.props
		return (
			<div className="results">
				<h2>Рейтинг {this.getTitle()} <em>Рунета 2018 года</em></h2>
				{/*
				<div className="sort">
					<p>СОРТИРОВАТЬ:</p>
					<ul>
						<li>
							<a href="#">ПО РЕЙТИНГУ</a>
						</li>
						<li>
							<a href="#">ПО СУММЕ</a>
						</li>
						<li>
							<a href="#">ПО СРОКАМ</a>
						</li>
						<li>
							<a href="#">ПО ПРОЦЕНТНОЙ СТАВКЕ</a>
						</li>
					</ul>
				</div>
				*/}
				<CardList url={url} tail={tail} partners={partners} cards={cards} isLoggedIn={isLoggedIn} dispatch={dispatch} />
				{/* <ResultsPagination /> */}
			</div>
		)
	}
}

export default Results

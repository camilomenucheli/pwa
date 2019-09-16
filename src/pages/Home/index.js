import React from 'react'
import './styles.css'
import Header from '../../components/Header'
import Card from '../../components/Card'

export default function Home(){
	return (
		<div className="home-content">
			<Header />
			<Card />
		</div>
	)
}
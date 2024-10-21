import React from "react"
import { useState } from "react"
import { Cell } from "./components/Cell"
import "./App.css"

const App = () => {
	const [cells, setCells] = useState(["", "", "", "", "", "", "", "", ""])
  const [start, setStart] = useState("circle")
  const [winningMessage, setWinningMessage] = useState("")

  const message = `${start}'s turn`

	return (
		<>
			<div className="app">
				<div className="gameboard">
					{cells.map((cell, index) => (
						<Cell key={index} id={index} cell={cell} start={start} />
					))}
				</div>
        <p>{winningMessage || message}</p>
			</div>
		</>
	)
}

export default App

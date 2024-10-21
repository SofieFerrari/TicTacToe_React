import React from "react"
import PropTypes from "prop-types"

export const Cell = ({ id, cell, start }) => {
	const handleClick = (e) => {
		const taken =
			e.target.firstChild.classList.contains("circle") ||
			e.target.firstChild.classList.contains("cross")

		if (!taken) {
			if (start === "circle") {e.target.firstChild.classList.add("circle")
		}
      if (start === "cross") {e.target.firstChild.classList.add("cross")

      }
	}
  }

	return (
		<div className="square" id={id} onClick={handleClick}>
			<div>{cell}</div>
		</div>
	)
}

Cell.propTypes = {
	id: PropTypes.number,
	cell: PropTypes.string,
}
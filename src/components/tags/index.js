import React from 'react'
import './style.scss'


const colors = [
    "#FDEBDF",
    "#EBEAED",
    "#fff8e8",
    "#f0ebff",
    "#FFDAE3",
    "#CFEBFF",
]
const textColors = [
    "#ED677C",
    "#504D56",
    "#f5a148",
    "#9671fb",
    "#E446A5",
    "#33A0EF",
]


const Tags = ({ tags }) => {
    return (
        <div className="language-details">
            {tags && tags.map((tag, index) =>
                <button style={{ backgroundColor: `${colors[index % 7]}`, color: `${textColors[index % 7]}` }} className="round-button" key={'tag' + index}>{tag}</button>
            )
            }
        </div >
    )
}
export default Tags
import React from "react";

export const SortRow: React.FC = () => {

    return (
        <div className='sort-row'>
            <div className='sort-row__block'>
                <a href="/" className='sort-row__item sort-row__item--hovered'>
                    All project
                </a>
                <a href="/" className='sort-row__item sort-row__item--hovered'>
                    Workflow
                </a>
            </div>
            <div className='sort-row__block'>
                <a href="/" className='sort-row__item sort-row__item--hovered'>
                    Show projects:
                </a>
                <select className='select'>
                    <option>
                        All
                    </option>
                </select>
            </div>
        </div>

    )
}
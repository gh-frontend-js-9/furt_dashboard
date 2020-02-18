import React from "react";

export const Navigation: React.FC = () => {
    const titles = [
        'Project title',
        "Value",
        'Deadline',
        'Progress',
        'Status',
        'Assigned to'
    ];
    let renderNavigationListItem = titles.map((name: string, i: number) => {
        return <p key={i}
                  className='navigation-list__item'>
            {name}
        </p>

    });
    return (
            <div className='navigation-list'>
                {renderNavigationListItem}
            </div>
    );
};



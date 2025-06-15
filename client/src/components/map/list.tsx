import React from 'react';
import { Point } from '../../types/map';
import './list.css';

type ListProps = {
  points: Point[];
  onListItemHoverEnter: (id: string) => void;
  onListItemHoverLeave: () => void;
};

function List({ points, onListItemHoverEnter, onListItemHoverLeave }: ListProps) {
  return (
    <ul className="list">
      {points.map((point, index) => {
        const keyValue = `${index}-${point.title}`;
        return (
          <li
            className="list__item"
            key={keyValue}
            onMouseEnter={() => onListItemHoverEnter(point.id)}
            onMouseLeave={onListItemHoverLeave}
          >
            {point.title}
          </li>
        );
      })}
    </ul>
  );
}

export default List;

import React from 'react';
import { Point } from '../../types/map';
import './list.css';

type ListProps = {
  points: Point[];
  onListItemHover: (title: string) => void;
};

function List({ points, onListItemHover }: ListProps) {
  const handleListItemHover = (evt: React.MouseEvent<HTMLLIElement>) => {
    onListItemHover(evt.currentTarget.innerText);
  };

  return (
    <ul className="list">{
      points.map((point, index) => {
        const keyValue = `${index}-${point.title}`;

        return (
          <li
            className="list__item"
            key={keyValue}
            onMouseEnter={handleListItemHover}
          >
            {point.title}
          </li>
        );
      })
    }</ul>
  );
}

export default List;

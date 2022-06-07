import React from 'react';
import { NavLink } from 'react-router-dom';

const links = [
  { url: '/search', text: '🔎 All' },
  { url: '/news', text: '📰 News' },
  { url: '/image', text: '📸 Images' },
  { url: '/videos', text: '📺 Videos' },
];

export const Links = () => {
  return (
    <div className="mt-3">
      {links.map(({url, text})=>(
        <NavLink
         className="pr-7"
         key={text}
         to={url}
         activeClassName="pr-5 text-blue-700 border-b-2 dark:text-blue-300 border-blue-700 pb-2"
        >
          {text}
        </NavLink>
      ))}
    </div>
  )
}

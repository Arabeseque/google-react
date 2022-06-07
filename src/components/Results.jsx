import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ReactPlayer from 'react-player';

import { useStateContext } from '../contexts/StateContextProvider';
import { Loading } from './Loading';


export const Results = () => {
  const { results, loading, getResults, searchTerm } = useStateContext();
  const location = useLocation();

  useEffect(() => {
    if (searchTerm !== '') {
      if (location.pathname === '/videos') {
        getResults(`/search/q=${searchTerm} videos`);
      } else {
        getResults(`${location.pathname}/q=${searchTerm}&num=40`);
      }
    }
  }, [searchTerm, location.pathname]);
  console.log(results);
  if (loading) return <Loading />;

  switch (location.pathname) {
    case '/search':
      return (
        <div className="flex flex-wrap items-center justify-between space-y-6">
          {results?.results?.map(({link, title}, index)=>(
            <div
              key={index}
              className="w-full md:w-2/5"
            >
              <a href={link} traget="_blank" rel="noreferrer">
                <p className='text-sm'>
                  {link.length > 30 ? link.substring(0, 30) : link}
                </p>
                <p className='text-lg text-blue-700 hover:underline dark:text-blue-300'>
                  {title}
                </p>
              </a>
            </div>
          ))}
        </div> 
      )
    case '/image':
      return (
        <div className="flex flex-wrap items-center justify-center">
          {results?.image_results?.map(({ image, link: { href, title } }, index) => (
            <a href={href} target="_blank" key={index} rel="noreferrer" className="p-5 sm:p-3">
              <img src={image?.src} alt={title} loading="lazy" />
              <p className="mt-2 text-sm break-words sm:w-36 w-36">{title}</p>
            </a>
          ))}
        </div>
      )
    case '/news':
      return (
        <div className='flex items-center justify-center py-5'>
          <h1 className='text-2xl'>Occur happen when I try to get results</h1>
        </div>
        // <div className="flex flex-wrap items-center justify-between space-y-6 sm:px-56">
        //   {results?.entries?.map(({ id, links, source, title }) => (
        //     <div key={id} className="w-full md:w-2/5 ">
        //       <a href={links?.[0].href} target="_blank" rel="noreferrer" className="hover:underline ">
        //         <p className="text-lg text-blue-700 dark:text-blue-300">{title}</p>
        //       </a>
        //       <div className="flex gap-4">
        //         <a href={source?.href} target="_blank" rel="noreferrer" className="hover:underline hover:text-blue-300"> {source?.href}</a>
        //       </div>
        //     </div>
        //   ))}
        // </div>
      )
           
    case '/videos':
      return (
        <div className='flex flex-wrap'>
          {results?.results?.map((video, index)=>(
            <div className='p-2' >
              <ReactPlayer url={video.additional_links?.[0].href} controls width="354px" height="200px" />
            </div>
          ))}
          
        </div>
      )
  } 
}

// export default Results

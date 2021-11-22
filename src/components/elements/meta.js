import React from 'react';
import {Helmet} from "react-helmet";

const Meta = ({meta,page}) => {
    return (
        <div className="wrapper">
          {console.log(meta,'meta')}
           {meta && 
              page == "project" ? <Helmet>
                  <meta charSet="utf-8" />
              {meta[4] &&  <title>{meta[4].content}</title>}
              {meta[5] && <meta name="description" content={meta[5].content} />}
              {meta[5] && <meta property="og:title" content={meta[5].content} />}
            </Helmet> : meta &&   <Helmet>
                  <meta charSet="utf-8" />
              {meta[3] &&  <title>{meta[3].content}</title>}
              {meta[4] && <meta name="description" content={meta[4].content} />}
              {meta[5] && <meta property="og:title" content={meta[5].content} />}
            </Helmet>  
          }
        </div>
      )
  }
export default Meta;
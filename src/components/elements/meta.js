import React from 'react';
import MetaTags from 'react-meta-tags';

const Meta = ({meta}) => {
    return (
        <div className="wrapper">
           {meta && <MetaTags>
            {meta[3] && <title>{meta[3].content}</title>}
            {meta[4] && <meta name="description" content={meta[4].content} />}
            {meta[5] && <meta property="og:title" content={meta[5].content} />}
          </MetaTags> }
        </div>
      )
  }
export default Meta;
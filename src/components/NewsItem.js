import React from 'react'

const NewsItem = (props)=>{
      let  {title,description,imageUrl,newsUrl,author,date,source} = props;

        return (
            <div className="my-3">
                <div className="card">
                    <div style ={{
                        display:'flex',
                        justifyContent:'flex-end',
                        position:'absolute',
                        right:0
                    }}>
                    <span className="badge bg-info">{source}</span>
                    </div>

                <img src={!imageUrl?"https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2021%2F11%2Fnyc-mayor-eric-adams-first-3-paychecks-bitcoin-cryptocurrency-tweet-0.jpg?fit=max&cbr=1&q=90&w=750&h=500":imageUrl} className="card-img-top" alt="..."/>

                <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
                <p className="card-text">
                <small className="text-muted">By{!author?"Media":author} on {new Date(date).toGMTString()}
                </small></p>
                
            <a href={newsUrl} target= "_blank" rel="noreferrer" className="btn btn-sm btn-dark">Read More...</a>
            </div>
            </div>
            </div>
        )
}

export default NewsItem

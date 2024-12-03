import React from 'react'

const NewsItem = () => {
  let {title, description, imgUrl}=this.props;
  return (
      <div className='my-3'>
        <div className="card" style={{width: "18rem"}}>
          <img src={imgUrl} className="card-img-top" alt="" />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <a href="/" className="btn btn-primary">Go Somewhere</a>
          </div>
        </div>
      </div>
    )
}

export default NewsItem
import React from "react";

const NewsItem=(props)=> {
    let { title, description, imageUrl, newsUrl, author, date, sources} = props;
    return (
      <div className="my-3">
        <div className="card border-0" >
          <span className="position-absolute top-0 translate-middle badge rounded-pill bg-primary" style={{left:'90%'}}>
            {""}
            {sources? sources : "TIA"} {""}
          </span>
          <img
            // style={{ height: "14vw" }}
            src={
              imageUrl
                ? imageUrl
                : "https://images.unsplash.com/photo-1585829365295-ab7cd400c167?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            }
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <p className="card-text">
              <small className="text-muted">
                By {author ? author : "Unknown"} on{" "}
                {new Date(date).toGMTString()}
              </small>
            </p>
            <a
              rel="noreferrer"
              href={newsUrl}
              target="_blank"
              className="btn btn-sm btn-primary"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }


export default NewsItem;

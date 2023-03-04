import React from "react";

export default function NewsItem(props) {

  return (
    <>
      <br />
      <div className="cols px-4">
        <div className="card" style={{ width: "24rem", paddingBottom: "4px" }}>
          <img
            src={props.element.urlToImage}
            className="card-img-top"
            alt="Imagenotfound"
          />
          <div className="card-body">
            <h5 className="card-title">{props.element.title}</h5>
            <p className="card-text">{props.element.description}</p>
            <a
              href={props.element.url}
              target="_blank"
              rel="noreferrer"
              className="btn btn-primary"
            >
              Read more
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

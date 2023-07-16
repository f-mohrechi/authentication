import React from "react";
import "./auth.css";

export default function Login({ children, image, isltr, title }) {
  return (
    <>
      <div
        className="container"
        style={{
          marginTop: "50px",
          height: "90vh",
          background: "rgb(	132, 94, 241, 0.2)",
          borderRadius: "15px",
          direction: isltr ? "ltr" : "rtl",
        }}
      >
        <div
          className="row m-0"
          style={{ display: "flex", alignItems: "center", height: "87vh" }}
        >
          <div className={`col-12 col-md-6 `}>
            <div
              className="w-100 h-100"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img src={image} />
            </div>
          </div>

          <div
            title={title}
            className="col-12 col-md-6 my-3"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              background: "#f7f7f7",
              borderRadius: "10px",
              height: "100%",
            }}
          >
            {children}
          </div>
        </div>
      </div>
    </>
  );
}

import React from "react";

export default function Login({ children, image, isltr, title }) {
  return (
    <>
      <div
        className="container mx-auto mt-12 h-[90vh] rounded-2xl"
        style={{
          background: "rgb(	132, 94, 241, 0.2)",
          direction: isltr ? "ltr" : "rtl",
        }}
      >
        <div className="grid grid-cols-2" style={{ height: "87vh" }}>
          <div>
            <div className="w-full h-full flex items-center justify-center">
              <img src={image} />
            </div>
          </div>

          <div
            title={title}
            className="m-3 flex justify-center items-center bg-[#f7f7f7] rounded-lg h-full"
          >
            {children}
          </div>
        </div>
      </div>
    </>
  );
}

import React from 'react'

export default function FirstLine({allOrders}) {
    console.log(allOrders);
    return (
        <div className="row">
                <div className="col-4">
                    <div className="shadow p-3 mb-4 bg-white rounded">
                        <p style={{ fontSize: "14px", color: "grey" }}>SALES CYMBALS THIS MONTH </p>
                        <div className="clearfix">
                            <p className="float-left m-0" style={{ fontSize: "24px", fontWeight: "bold" }}>$ </p>
                            {/* <p className="float-left m-0" style={{ fontSize: "24px", fontWeight: "bold" }}>$ {cymbalsOrderThisMonth}</p> */}
                            <i className="bi bi-wallet-fill float-right" style={{ fontSize: "24px" }}></i>
                        </div>
                    </div>
                </div>
                <div className="col-4">
                    <div className="shadow p-3 mb-4 bg-white rounded">
                        <p style={{ fontSize: "14px", color: "grey" }}>SALES CYMBALS LAST MONTH</p>
                        <div className="clearfix">
                            <p className="float-left m-0" style={{ fontSize: "24px", fontWeight: "bold" }}>$ </p>
                            {/* <p className="float-left m-0" style={{ fontSize: "24px", fontWeight: "bold" }}>$ {cymbalsOrderLastMonth}</p> */}
                            <i className="bi bi-wallet-fill float-right" style={{ fontSize: "24px" }}></i>
                        </div>
                    </div>
                </div>
                <div className="col-4">
                    <div className="shadow p-3 mb-4 bg-white rounded">
                        <p style={{ fontSize: "14px", color: "grey" }}>SALES CYMBALS THIS YEAR</p>
                        <div className="clearfix">
                            <p className="float-left m-0" style={{ fontSize: "24px", fontWeight: "bold" }}>$ </p>
                            {/* <p className="float-left m-0" style={{ fontSize: "24px", fontWeight: "bold" }}>$ {cymbalsOrderThisYear}</p> */}
                            <i className="bi bi-wallet-fill float-right" style={{ fontSize: "24px" }}></i>
                        </div>
                    </div>
                </div>
            </div>
    )
}

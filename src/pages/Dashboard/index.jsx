import React, { useEffect } from 'react'

function Dashboard() {
    useEffect(() => {
        document.title = `Inventory Management System - Wavemg`;
    })


    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-4">
                    <div className="shadow p-3 mb-4 bg-white rounded">
                        <p style={{ fontSize: "14px", color: "grey" }}>SALES CYMBALS THIS MONTH </p>
                        <div className="clearfix">
                            <p className="float-left m-0" style={{ fontSize: "24px", fontWeight: "bold" }}>$ 5,600.00</p>
                            <i className="bi bi-wallet-fill float-right" style={{ fontSize: "24px" }}></i>
                        </div>
                    </div>
                </div>
                <div className="col-4">
                    <div className="shadow p-3 mb-4 bg-white rounded">
                        <p style={{ fontSize: "14px", color: "grey" }}>SALES CYMBALS LAST MONTH</p>
                        <div className="clearfix">
                            <p className="float-left m-0" style={{ fontSize: "24px", fontWeight: "bold" }}>$ 12,600.00</p>
                            <i className="bi bi-wallet-fill float-right" style={{ fontSize: "24px" }}></i>
                        </div>
                    </div>
                </div>
                <div className="col-4">
                    <div className="shadow p-3 mb-4 bg-white rounded">
                        <p style={{ fontSize: "14px", color: "grey" }}>SALES CYMBALS THIS YEAR</p>
                        <div className="clearfix">
                            <p className="float-left m-0" style={{ fontSize: "24px", fontWeight: "bold" }}>$ 152,600.00</p>
                            <i className="bi bi-wallet-fill float-right" style={{ fontSize: "24px" }}></i>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-12">
                    <div className="shadow p-3 mb-4 bg-white rounded" style={{ height: "200px" }}>
                        <p style={{ fontSize: "14px", color: "grey" }}>Analysis </p>
                        <div className="" >
                        </div>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-3">
                    <div className="shadow p-3 mb-5 bg-white rounded" style={{ minHeight: "200px" }}>
                        <p style={{ fontSize: "14px", color: "grey" }}>NOTICE </p>
                        <div className="">

                        </div>
                    </div>
                </div>
                <div className="col-9">
                    <div className="shadow p-3 mb-5 bg-white rounded" style={{ minHeight: "200px" }}>
                        <p style={{ fontSize: "14px", color: "grey" }}>TRACKING PURCHASING ITEM </p>
                        <div className="">

                        </div>
                    </div>
                </div>
            </div>

        </div>
    )

}

export default Dashboard

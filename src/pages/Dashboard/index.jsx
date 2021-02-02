import React, { useState, useEffect } from 'react'
import { Form, Col } from 'react-bootstrap';
import { Line } from 'react-chartjs-2';
// import FirstLine from './FirstLine'
import CurrencyComma from '../../components/CurrencyComma'
import API from "../../utils/API";
import "./style.css";

function Dashboard() {
    document.title = `Inventory Management System - Wavemg`;

    const [allOrders, setAllOrders] = useState();
    const [seletedYear, setSeletedYear] = useState(new Date().getFullYear());
    const [cymbalsOrderChart, setCymbalsOrderChart] = useState();
    const [cymbalsOrderLastMonth, setCymbalsOrderLastMonth] = useState();
    const [cymbalsOrderThisMonth, setCymbalsOrderThisMonth] = useState();
    const [cymbalsOrderThisYear, setcymbalsOrderThisYear] = useState();

    useEffect(() => {
        API.getData("http://localhost:4000/orders").then((res) => {
            
            let cymbalSaleSeletedYear = [];
            let thisMonthCymbalSales = 0;
            let lastMonthCymbalSales = 0;
            let thisYearCymbalSales = 0;
            let thisMonth = new Date().getMonth();
            let thisYear = new Date().getFullYear();
            let lastMonth;
            let lastYear = thisYear - 1;
            if (thisMonth === 1) {
                lastMonth = 12;
            } else {
                lastMonth = thisMonth - 1;
            }
            console.log("seletedYear");
            console.log(seletedYear);
            res.data.forEach(item => {
                if (item.product === "cymbal" && seletedYear === new Date(item.date).getFullYear()) {
                    if (cymbalSaleSeletedYear[new Date(item.date).getMonth()] === undefined) {
                        cymbalSaleSeletedYear.push(item.price);
                        console.log(new Date(item.date).getMonth())
                    } else {
                        cymbalSaleSeletedYear[new Date(item.date).getMonth()] += item.price;
                        console.log(new Date(item.date).getMonth())
                    }
                }

                if (item.product === "cymbal" && thisYear === new Date(item.date).getFullYear() && thisMonth === new Date(item.date).getMonth() + 1) {
                    thisMonthCymbalSales += item.price;
                }
                if (item.product === "cymbal" && lastYear === new Date(item.date).getFullYear() && lastMonth === new Date(item.date).getMonth() + 1) {
                    lastMonthCymbalSales += item.price;
                }
                if (item.product === "cymbal" && thisYear === new Date(item.date).getFullYear()) {
                    thisYearCymbalSales += item.price;
                }

            })
            
            let cymbalSaleSeletedYeartoFixed = []
            cymbalSaleSeletedYear.forEach(value => {
                console.log(value);
                cymbalSaleSeletedYeartoFixed.push(value.toFixed(2));
            })
            setAllOrders(res.data);
            setCymbalsOrderLastMonth(CurrencyComma(lastMonthCymbalSales.toFixed(2)));
            setCymbalsOrderThisMonth(CurrencyComma(thisMonthCymbalSales.toFixed(2)));
            setcymbalsOrderThisYear(CurrencyComma(thisYearCymbalSales.toFixed(2)));
            setCymbalsOrderChart(cymbalSaleSeletedYeartoFixed);
            console.log(cymbalSaleSeletedYeartoFixed);
            cymbalSaleSeletedYear =[];
            console.log("RUnging")
        })
    }, [seletedYear]);

    function handleFormOnChart(e) {
        console.log(e.target.value);
        setSeletedYear(parseInt(e.target.value));

        
    }
    const stateLine = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
        datasets: [{
            label: 'Cymbals Sales',
            backgroundColor: 'rgba(255, 99, 132, 0.1)',
            borderColor: 'rgba(255, 99, 132)',
            data: cymbalsOrderChart
        }]
    }



    return (
        <div className="container-fluid dashboard">
            {/* <FirstLine allOrders={allOrders}/> */}
            <div className="row">
                <div className="col-4">
                    <div className="shadow p-3 mb-4 bg-white rounded">
                        <p style={{ fontSize: "14px", color: "grey" }}>SALES CYMBALS THIS MONTH </p>
                        <div className="clearfix">
                            <p className="float-left m-0" style={{ fontSize: "24px", fontWeight: "bold" }}>$ {cymbalsOrderThisMonth}</p>
                            <i className="bi bi-wallet-fill float-right" style={{ fontSize: "24px" }}></i>
                        </div>
                    </div>
                </div>
                <div className="col-4">
                    <div className="shadow p-3 mb-4 bg-white rounded">
                        <p style={{ fontSize: "14px", color: "grey" }}>SALES CYMBALS LAST MONTH</p>
                        <div className="clearfix">
                            <p className="float-left m-0" style={{ fontSize: "24px", fontWeight: "bold" }}>$ {cymbalsOrderLastMonth}</p>
                            <i className="bi bi-wallet-fill float-right" style={{ fontSize: "24px" }}></i>
                        </div>
                    </div>
                </div>
                <div className="col-4">
                    <div className="shadow p-3 mb-4 bg-white rounded">
                        <p style={{ fontSize: "14px", color: "grey" }}>SALES CYMBALS THIS YEAR</p>
                        <div className="clearfix">
                            <p className="float-left m-0" style={{ fontSize: "24px", fontWeight: "bold" }}>$ {cymbalsOrderThisYear}</p>
                            <i className="bi bi-wallet-fill float-right" style={{ fontSize: "24px" }}></i>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-12">
                    <div className="shadow p-3 mb-4 bg-white rounded" style={{ height: "350px" }}>
                        <Line
                            data={stateLine}
                            height={80}
                            options={{
                            }}
                        />
                        <Form onChange={handleFormOnChart} className="formOnChart">
                            <Form.Group as={Col}>
                                <Form.Control as="select">
                                    <option>2021</option>
                                    <option>2020</option>
                                    <option>2019</option>
                                    <option>2018</option>
                                    <option>2017</option>
                                </Form.Control>
                            </Form.Group>
                        </Form>
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

import React from 'react'
// import { json } from 'react-router-dom'
// import PropTypes from "prop-types";

export default function Item(props) {

    return (
        <>
            {/* {json && json.map((Item) => ( */}
            <div id={props.id} className="card">
                <div className="card-body d-flex justify-content-around">
                    <p className="card-title d-inline my-5">{props.title}</p>
                    <li className="list-group-item d-flex justify-content-between align-items-start">
                        <div className=" me-auto">
                            <div className="fw-bold">Contact</div>
                            <div className='mt-4'>{props.name}</div>
                        </div>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-start">
                        <div className=" me-auto">
                            <div className="fw-bold">City</div>
                            <div className='mt-4'>{props.city}</div>
                        </div>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-start">
                        <div className=" me-auto">
                            <div className="fw-bold">Street</div>
                            <div className='mt-4'>{props.street}</div>
                        </div>
                    </li>

                    <p className='d-inline'>
                        <button className="btn btn-danger mt-5 btn-sm" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                            View Details
                        </button>
                        {/* {console.log(data-bs-target)} */}
                    </p>

                    {/* <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p> */}
                    {/* <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p> */}
                </div>
                <div className="collapse" id="collapseExample">
                    <div className="card card-body mx-5 my-3">
                        <li className="list-group-item d-flex justify-content-between align-items-start">
                            <div className="ms-2 me-auto">
                                <div className="fw-bold">Description</div>
                                <div className='mt-3'>{props.title} is a {props.catchPhrase} and their aim is {props.bs}</div>
                            </div>
                        </li>
                        <div className='d-inline d-flex mt-3'>
                            <li className="list-group-item d-flex justify-content-start ">
                                <div className="ms-2 me-auto">
                                    <div className="fw-bold">Contact</div>
                                    <div className='mt-2'>{props.name}</div>
                                </div>
                            </li>
                            <li id='end' className="list-group-item d-flex justify-content-end ">
                                <div className="ms-2 me-auto">
                                    <div className="fw-bold">Phone</div>
                                    <div className='mt-2'>{props.phone}</div>
                                </div>
                            </li>   
                        </div>

                        <div className='d-inline d-flex mt-3'>
                        <li className="list-group-item d-flex justify-content-end ">
                                <div className="ms-2 me-auto">
                                    <div className="fw-bold">Email</div>
                                    <div className='mt-2'>{props.email}</div>
                                </div>
                            </li>

                            <li id='end-email' className="list-group-item d-flex justify-content-end ">
                            <div className="ms-2 me-auto">
                                    <div className="fw-bold">Website</div>
                                    <div className='mt-2'>{props.website}</div>
                                </div>
                            </li>
                        </div>

                        <div className='d-inline d-flex mt-3'>
                            <li className="list-group-item d-flex justify-content-start ">
                            <div className="ms-2 me-auto">
                                    <div className="fw-bold">City</div>
                                    <div className='mt-2'>{props.city}</div>
                                </div>
                            </li>

                            <li id='end-city' className="list-group-item d-flex justify-content-end ">
                            <div className="ms-2 me-auto">
                                    <div className="fw-bold">Address</div>
                                    <div className='mt-2'>{props.suite} {props.street} {props.city} {props.zipcode}</div>
                                </div>
                            </li>
                        </div>

                    </div>
                </div>
            </div >
            {/* ))} */}
        </>
    )
}

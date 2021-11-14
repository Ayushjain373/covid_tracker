import React from 'react'
import "./style.css"
function Totalcase({ data }) {
    return (
        <>
            {
                data.filter((val) => {

                    if (val.state_name === '') {
                        return val;
                    }

                }).map((ele) => {

                    return (
                        <>
                            <div className="row mx-1 my-4">
                                <div className="col-sm-3">
                                    <div className="card">
                                        <div className="card-body">

                                            <h5 className="card-title">Active Case</h5>
                                            <span className="my-2" style={{ color: "blue" }}><i className="fab fa-creative-commons-sampling fa-4x" area-hidden="true"></i></span>

                                            <p className="font-weight-light my-2" style={{ color: "green" }}><sup>+</sup>{ele.new_active}</p>



                                            <h3 style={{ color: "red" }}>{ele.active}</h3>

                                        </div>
                                        
                                    </div>
                                </div>
                                <div className="col-sm-3">
                                    <div className="card">
                                        <div className="card-body">

                                            <h5 className="card-title">Positive Case</h5>
                                            <span className="my-2" style={{ color: "brown" }}><i className="fas fa-viruses fa-4x" area-hidden="true"></i></span>

                                            <p className="font-weight-light my-2" style={{ color: "black" }}><sup>+</sup>{ele.new_positive}</p>



                                            <h3 style={{ color: "red" }}>{ele.positive}</h3>

                                        </div>
                                        
                                    </div>
                                </div>
                                <div className="col-sm-3">
                                    <div className="card">
                                        <div className="card-body">

                                            <h5 className="card-title">Death Case</h5>
                                            <span className="my-2" style={{ color: "Red" }}><i className="fas fa-skull-crossbones fa-4x" area-hidden="true"></i></span>

                                            <p className="font-weight-light my-2" style={{ color: "green" }}><sup>+</sup>{ele.new_death}</p>



                                            <h3 style={{ color: "red" }}>{ele.death}</h3>

                                        </div>
                                        
                                    </div>
                                </div>
                                <div className="col-sm-3">
                                    <div className="card">
                                        <div className="card-body">

                                            <h5 className="card-title">Recover Case</h5>
                                            <span className="my-2" style={{ color: "green" }}><i className="fab fa-creative-commons-sampling fa-4x" area-hidden="true"></i></span>

                                            <p className="font-weight-light my-2" style={{ color: "green" }}><sup>+</sup>{ele.new_cured}</p>



                                            <h3 style={{ color: "green" }}>{ele.cured}</h3>

                                        </div>
                                        
                                    </div>
                                </div>

                            </div>
                        </>
                    )

                })
            }
        </>
    )
}

export default Totalcase

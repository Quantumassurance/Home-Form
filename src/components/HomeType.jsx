import React, { Component } from 'react'

import { withRouter } from 'react-router';
import Logo from '../Assets/cme.png'
import './forms.css';
import Footer from './Footer';


import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';



class HomeType extends Component {


    type = (values) => {

        values.preventDefault();

        let homeType = values.currentTarget.dataset.value;

        this.props.setHomeType(homeType);



        const urlSearch = window.location.search;

        const urlParams = new URLSearchParams(urlSearch);

        const zip = urlParams.get('zip_code');
        const status = urlParams.get('currently_insured');


        this.props.history.push('/own-rent' + '?zip_code=' + zip + '&currently_insured=' + status + '&type_of_property=' + homeType);

    }

    render() {
        return (
            <div className="back bg-white">
                <div className="bg-blue-500 headerText justify-center align-middle text-center">
                    <h2>Get Your Free Home Insurance Quote</h2>
                </div>
                <div className="bg-white rounded-lg shadow-xl sm:max-w-md sm:w-full sm:mx-auto sm:overflow-hidden m-12 formDiv content-center">
                    <div className="px-4 py-8 sm:px-10">


                        <div className="relative pt-1">
                            <div className="flex mb-2 items-center justify-between">

                                <div className="text-right">
                                    <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blue-600 bg-blue-200">
                                        10%
                                    </span>
                                </div>
                            </div>
                            <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-100">

                                <div style={{ width: "10%" }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-500"></div>

                            </div>
                        </div>


                        <div className="test">
                            <div className="mt-6">

                                <div>
                                    <div className="relative flex justify-center text-sm leading-5 con">
                                        <span className="px-2 text-black-500 text-3xl bold header">
                                            What type of home are you insuring?
                                        </span>
                                    </div>
                                </div>
                                <form onSubmit={this.type} >
                                    <div className="mt-6">
                                        <div className="w-full flex text-sm leading-5">

                                            <div className="text-sm leading-5 buttonBlockRow">

                                                <button className="chooseButton bg-blue-500 rounded text-white font-bold" type="button" data-config-id="05_button" data-value="Apartment" onClick={this.type}>Apartment</button>

                                                <button className="chooseButton bg-blue-500 rounded text-white font-bold" type="button" data-config-id="05_button" data-value="Condominium" onClick={this.type}>Condominium</button>

                                                <button className="chooseButton bg-blue-500 rounded text-white font-bold" type="button" data-config-id="05_button" data-value="Mobile Home" onClick={this.type}>Mobile Home</button>

                                                <button className="chooseButton bg-blue-500 rounded text-white font-bold" type="button" data-config-id="05_button" data-value="Multi Family" onClick={this.type}>Multi Family</button>

                                                <button className="chooseButton bg-blue-500 rounded text-white font-bold" type="button" data-config-id="05_button" data-value="Single Family" onClick={this.type}>Single Family</button>

                                                <button className="chooseButton bg-blue-500 rounded text-white font-bold" type="button" data-config-id="05_button" data-value="Town Home" onClick={this.type}>Town Home</button>



                                            </div>
                                        </div>
                                    </div>

                                </form>

                            </div>

                        </div>
                    </div>




                </div>
                <Footer />


            </div>
        )
    }
}

export default withRouter(HomeType)
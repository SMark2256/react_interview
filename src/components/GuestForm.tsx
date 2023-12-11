import React from "react";

class GuestForm extends React.Component {
    render() {
        return <div className="layout-column">
            <form className="contact-form">
                <div className="layout-row align-items-center justify-content-center mt-50">
                    <input
                        type="text"
                        data-test-id="name-input"
                        required
                        placeholder="Guest Name"
                    />
                    <input
                        type="date"
                        data-test-id="start-date"
                        required
                        placeholder="Start Date"
                    />
                    <input
                        type="date"
                        data-test-id="end-date"
                        required
                        placeholder="End Date"
                    />
                </div>
                <div className="layout-row align-items-center justify-content-center mt-50">
                    <button data-test-id="submit-button" className="w-30">Add to Menu</button>
                </div>
            </form>
        </div>
    }
}

export default GuestForm

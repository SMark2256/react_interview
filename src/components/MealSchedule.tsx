import React from "react";

class MealSchedule extends React.Component {
    render() {
        return <div className="layout-column align-items-center justify-content-center">
            <section
                className="content layout-row align-items-center justify-content-center mt-50"
            >
                <table className="card content">
                    <thead>
                        <tr>
                            <th>Date</th>
                            <th>Breakfast</th>
                            <th>Lunch</th>
                            <th>Dinner</th>
                        </tr>
                    </thead>
                    <tbody data-test-id="meal-schedule">
                    <tr>
                        <td data-test-id="date">2023-12-01</td>
                        <td>
                            <ul data-test-id="breakfast-list">
                                <li>Teszt Elek</li>
                            </ul>
                        </td>
                        <td>
                            <ul data-test-id="lunch-list">
                                <li>Teszt Elek</li>
                            </ul>
                        </td>
                        <td>
                            <ul data-test-id="dinner-list">
                                <li>Teszt Elek</li>
                            </ul>
                        </td>
                    </tr>
                    <tr>
                        <td data-test-id="date">2023-12-02</td>
                        <td>
                            <ul data-test-id="breakfast-list">
                                <li>Teszt Elek</li>
                            </ul>
                        </td>
                        <td>
                            <ul data-test-id="lunch-list">
                                <li>Teszt Elek</li>
                            </ul>
                        </td>
                        <td>
                            <ul data-test-id="dinner-list">
                                <li>Teszt Elek</li>
                            </ul>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </section>
        </div>

    }
}

export default MealSchedule

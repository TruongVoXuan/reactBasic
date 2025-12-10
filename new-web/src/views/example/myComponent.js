import React from "react";
import ChildComponent from "./childComponent";
class MyComponent extends React.Component {
    /**
     * Component của React giúp render lại các html
     * JSX: code html bên trong JS ==> trả ra 1 khối block (1 div, h, bar)
     * render là 1 component mà user muốn trả ra dữ liệu
     */

    state = {
        // name: '',
        // age: '22'
        firstName: '',
        lastName: '',
        arrJobs: [
            { id: 'abcJob1', title: 'Developers', salary: '500' },
            { id: 'abcJob2', title: 'Testers', salary: '400' },
            { id: 'abcJob3', title: 'Project managers', salary: '1000' },
        ]
    }

    // handleClickButton = () => {
    //     alert('click me')
    // }

    // handleOnChangeName = (event) => {
    //     this.setState({
    //         name: event.target.value
    //     })
    // }

    handleChangeFirstName = (event) => {
        this.setState({
            firstName: event.target.value
        })
    }

    handleChangeLastName = (event) => {
        this.setState({
            lastName: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        console.log('>> check data input : ', this.state)
    }
    render() {

        return (

            /**
             * khi dùng vậy thì console in ra 1 thẻ div bao bọc 2 thẻ div ở trong
             * muốn không bị bọc vậy thì dùng fragment còn dc kí hiệu là: <> </>
             */
            <>
                <form action="/action_page.php">
                    <label htmlFor="fname">First name:</label><br />
                    <input
                        type="text"
                        value={this.state.firstName}
                        onChange={(event) => this.handleChangeFirstName(event)}
                    />
                    <br />
                    <label htmlFor="lname">Last name:</label><br />
                    <input
                        type="text"
                        value={this.state.lastName}
                        onChange={(event) => this.handleChangeLastName(event)}
                    />
                    <br />
                    <br />
                    <input type="submit"
                        onClick={(event) => this.handleSubmit(event)}
                    />
                </form>

                <ChildComponent
                    name={this.state.firstName}
                    age={'22'}
                    address={'Nha Trang'}
                    arrJobs={this.state.arrJobs}
                />



            </>

        )
    }


}

/**
 * Khi muốn xử dụng lại Component vào 1 file khác
 * vdu: ở đây sử dụng lại class MyComponent vào file App.js
 * ta sử dụng export default
 */
export default MyComponent;
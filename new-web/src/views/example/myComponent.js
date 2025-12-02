import React from "react";

class MyComponent extends React.Component {
    /**
     * Component của React giúp render lại các html
     * JSX: code html bên trong JS ==> trả ra 1 khối block (1 div, h, bar)
     * render là 1 component mà user muốn trả ra dữ liệu
     */

    state = {
        name: 'FunyCosy',
        age: '22'
    }

    handleClickButton = () => {
        alert('click me')
    }

    handleOnChangeName = (event) => {
        this.setState({
            name: event.target.value
        })
    }

    render() {

        return (
            // <div className="abc">
            //     <div className="first">
            //         console.log('My name is :', name)
            //         hello my component , My name is {name}
            //     </div>
            //     <div className="second">
            //         aaaaaaaaaaaaaaaaaaa
            //     </div>
            // </div>

            /**
             * khi dùng vậy thì console in ra 1 thẻ div bao bọc 2 thẻ div ở trong
             * muốn không bị bọc vậy thì dùng fragment còn dc kí hiệu là: <> </>
             */
            <>
                <div className="first">

                    <input value={this.state.name} type="text"
                        onChange={(event) => this.handleOnChangeName(event)}

                    />
                    My name is : {this.state.name}
                </div>
                <div className="second">

                    My age is : {this.state.age}
                </div>
                <div className="third">
                    <button onClick={() => this.handleClickButton()}> Click me!</button>
                </div>
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
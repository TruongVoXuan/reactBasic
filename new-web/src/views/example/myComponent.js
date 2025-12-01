import React from "react";

class MyComponent extends React.Component {
    /**
     * Component của React giúp render lại các html
     * JSX: code html bên trong JS
     * render là 1 component mà user muốn trả ra dữ liệu
     */
    render() {
        return (
            <div> hello my component FUNYCOSY</div>
        )
    }
}

/**
 * Khi muốn xử dụng lại Component vào 1 file khác
 * vdu: ở đây sử dụng lại class MyComponent vào file App.js
 * ta sử dụng export default
 */
export default MyComponent;
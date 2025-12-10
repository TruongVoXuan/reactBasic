import React from "react";

class ChildComponent extends React.Component {

    state = {
        showJob: false
    }
    handleShowHide = () => {
        this.setState({
            showJob: !this.state.showJob
        })
    }
    render() {
        // let name = this.props.name
        // let age = this.props.age

        let { arrJobs } = this.props
        let { showJob } = this.state
        let check = showJob === true ? 'showJob = true' : 'showJob = false';
        console.log('>>> check conditional: ', check)
        return (
            /**
             * khi dùng vậy thì console in ra 1 thẻ div bao bọc 2 thẻ div ở trong
             * muốn không bị bọc vậy thì dùng fragment còn dc kí hiệu là: <> </>
             */
            <>
                {showJob === false ?
                    <div>
                        <button onClick={() => this.handleShowHide()}>Show</button>
                    </div>
                    :
                    <>
                        <div className="job-lists">
                            {
                                arrJobs.map((item, index) => {
                                    return (
                                        <div key={item.id}>
                                            {item.title} - {item.salary}
                                        </div>
                                    )
                                })
                            }
                        </div>
                        <div> <button onClick={() => this.handleShowHide()}>Hide</button></div>
                    </>
                }
            </>

        )
    }


}

/**
 * Khi muốn xử dụng lại Component vào 1 file khác
 * vdu: ở đây sử dụng lại class ChildComponent vào file App.js
 * ta sử dụng export default
 */
export default ChildComponent;
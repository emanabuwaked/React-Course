import React from "react";

const UpdateComponent = (originalComponent) => {


    class newComponent extends React.Component {
        render() {
            return (
                <originalComponent name="eman" />
            )
        }
    }

    return newComponent
}

export default UpdateComponent
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
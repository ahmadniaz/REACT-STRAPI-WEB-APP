import React from 'react'
import PropagateLoader from "react-spinners/PropagateLoader";

const Loader = () => {
    return (
        <div>
            <PropagateLoader loading='true' color="#03235A" speedMultiplier='1' />
        </div>
    )
}

export default Loader

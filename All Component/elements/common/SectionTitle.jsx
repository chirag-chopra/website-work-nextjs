import React, { Component } from "react";

class SectionTitle extends Component {
    render() {
        const { title , textColor } = this.props
        return (
             <>
                 <div className="section-title-default">
                     <h2 className={`title ${textColor}`}>{title}</h2>
                 </div>
             </>
        )
    }
}
export default SectionTitle;




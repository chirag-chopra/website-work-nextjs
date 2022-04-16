import React from "react";

const SectionTitle = (props) => {
    const { title, textColor } = props
    return (
        <>
            <div className="section-title-default">
                <h2 className={`title ${textColor}`}>{title}</h2>
            </div>
        </>
    )
}
export default SectionTitle;




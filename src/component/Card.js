import React from "react";
const Card = ({name,email,id}) => {
    
    return (
        <div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>

            <div>
                <img alt="robots" src={`https://robohash.org//${id}`} style={{ width: "200px" }} />
                <div>
                    <h2>{name}</h2>
                    <p>{email}</p>
                </div>
            </div>

        </div>




    );
}
export default Card;
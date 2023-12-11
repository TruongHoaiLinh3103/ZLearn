// import React from 'react';
// import "../../Styles/learnsass.scss";
// const LearnScss = () => {
//     return (
//         <div className='LearnScss'>
//             <h1>Trương Hoài Linh</h1>
//             <ul>
//                 <li>
//                     <a href='*'>Xin chào các bạn</a>
//                 </li>
//                 <li>
//                     <a href='*'>Tôi tên Trương Hoài Linh</a>
//                 </li>
//                 <li>
//                     <a href='*'>Còn có tên gọi khác là Anikey</a>
//                 </li>
//             </ul>
//             <div className='LearnScss-btn'>
//                 <button className='ss'>Success</button>
//                 <button className='wn'>Warning</button>
//                 <button className='er'>Error</button>
//             </div>
//             <h3>Anikey</h3>
//         </div>
//     );
// };

// export default LearnScss;

import React, { Component } from 'react';
import "../../Styles/learnsass.scss";

class LearnScss extends Component {
    render() {
        return (
            <div className='LearnScss'>
                <h1>Trương Hoài Linh</h1>
                <ul>
                    <li>
                        <a href='*'>Xin chào các bạn</a>
                    </li>
                    <li>
                        <a href='*'>Tôi tên Trương Hoài Linh</a>
                    </li>
                    <li>
                        <a href='*'>Còn có tên gọi khác là Anikey</a>
                    </li>
                </ul>
                <div className='LearnScss-btn'>
                    <button className='ss'>Success</button>
                    <button className='wn'>Warning</button>
                    <button className='er'>Error</button>
                </div>
                <h3>Anikey</h3>
            </div>
        );
    }
}

export default LearnScss;
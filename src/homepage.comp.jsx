import React, { Component } from 'react';

// class homepage.comp extends Component {
//     render() {
//         return (
//             <div>
                
//             </div>
//         );
//     }
// }

// export default homepage.comp;

const HomePage = () => (
    <div className='homepage'>
        <div className='directory-menu'>
        <div className='menu-item'>
                <div className='content'>
                    <h1 className='title'>HATS</h1>
                    <span className='subntitle'>Shop Now</span>
                </div>
            </div>
            <div className='menu-item'>
                <div className='content'>
                    <h1 className='title'>Jackets</h1>
                    <span className='subntitle'>Shop Now</span>
                </div>
            </div>
            <div className='menu-item'>
                <div className='content'>
                    <h1 className='title'>Sneakers</h1>
                    <span className='subntitle'>Shop Now</span>
                </div>
            </div>
            <div className='menu-item'>
                <div className='content'>
                    <h1 className='title'>WOmens</h1>
                    <span className='subntitle'>Shop Now</span>
                </div>
            </div>
            <div className='menu-item'>
                <div className='content'>
                    <h1 className='title'>Mens</h1>
                    <span className='subntitle'>Shop Now</span>
                </div>
            </div>
        </div>
    </div>
);

export default HomePage;

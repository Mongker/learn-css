/**
 * Copyright 2020 present, Lê Văn Mong.
 * All rights reserved.
 * @author Mong Le Van on 8/8/2020
 * @email: levanmong.dola.99@gmail.com
 * @student-code: 68DCHT20091
 * @university: UTT (Đại học công nghệ giao thông vận tải)
 */

import React from 'react';

// styles
import '../../App.css';

class ContentRight extends React.Component {
    functionDefault = () => {};
    render() {
        return(
            <div style={{overflow: 'auto', height: '90%'}}>
                <div className="container-right">
                    <img src="https://f1.pngfuel.com/png/386/684/972/face-icon-user-icon-design-user-profile-share-icon-avatar-black-and-white-silhouette-png-clip-art.png"
                         alt="Avatar"
                         style={{width:'100%'}}
                    />
                        <p>Hello. How are you today?</p>
                        <span className="time-right">11:00</span>
                </div>

                <div className="container-right darker">
                    <img src="https://cdn.iconscout.com/icon/free/png-512/avatar-367-456319.png"
                         alt="Avatar"
                         className="right"
                         style={{width:'100%'}}
                    />
                        <p>Hey! I'm fine. Thanks for asking!</p>
                        <span className="time-left">11:01</span>
                </div>

                <div className="container-right">
                    <img src="https://f1.pngfuel.com/png/386/684/972/face-icon-user-icon-design-user-profile-share-icon-avatar-black-and-white-silhouette-png-clip-art.png"
                         alt="Avatar"
                         style={{width:'100%'}}
                    />
                        <p>Sweet! So, what do you wanna do today?</p>
                        <span className="time-right">11:02</span>
                </div>

                <div className="container-right darker">
                    <img src="https://cdn.iconscout.com/icon/free/png-512/avatar-367-456319.png"
                         alt="Avatar" 
                         className="right"
                         style={{width:'100%'}}
                    />
                        <p>Nah, I dunno. Play soccer.. or learn more coding perhaps?</p>
                        <span className="time-left">11:05</span>
                </div>
            </div>
        );
    }
}

export default ContentRight;
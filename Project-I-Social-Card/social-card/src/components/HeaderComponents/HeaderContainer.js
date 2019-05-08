import React from 'react';
import './Header.css';
import './ImageThumbnail'
import HeaderTitle from './HeaderTitle';
import ImageThumbnail from './ImageThumbnail';
import HeadersContent from './HeaderContent';


const HeaderContainer = () => {
   return <div>
            <div className="ImageTitle">
                <ImageThumbnail /> 
                <HeaderTitle />
           </div>
            <HeadersContent />

            </div>
}

export default HeaderContainer 

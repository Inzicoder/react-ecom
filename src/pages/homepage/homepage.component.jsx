import React from 'react';

import Directory from '../../components/directory/directory.component'
import HomepageContainer from './homepage.styles';


const Homepage = () => (
    <div className="homepage">
        <HomepageContainer>
        <Directory />
        </HomepageContainer>
           </div>
)

export default Homepage
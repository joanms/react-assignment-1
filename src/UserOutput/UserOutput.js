import React from 'react';

import './UserOutput.css';

const userOutput = (props) => {
    return (
        <div className="UserOutput">
            <p>
                Username: {props.userName}
            </p>
            <p>
                Vivamus aliquam mollis leo a vestibulum. Pellentesque euismod 
                varius elit vitae viverra. Donec eget nisl eget nunc imperdiet 
                auctor ac ac sem. Duis ac euismod dolor. Suspendisse a neque mollis, 
                condimentum ante a, vehicula libero. Ut maximus convallis erat, 
                quis fermentum sapien mollis nec. Pellentesque lacinia libero ac ante 
                tristique blandit. Vivamus eu nisi rutrum, imperdiet velit sit amet, 
                aliquam odio. Nunc a nibh sed diam pretium malesuada nec id justo.
            </p>
        </div>
    );
};

export default userOutput;
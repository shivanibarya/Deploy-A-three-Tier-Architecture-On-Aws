
    import React, {Component} from 'react';
    import architecture from '../../assets/3 Tier Architecture.png'

    class Home extends Component {
        render () {
        return (
            <div>
            <h1 style={{color:"white"}}>'Deploy A 3-Tier Architecture On Aws by shivani'</h1>
            <img src={architecture} alt="3T Web App Architecture" style={{height:400,width:825}} />
          </div>
        );
      }
    }

    export default Home;

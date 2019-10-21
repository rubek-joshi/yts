import React, {Component} from 'react';
import LottieView from 'lottie-react-native';

class Splash extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loadingIndicators: [
        require('../../assets/lottie/33-video-cam.json'),
        require('../../assets/lottie/719-loading.json'),
        require('../../assets/lottie/1879-movie-loading.json'),
        require('../../assets/lottie/2293-twirl-particles-loading.json'),
        require('../../assets/lottie/2546-circular-spin-loader.json'),
        require('../../assets/lottie/3705-loading.json'),
        require('../../assets/lottie/lf30_editor_Lr99ct.json'),
      ],
    };
  }
  componentDidMount() {
    setTimeout(() => this.props.navigation.navigate('Home'), 3000);
  }
  render() {
    const {loadingIndicators} = this.state;
    return (
      <LottieView
        source={
          loadingIndicators[
            Math.floor(Math.random() * (loadingIndicators.length - 1 - 0 + 1)) + 0
          ]
        }
        autoPlay
        loop
      />
    );
  }
}

export default Splash;

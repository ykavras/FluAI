import React, {Component} from 'react';
import {View, StatusBar} from 'react-native';
import styles from './styles';
import {OnBoardingItem} from '../../components/';
import OnBoardingCarousel from '../../components/OnBoardingCarousel';
import Image1 from '../../assets/img/onBoarding/image-1.png';
import Image2 from '../../assets/img/onBoarding/image-2.png';
import Image3 from '../../assets/img/onBoarding/image-3.png';
import Image4 from '../../assets/img/onBoarding/image-4.png';

class OnBoarding extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          color1: '#FFCE30',
          color2: '#DCDCDC',
          image: Image1,
          title: 'Picture for AI Analysis',
          text:
            "Let's take a picture of your throat now, we'll use the rear camera.",
          buttonColor: '#FFAA2B',
          onPress: undefined,
        },
        {
          color1: '#FF6830',
          color2: '#FF90C0',
          image: Image2,
          title: 'Get a Mirror or Friend',
          text:
            'Before we start go opposite of a mirror or ask your friend for help',
          buttonColor: '#FF599C',
          onPress: undefined,
        },
        {
          color1: '#F830FF',
          color2: '#9790FF',
          image: Image3,
          title: 'Go until inside of your mouth',
          text:
            'Move your phone closer to mouth lower teeth and lips should not appear',
          buttonColor: '#FF599C',
          onPress: undefined,
        },
        {
          color1: '#306EFF',
          color2: '#90FFE9',
          image: Image4,
          title: 'Get your photo !',
          text: 'After focusing on the back of the mouth, press capture button',
          buttonColor: '#3D9EE9',
          onPress: () => this.props.navigation.navigate('Camera'),
        },
      ],
      activeSlide: 0,
    };
  }

  renderItem({item, index}) {
    return (
      <OnBoardingItem
        key={`item_${index}`}
        color1={item.color1}
        color2={item.color2}
        image={item.image}
        title={item.title}
        text={item.text}
        buttonColor={item.buttonColor}
        onPress={item.onPress}
      />
    );
  }

  render() {
    const {data, activeSlide} = this.state;
    return (
      <View style={styles.wrapper}>
        <StatusBar barStyle="light-content" />
        <OnBoardingCarousel
          data={data}
          renderItem={this.renderItem}
          onSnapToItem={index => {
            this.setState({activeSlide: index});
            this.forceUpdate();
          }}
          activeDotIndex={activeSlide}
        />
      </View>
    );
  }
}

export default OnBoarding;

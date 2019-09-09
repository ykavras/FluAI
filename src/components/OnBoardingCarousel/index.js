import React from 'react';
import {View, Dimensions} from 'react-native';
import styles from './styles';
import Carousel, {Pagination} from 'react-native-snap-carousel';
const width = Dimensions.get('window').width;
function OnBoardingCarousel(props) {
  const {data, renderItem, onSnapToItem, activeDotIndex} = props;
  return (
    <View style={styles.wrapper}>
      <Carousel
        ref={c => {
          this.carousel = c;
        }}
        data={data}
        renderItem={renderItem}
        sliderWidth={width}
        itemWidth={width}
        onSnapToItem={onSnapToItem}
        inactiveSlideScale={1}
      />
      <Pagination
        dotsLength={data.length}
        activeDotIndex={activeDotIndex}
        dotStyle={styles.dot}
        inactiveDotStyle={styles.inactiveDotStyle}
        inactiveDotOpacity={1}
        inactiveDotScale={1}
      />
    </View>
  );
}

OnBoardingCarousel.defaultProps = {};

export default OnBoardingCarousel;

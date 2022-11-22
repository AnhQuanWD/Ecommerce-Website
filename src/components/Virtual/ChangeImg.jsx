import React from "react";
import before from '../../assets/before.png'
import after from '../../assets/after.png'
import {
   ReactCompareSlider,
   ReactCompareSliderHandle,
   ReactCompareSliderImage
} from "react-compare-slider";

const ChangeImg = () => {
   return (
      <ReactCompareSlider style={{ width: "100%" }}
         handle={
            <ReactCompareSliderHandle
               buttonStyle={{
                  background: "transparent",
                  border: "2px solid #fff",
                  color: "#fff"
               }}
            />
         }
         itemOne={
            <ReactCompareSliderImage
               src={before}
               alt="one"
            />
         }
         itemTwo={
            <ReactCompareSliderImage
               src={after}
               alt="two"
            />
         }
      // onPositionChange={handlePositionChange}

      />
   )
}

export default ChangeImg
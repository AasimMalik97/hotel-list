import { Flex, RangeSlider, RangeSliderFilledTrack, RangeSliderThumb, RangeSliderTrack, Text } from "@chakra-ui/react";
import React from "react";

function PriceFilter(){
    return(
        <div className="">
            <Text marginTop={'15px'} color='orange.500' fontWeight={'semibold'} marginBottom={'5px'}> PRICE </Text>
            <RangeSlider
                aria-label={['min', 'max']}
                colorScheme='orange'
                defaultValue={[10, 30]}
            >
                <RangeSliderTrack>
                    <RangeSliderFilledTrack />
                </RangeSliderTrack>
                <RangeSliderThumb index={0} />
                <RangeSliderThumb index={1} />
            </RangeSlider>
            <Flex justifyContent={'space-between'}>
                <Text fontSize='smaller' color={"blue.300"}> INR 100 </Text>
                <Text fontSize='smaller' color={"blue.300"}> INR 10,00,000 </Text>
            </Flex>
        </div>
    )
}

export default PriceFilter;
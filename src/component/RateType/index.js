import { Checkbox, Text } from '@chakra-ui/react';
import React from 'react';

function RateType(){
    return(
    <>
        <div className='' >
            <Text marginTop={'15px'} color='orange.500' fontWeight={'semibold'} marginBottom={'5px'}> RATE TYPE </Text>
            <div className=''>
                <div className=''>
                    <Checkbox size='sm' colorScheme='blue' color={'blue.300'}>
                        REFUNDABLE
                    </Checkbox>
                </div>
                <div className=''>
                    <Checkbox size='sm' colorScheme='blue' color={'blue.300'}>
                        NON - REFUNDABLE
                    </Checkbox>
                </div>
            </div>
        </div>
    </>
    )
}

export default RateType;
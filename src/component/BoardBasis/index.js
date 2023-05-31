import { Checkbox, Text } from '@chakra-ui/react';
import React from 'react';

function BoardBasis(){
    return(
    <>
        <div className='' >
            <Text marginTop={'15px'} color='orange.500' fontWeight={'semibold'} marginBottom={'5px'}> Board Basis </Text>
            <div className=''>
                <div className=''>
                    <Checkbox size='sm' colorScheme='blue' color={'blue.300'}>
                        ROOM ONLY
                    </Checkbox>
                </div>
                <div className=''>
                    <Checkbox size='sm' colorScheme='blue' color={'blue.300'}>
                        BREAKFAST
                    </Checkbox>
                </div>
                <div className=''>
                    <Checkbox size='sm' colorScheme='blue' color={'blue.300'}>
                        HALF BOARD
                    </Checkbox>
                </div>
            </div>
        </div>
    </>
    )
}

export default BoardBasis;
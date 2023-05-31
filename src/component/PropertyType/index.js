import { Checkbox, Text } from "@chakra-ui/react";
import React from "react";

function PropertyType(){
    return(
    <>
        <div className='' >
            <Text marginTop={'15px'} color='orange.500' fontWeight={'semibold'} marginBottom={'5px'}> PROPERTY TYPE </Text>
            <div className=''>
                <div className=''>
                    <Checkbox size='sm' colorScheme='blue' color={'blue.300'}>
                        HOTEL
                    </Checkbox>
                </div>
                <div className=''>
                    <Checkbox size='sm' colorScheme='blue' color={'blue.300'}>
                        APARTHOTEL
                    </Checkbox>
                </div>
                <div className=''>
                    <Checkbox size='sm' colorScheme='blue' color={'blue.300'}>
                        HOSTEL
                    </Checkbox>
                </div>
                <div className=''>
                    <Checkbox size='sm' colorScheme='blue' color={'blue.300'}>
                        APARTMENT
                    </Checkbox>
                </div>
                <div className=''>
                    <Checkbox size='sm' colorScheme='blue' color={'blue.300'}>
                        GUESTHOUSE
                    </Checkbox>
                </div>
                <div className=''>
                    <Checkbox size='sm' colorScheme='blue' color={'blue.300'}>
                        BED & BREAKFAST
                    </Checkbox>
                </div>
            </div>
        </div>
    </>
    )
}

export default PropertyType;
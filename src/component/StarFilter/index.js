import { StarIcon } from '@chakra-ui/icons';
import { Checkbox, Flex, Text } from '@chakra-ui/react';
import React from 'react'

function StarFilter(){
    return(
        <>
            <div className='' >
                <Text marginTop={'15px'} color='orange.500' fontWeight={'semibold'} marginBottom={'5px'}> STAR RATING </Text>
                <div className=''>
                    <div className=''>
                        <Checkbox size='sm' colorScheme='blue' defaultChecked color={'blue.300'}>
                            Checkbox
                        </Checkbox>
                    </div>
                    <div className=''>
                        <Checkbox size='sm' colorScheme='blue' height={'20px'}>
                            <Flex gap={'1'}>
                                <StarIcon color={'orange.500'} />
                                <StarIcon color={'gray.300'} />
                                <StarIcon color={'gray.300'} />
                                <StarIcon color={'gray.300'} />
                                <StarIcon color={'gray.300'} />
                            </Flex>
                        </Checkbox>
                    </div>
                    <div className=''>
                        <Checkbox size='sm' colorScheme='blue' height={'20px'}>
                            <Flex gap={'1'}>
                                <StarIcon color={'orange.500'} />
                                <StarIcon color={'orange.500'} />
                                <StarIcon color={'gray.300'} />
                                <StarIcon color={'gray.300'} />
                                <StarIcon color={'gray.300'} />
                            </Flex>
                        </Checkbox>
                    </div>
                    <div className=''>
                        <Checkbox size='sm' colorScheme='blue' height={'20px'}>
                            <Flex gap={'1'}>
                                <StarIcon color={'orange.500'} />
                                <StarIcon color={'orange.500'} />
                                <StarIcon color={'orange.500'} />
                                <StarIcon color={'gray.300'} />
                                <StarIcon color={'gray.300'} />
                            </Flex>
                        </Checkbox>
                    </div>
                    <div className=''>
                        <Checkbox size='sm' colorScheme='blue' height={'20px'}>
                            <Flex gap={'1'}>
                                <StarIcon color={'orange.500'} />
                                <StarIcon color={'orange.500'} />
                                <StarIcon color={'orange.500'} />
                                <StarIcon color={'orange.500'} />
                                <StarIcon color={'gray.300'} />
                            </Flex>
                        </Checkbox>
                    </div>
                    <div className=''>
                        <Checkbox size='sm' colorScheme='blue' height={'20px'}>
                            <Flex gap={'1'}>
                                <StarIcon color={'orange.500'} />
                                <StarIcon color={'orange.500'} />
                                <StarIcon color={'orange.500'} />
                                <StarIcon color={'orange.500'} />
                                <StarIcon color={'orange.500'} />
                            </Flex>
                        </Checkbox>
                    </div>
                </div>
            </div>
        </>
    )
}

export default StarFilter;
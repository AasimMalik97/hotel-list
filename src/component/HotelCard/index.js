import { StarIcon } from "@chakra-ui/icons";
import { Box, Card, Flex, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";

function HotelCard(){
    return(
        <>
            <Card borderRadius={'xl'}>
                <Flex padding={'10px 20px 10px 10px'} gap={'4'}>
                    <div className="" style={{flex:'none'}}>
                        <Image
                            objectFit='cover'
                            width={'300px'}
                            src='https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60'
                            alt='Caffe Latte'
                            borderRadius={'lg'}
                        />
                    </div>
                    <Flex direction={'column'} justifyContent={'space-between'} gap='2'>
                        <Flex justifyContent={'space-between'}> 
                            <Flex gap={'1'}>
                                <StarIcon color={'yellow.500'}/>
                                <StarIcon color={'yellow.500'}/>
                                <StarIcon color={'yellow.500'}/>
                                <StarIcon color={'yellow.500'}/>
                            </Flex>
                            <Box padding={'0px 15px'} rounded={'full'} background={'blue.100'}>
                                <Text color='blue.600' fontSize='smaller'> Available </Text>
                            </Box>
                        </Flex>
                        <Heading color={'blue.300'} as='h5' size='md'> Charming Waterfront Condo </Heading>
                        <Text color='gray.700' fontSize='medium'> Robert Robertson, 1234 NW Bobcat Lane, St. Robert. (P): 65584-5678. </Text>
                        <Text color='gray.600' fontSize='smaller'> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.   </Text>
                        <Flex justifyContent={'space-between'} padding={'5px 10px 0px 10px'} borderTop={'1px'} borderColor={'gray.300'}>
                            <Text color={'orange.500'} fontSize={'medium'} fontWeight={'bold'}> Prices Starting From </Text>
                            <Text color={'blue.300'} fontSize={'medium'} fontWeight={'bold'}> EUR200 </Text>
                        </Flex>
                    </Flex>
                </Flex>
            </Card>
        </>
    )
}

export default HotelCard;
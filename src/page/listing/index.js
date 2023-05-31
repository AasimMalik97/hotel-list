import React from 'react';
import { Box, Flex, Grid, GridItem, Heading , Input, InputGroup, InputLeftElement, Text } from '@chakra-ui/react'
import { SearchIcon } from '@chakra-ui/icons';
import SearchFilter from '../../component/SearchFilter';
import HotelCard from '../../component/HotelCard';
import StarFilter from '../../component/StarFilter';
import PriceFilter from '../../component/PriceFilter';
import BoardBasis from '../../component/BoardBasis';
import PropertyType from '../../component/PropertyType';
import RateType from '../../component/RateType';

function Listing(){

    const hotelList=[{id:1},{id:2},{id:3},{id:4},{id:5}];

    return(
        <>
            <div className='listing-container'>
                <Heading color={'orange.400'} as='h3' size='lg'> 1,000 Hotels found in DISNEYLAND PARIS, FR </Heading>
                <Text fontSize='sm' marginTop={'15px'} color={'gray.500'}> for thursday, 1st june, 2022 for 3 night(s) </Text>
                <Flex direction={'row-reverse'} > 
                    <InputGroup width={'300px'}>
                        <InputLeftElement pointerEvents='none'>
                            <SearchIcon color='gray.300' />
                        </InputLeftElement>
                        <Input type='search' placeholder='Modify Search' />
                    </InputGroup>
                </Flex>
                <Grid templateColumns='repeat(5, 1fr)' gap={10} marginTop="20px">
                    <GridItem colSpan={1}>
                        <SearchFilter/>
                        <StarFilter/>
                        <PriceFilter/>
                        <BoardBasis/>
                        <PropertyType/>
                        <RateType/>
                    </GridItem>
                    <GridItem colSpan={4}>
                        {hotelList.map((item,index)=>(
                            <Box marginBottom={'25px'} key={index}>
                                <HotelCard />
                            </Box>
                        ))}
                    </GridItem>
                </Grid>
            </div>       
        </>
    )
}

export default Listing;
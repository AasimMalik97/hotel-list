import { SearchIcon } from '@chakra-ui/icons';
import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react';
import React from 'react';

function SearchFilter(){
    return(
        <>
             <InputGroup>
                <InputLeftElement pointerEvents='none'>
                    <SearchIcon color='gray.300' />
                </InputLeftElement>
                <Input type='search' placeholder='Search Hotel' background={'gray.100'}/>
            </InputGroup>
        </>
    );
}

export default SearchFilter;
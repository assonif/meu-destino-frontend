import React from 'react';

import SearchSideBar from '../../components/SearchSideBar';
import SearchResult from '../../components/SearchResult';

import { Container, ResultContainer } from './styles';

const Search: React.FC = () => {
  return (
    <Container>
      <SearchSideBar />
      <ResultContainer>
        <SearchResult />
        <SearchResult />
        <SearchResult />
        <SearchResult />
        <SearchResult />
        <SearchResult />
        <SearchResult />
        <SearchResult />
        <SearchResult />
        <SearchResult />
        <SearchResult />
        <SearchResult />
        <SearchResult />
        <SearchResult />
        <SearchResult />
        <SearchResult />
        <SearchResult />
        <SearchResult />
      </ResultContainer>
    </Container>
  );
};

export default Search;

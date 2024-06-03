import React from 'react'
import { Models } from 'appwrite';
import GridPostList from './GridPostList';
import Loader from './Loader';


type SearchResultProps = {
  isSearchFetching: boolean;
  searchedPosts: Models.Document[];
}

export const SearchResults = ({ isSearchFetching, searchedPosts }: SearchResultProps) => {
  if (isSearchFetching) {
    return <Loader />;
  } else if (searchedPosts && searchedPosts.documents.length > 0) {
    return <GridPostList posts={searchPosts.documents} />;
  } else {
    return (
      <p className="text-light-4 mt-10 text-center w-full">No results found</p>
    );
  }
};
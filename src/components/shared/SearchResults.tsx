//import React from 'react'
//import { Models } from 'appwrite';
import GridPostList from './GridPostList';
import Loader from './Loader';
//import { searchPosts } from '@/lib/appwrite/api';


export type SearchResultProps = {
  isSearchFetching: boolean;
  searchedPosts: any;
};

export const SearchResults = ({ isSearchFetching, searchedPosts }: SearchResultProps) => {
  if (isSearchFetching) {
    return <Loader />;
  } else if (searchedPosts && searchedPosts.documents.length > 0) {
    return <GridPostList posts={searchedPosts.documents} />;
  } else {
    return (
      <p className="text-light-4 mt-10 text-center w-full">No results found</p>
    );
  }
};
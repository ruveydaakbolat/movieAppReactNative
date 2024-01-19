import { View, Text, ScrollView } from 'react-native'
import React, {useEffect} from 'react'
import { useRoute } from '@react-navigation/native';
import { GetPersonDetails, GetMovieCreditsPerson } from '../app/movieAction';
import { getPersonDetailState, getPersonMovieCreditsState } from '../app/movieSelector';
import { useDispatch, useSelector } from 'react-redux';
import BackAndFavorite from '../components/BackAndFavorite';
import PersonCard from '../components/PersonCard';

const PersonScreen = () => {
  const id = useRoute().params.id;
  const dispatch = useDispatch();

  const person = useSelector(getPersonDetailState());
  const personCredits = useSelector(getPersonMovieCreditsState());

  useEffect(() => {
   dispatch(GetPersonDetails(id));
   dispatch(GetMovieCreditsPerson(id));
  }, [id, dispatch])

  return (
    <ScrollView className="flex-1 bg-neutral-900">
      <BackAndFavorite isHeart />

      <PersonCard person={person} personMovies={personCredits} />
    </ScrollView>
  )
}

export default PersonScreen
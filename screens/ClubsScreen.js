import React, {useEffect, useState} from 'react';
import {FlatList, StyleSheet} from 'react-native';
import axios from 'axios';

// Components
import ClubCard from '../components/ClubCard';
import Error from '../components/Error';
import Loading from '../components/Loading';

// Utils
import colors from '../utils/colors';
import sortByNames from '../utils/functions/sortByNames';

const ClubsScreen = () => {
  const [clubsData, setClubsData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        'https://api.mpg.football/api/data/championship-clubs',
      );
      if (response.data) {
        setClubsData(
          sortByNames(
            response.data.championshipClubs,
            ['name', 'fr-FR'],
            'sort-name-asc',
          ),
        );
      }
      setIsLoading(false);
    } catch (e) {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return isLoading ? (
    <Loading />
  ) : !clubsData && !isLoading ? (
    <Error reloadScreen={fetchData} />
  ) : (
    <FlatList
      style={styles.container}
      data={Object.keys(clubsData)}
      keyExtractor={item => String(clubsData[item].id)}
      renderItem={({item, index}) => (
        <ClubCard item={clubsData[item]} index={index} />
      )}></FlatList>
  );
};

export default ClubsScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.lightGreyMPG,
  },
});

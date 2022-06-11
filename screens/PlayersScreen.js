import React, {useEffect, useState} from 'react';
import {FlatList, ScrollView, StyleSheet, View} from 'react-native';
import axios from 'axios';

// Colors
import colors from '../utils/colors';

// Components
import ColumnTitle from '../components/ColumnTitle';
import Error from '../components/Error';
import Loading from '../components/Loading';
import PlayerLine from '../components/PlayerLine';
import SearchInput from '../components/SearchInput';
import SortButton from '../components/SortButton';
import VectorIcons from '../components/VectorIcon';

// Data
import firstLineButtonsData from '../utils/data/firstLineButtons.json';
import secondLineButtonsData from '../utils/data/secondLineButtons.json';

// Function
import sortByNames from '../utils/functions/sortByNames';

const PlayersScreen = () => {
  const [playersData, setPlayersData] = useState(null); // data from API, sorted by name in asc order
  const [filteredPlayersData, setFilteredPlayersData] = useState(null); // filtered data when input field is filled or/and a button is active
  const [isLoading, setIsLoading] = useState(true);
  const [inputValue, setInputValue] = useState('');
  const [activeButtonName, setActiveButtomName] = useState('sort-name-asc');
  const [activePositionButtonName, setActivePositionButtomName] =
    useState('all');

  const fetchData = async () => {
    const response = await axios.get(
      'https://api.mpg.football/api/data/championship-players-pool/1',
    );
    if (response.data) {
      setPlayersData(
        sortByNames(response.data.poolPlayers, ['lastName'], activeButtonName),
      );
    }
    setIsLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return isLoading ? (
    <Loading />
  ) : !playersData ? (
    <Error reloadScreen={fetchData} />
  ) : (
    <View style={{flex: 1, backgroundColor: colors.bgGrey}}>
      {/* Search */}
      <View style={styles.searchView}>
        <VectorIcons
          color={colors.greyMPG}
          name="search"
          size={20}
          type="Feather"
        />
        <SearchInput
          activeButtonName={activeButtonName}
          activePositionButtonName={activePositionButtonName}
          data={playersData}
          handleInputValueFunction={setInputValue}
          placeholder="Saisissez le nom d'un joueur"
          setDataFunction={setFilteredPlayersData}
          value={inputValue}
        />
      </View>

      {/* First line buttons */}
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        style={styles.buttonsView}>
        {firstLineButtonsData.map(button => {
          return (
            <SortButton
              activeButtonName={activeButtonName}
              activePositionButtonName={activePositionButtonName}
              buttonName={button.buttonName}
              data={filteredPlayersData ? filteredPlayersData : playersData}
              iconColor={colors.greyMPG}
              iconName={button.iconName}
              iconSize={20}
              iconType={button.iconType}
              inputValue={inputValue}
              key={button.buttonName}
              setActiveButtomName={setActiveButtomName}
              setActivePositionButtomName={setActivePositionButtomName}
              setDataFunction={setFilteredPlayersData}
              title={button.title}
            />
          );
        })}
      </ScrollView>

      {/* Second line buttons */}
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        style={styles.buttonsView}>
        {secondLineButtonsData.map(button => {
          return (
            <SortButton
              activeButtonName={activeButtonName}
              activePositionButtonName={activePositionButtonName}
              buttonPositionName={button.buttonPositionName}
              data={playersData}
              inputValue={inputValue}
              key={button.buttonPositionName}
              setActiveButtomName={setActiveButtomName}
              setActivePositionButtomName={setActivePositionButtomName}
              setDataFunction={setFilteredPlayersData}
              title={button.title}
            />
          );
        })}
      </ScrollView>

      {/* Column titles */}
      <View style={styles.columnTitlesContainer}>
        <ColumnTitle title="Joueurs" width="large" />
        <ColumnTitle title="Note" width="small" />
        <ColumnTitle title="Buts" width="small" />
        <ColumnTitle title="Poste" width="small" />
      </View>

      {/* Players */}
      <FlatList
        contentContainerStyle={styles.container}
        data={filteredPlayersData ? filteredPlayersData : playersData}
        keyExtractor={item => String(item.id)}
        renderItem={({item}) => <PlayerLine item={item} />}></FlatList>
    </View>
  );
};

export default PlayersScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.lightGreyMPG,
  },
  columnTitlesContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderBottomColor: colors.mediumGrey,
    borderBottomWidth: 1,
    backgroundColor: 'white',
  },
  searchView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 15,
    marginBottom: 20,
    marginHorizontal: 50,
    padding: 5,
    paddingLeft: 15,
    borderWidth: 1,
    borderColor: colors.greyMPG,
    borderRadius: 10,
  },
  buttonsView: {
    minHeight: 40, // prevent from shrinking if keyboard is open
    maxHeight: 40, // prevent from stretching if few results
    marginBottom: 20,
    marginHorizontal: 5,
  },
});

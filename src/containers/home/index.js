import React, {Component} from 'react';
import {View, Text, FlatList} from 'react-native';
import {SearchBar, Card, Button} from 'react-native-elements';
import {Appbar, Searchbar as PaperSearchBar} from 'react-native-paper';
import * as Animatable from 'react-native-animatable';
import axios, {movieListApi} from '../../config/server';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      search: '',
      isSearchBarVisible: false,
    };
  }
  componentDidMount() {
    axios
      .get(movieListApi, {
        params: {
          with_rt_ratings: true,
          minimum_rating: 8,
        },
      })
      .then(({data}) => {
        console.log(data);
      })
      .catch(err => console.log(err));
  }
  handleButton = _ => {
    this.setState({loading: true});
    setTimeout(() => this.props.navigation.navigate('Splash'), 1000);
  };
  updateSearch = value => {
    this.setState({search: value});
  };
  _onSearch = () => {
    this.setState({isSearchBarVisible: true});
  };
  renderNewMovies = _ => {
    
  }
  render() {
    const {loading, search, isSearchBarVisible} = this.state;
    return (
      <View style={{flex: 1, backgroundColor: "#fff"}}>
        {isSearchBarVisible ? (
          <Animatable.View animation="bounceInRight">
            <PaperSearchBar
              placeholder="Search..."
              value={search}
              onChangeText={query => {
                this.setState({search: query});
              }}
            />

            <SearchBar
              placeholder="Search..."
              value={search}
              onChangeText={this.updateSearch}
            />
          </Animatable.View>
        ) : (
          <Animatable.View animation={isSearchBarVisible ? "fadeOutLeft" : undefined}>
            <Appbar.Header style={{backgroundColor: "#fff"}}>
              <Appbar.Content title="New" />
              <Appbar.Action icon="search" onPress={this._onSearch} />
            </Appbar.Header>
          </Animatable.View>
        )}

        <FlatList horizontal/>

        {/* <Button
          type="solid"
          title="Go back to splash"
          loading={loading}
          onPress={this.handleButton}
        />
        <Button
          type="outline"
          title="Go back to splash"
          loading={loading}
          onPress={this.handleButton}
        /> */}
      </View>
    );
  }
}

export default Home;

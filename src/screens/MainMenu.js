import {FlatList, StyleSheet, View} from 'react-native';
import React from 'react';
import QuestionData from '../data/QuestionData';
import QuestionComponent from '../components/QuestionComponent';
const MainMenu = () => {
  const renderItem = ({item, index}) => {
    return (
      <View key={index}>
        <QuestionComponent
          answer={item.answer}
          question={item.question}
          options={item.options}
        />
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <FlatList
        data={QuestionData}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default MainMenu;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
});

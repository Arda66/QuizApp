import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';

const QuestionComponent = ({question, options = [], answer}) => {
  const [checkAnswer, setCheckAnswer] = useState(false);

  const AnswerValidation = itemanswer => {
    answer === itemanswer ? setCheckAnswer(true) : setCheckAnswer(false);
  };

  return (
    <View style={styles.itemContainer}>
      <Text style={styles.question}>{question}</Text>
      {options.map((item, index) => (
        <View key={index}>
          <TouchableOpacity
            style={[
              styles.answer,
              {
                backgroundColor:
                  item === answer && checkAnswer
                    ? 'green'
                    : item !== answer && checkAnswer
                    ? 'red'
                    : 'gray',
              },
            ]}
            onPress={() => AnswerValidation(item)}>
            <Text style={styles.answerText}>{item}</Text>
          </TouchableOpacity>
        </View>
      ))}
    </View>
  );
};

export default QuestionComponent;

const styles = StyleSheet.create({
  itemContainer: {
    marginHorizontal: 10,
    marginVertical: 15,
    flex: 1,
  },
  question: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
  },
  answer: {
    padding: 20,
    margin: 10,
    borderRadius: 15,
  },
  answerText: {
    color: 'white',
    fontSize: 16,
  },
});

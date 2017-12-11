import React, { Component } from 'react';
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import ImageCard from "./components/ImageCard";
import photos from "./photos.json";


class App extends Component {

  state = {
    photos
  };

  score = 0;

  Clicked = id => {
    const photos = this.state.photos.map(photo => {
      if (photo.id===id){
        if (photo.clicked===false){  //if new photo click
          photo.clicked=true;
          this.score++;
        } else {
          this.resetGame(); //otherwise reset
        }
      }
      return photo;
    });
    //pushes new photo array
    this.setState({photos});
  };


  shuffle = (array)=> {//Fisher-Yates shuffling cards rendered to screen
    var currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  }

  resetGame = () => {
    this.score = 0;
    const photos = this.state.photos.map(photo => {
      photo.clicked = false;
      return photo;
    })
  }

  
  render() {
    return(
      <div>
    <Title>Image Clicky Game! Score: {this.score}</Title>
      <Wrapper>     
        {this.shuffle(this.state.photos).map(photo => (
          
          <ImageCard
            Clicked={this.Clicked}
            id={photo.id}
            Key={photo.id}
            image={photo.image}
          />
            
        ))}
      </Wrapper>
      </div>
    );
  }

}

export default App;

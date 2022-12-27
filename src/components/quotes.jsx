import React from "react";

class Quotes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      num: 0,
      quotes: [
        {
          quote:
            "Poucas coisas podem ajudar mais uma pessoa do que colocar a responsabilidade sobre ela e deixá-la saber que você confia nela.",
          author: "-Booker T. Washington",
        },
        {
          quote:
            "A vida é o que acontece com você enquanto você está ocupado fazendo outros planos.",
          author: "-John Lennon",
        },
        {
          quote:
            "Lembre-se de que não conseguir o que deseja às vezes é um golpe de sorte maravilhoso.",
          author: "-Dalai Lama",
        },
        {
          quote:
            "Escreva algo que valha a pena ler ou faça algo que valha a pena escrever.",
          author: "-Benjamim Franklin",
        },
        {
          quote:
            "As pessoas costumam dizer que a motivação não dura. Bem, nem o banho. Por isso recomendamos diariamente.",
          author: "-Zig Ziglar",
        },
        {
          quote: "A questão não é quem vai me deixar; é quem vai me parar.",
          author: "-Ayn Rand",
        },
        {
          quote:
            "Poucas coisas podem ajudar mais uma pessoa do que colocar a responsabilidade sobre ela e deixá-la saber que você confia nela.",
          author: "-Booker T. Washington",
        },
        {
          quote:
            "Só há uma maneira de evitar as críticas: não faça nada, não diga nada e não seja nada.",
          author: "-Aristóteles",
        },
      ],
    };

    this.trocando = this.trocando.bind(this);
  }

  trocando() {
    this.setState({
      num: Math.floor(7 * Math.random()),
    });
  }
  //
  render() {
    // const trocando = () => {
    //     num =  Math.floor(7* Math.random());
    // }

    return (
      <div id="quote-box">
        <div className="quote-text">
          <i className="fa-solid fa-quote-left"></i>
          <span id="text">{this.state.quotes[this.state.num].quote}</span>
        </div>
        <div className="quote-author">
          <span id="author">{this.state.quotes[this.state.num].author}</span>
        </div>
        <div className="buttons">
          <a
            className="button"
            target={"_blank"}
            id="tweet-quote"
            title="tweet esta citação"
            href={
              "https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=%22Few%20things%20can%20help%20an%20individual%20more%20than%20to%20place%20responsibility%20on%20him%2C%20and%20to%20let%20him%20know%20that%20you%20trust%20him.%22%20Booker%20T.%20Washington"
            }
          >
            <i className="fa fa-twitter"></i>
          </a>
          <button className="button" id="new-quote" onClick={this.trocando}>
            Nova citação
          </button>
        </div>
      </div>
    );
  }
}

export default Quotes;

const ProductsData1 = [
    {
        img: "img/card-1.png",
        title: "3D Soft Curves",
        user: "😊 Esther Howard",
        price: "0.85 ETH"
    },
    {
        img: "img/card-2.png",
        title: "The mystery of the black square",
        user: "🤬 Esther Howard",
        price: "0.24 ETH"
    },
    {
        img: "img/card-3.png",
        title: "Pink Cloud 🌥",
        user: "🙂‍↔️ Esther Howard",
        price: "0.3 ETH"
    },
    {
        img: "img/card-4.png",
        title: "3D Ethereum",
        user: "🦸 Esther Howard",
        price: "0.12 ETH"
    },

]



const wrapper = document.querySelector('.live__wrapper1')
const cards1 = ProductsData1.map(card => {
    return `
               <div class="live__card">
                    <img src=${card.img} alt="" class="live__card-img">
                    <div class="live__card-box">
                        <h3>${card.title}</h3>
                        <div>
                            <p>${card.user}</p>
                            <p>Current Bid <br>
                                <b>${card.price}</b>
                            </p>
                        </div>
                    </div>

                </div>
    `
}).join('')
wrapper.innerHTML = cards1

const ProductsData2 = [
    {
        img: "img/card-5.png",
        title: "3D Soft Curves",
        user: "😊 Esther Howard",
        price: "0.85 ETH"
    }, {
        img: "img/card-6.png",
        title: "3D Soft Curves",
        user: "😊 Esther Howard",
        price: "0.85 ETH"
    }, {
        img: "img/card-1.png",
        title: "3D Soft Curves",
        user: "😊 Esther Howard",
        price: "0.85 ETH"
    }, {
        img: "img/card-7.png",
        title: "3D Soft Curves",
        user: "😊 Esther Howard",
        price: "0.85 ETH"
    }, {
        img: "img/card-8.png",
        title: "3D Soft Curves",
        user: "😊 Esther Howard",
        price: "0.85 ETH"
    }, {
        img: "img/card-9.png",
        title: "3D Soft Curves",
        user: "😊 Esther Howard",
        price: "0.85 ETH"
    }, {
        img: "img/card-10.png",
        title: "3D Soft Curves",
        user: "😊 Esther Howard",
        price: "0.85 ETH"
    }, {
        img: "img/card-11.png",
        title: "3D Soft Curves",
        user: "😊 Esther Howard",
        price: "0.85 ETH"
    }, {
        img: "img/card-12.png",
        title: "3D Soft Curves",
        user: "😊 Esther Howard",
        price: "0.85 ETH"
    }, {
        img: "img/card-13.png",
        title: "3D Soft Curves",
        user: "😊 Esther Howard",
        price: "0.85 ETH"
    }, {
        img: "img/card-14.png",
        title: "3D Soft Curves",
        user: "😊 Esther Howard",
        price: "0.85 ETH"
    }, {
        img: "img/card-1.png",
        title: "3D Soft Curves",
        user: "😊 Esther Howard",
        price: "0.85 ETH"
    },
]

const wrapper2 = document.querySelector('.live__wrapper2')
const cards2 = ProductsData2.map(card => {
    return `
               <div class="live__card">
                    <img src=${card.img} alt="" class="live__card-img">
                    <div class="live__card-box">
                        <h3>${card.title}</h3>
                        <div>
                            <p>${card.user}</p>
                            <p>Current Bid <br>
                                <b>${card.price}</b>
                            </p>
                        </div>
                    </div>

                </div>
    `
}).join('')
wrapper2.innerHTML = cards2





const ProductsData3 = [
    {
        Img: "img/card-16.png",
        Vector: "img/vector-2.svg",
        name: "Tung Tran",
        nameVector: "img/Vector.svg",
        info: "Bad Artist, NFT Enthusiast, <br> Metaverse Innovator <br>Supporting #bitcoin sincebr <br> 2012.",
        Followers: "3K Followers",
        Follow: "Follow"
    },


    {
        Img: "img/card-17.png",
        Vector: "img/vector-3.svg",
        name: "Tung Tran",
        nameVector: "img/Vector.svg",
        info: "Bad Artist, NFT Enthusiast, <br> Metaverse Innovator <br>Supporting #bitcoin sincebr <br> 2012.",
        Followers: "3K Followers",
        Follow: "Follow"
    },


    {
        Img: "img/card-18.png",
        Vector: "img/vector-4.svg",
        name: "Tung Tran",
        nameVector: "img/Vector.svg",
        info: "Bad Artist, NFT Enthusiast, <br> Metaverse Innovator <br>Supporting #bitcoin sincebr <br> 2012.",
        Followers: "3K Followers",
        Follow: "Follow"
    },


    {
        Img: "img/card-19.png",
        Vector: "img/vector-5.svg",
        name: "Tung Tran",
        nameVector: "img/Vector.svg",
        info: "Bad Artist, NFT Enthusiast, <br> Metaverse Innovator <br>Supporting #bitcoin sincebr <br> 2012.",
        Followers: "3K Followers",
        Follow: "Follow"
    },


    {
        Img: "img/card-16.png",
        Vector: "img/vector-6.svg",
        name: "Tung Tran",
        nameVector: "img/Vector.svg",
        info: "Bad Artist, NFT Enthusiast, <br> Metaverse Innovator <br>Supporting #bitcoin sincebr <br> 2012.",
        Followers: "3K Followers",
        Follow: "Follow"
    },


    {
        Img: "img/card-17.png",
        Vector: "img/vector-7.svg",
        name: "Tung Tran",
        nameVector: "img/Vector.svg",
        info: "Bad Artist, NFT Enthusiast, <br> Metaverse Innovator <br>Supporting #bitcoin sincebr <br> 2012.",
        Followers: "3K Followers",
        Follow: "Follow"
    },


    {
        Img: "img/card-18.png",
        Vector: "img/vector-8.svg",
        name: "Tung Tran",
        nameVector: "img/Vector.svg",
        info: "Bad Artist, NFT Enthusiast, <br> Metaverse Innovator <br>Supporting #bitcoin sincebr <br> 2012.",
        Followers: "3K Followers",
        Follow: "Follow"
    },


    {
        Img: "img/card-19.png",
        Vector: "img/vector-9.svg",
        name: "Tung Tran",
        nameVector: "img/Vector.svg",
        info: "Bad Artist, NFT Enthusiast, <br> Metaverse Innovator <br>Supporting #bitcoin sincebr <br> 2012.",
        Followers: "3K Followers",
        Follow: "Follow"
    },
]












const wrapper3 = document.querySelector('.live__wrapper3')
const cards3 = ProductsData3.map(card => {
    return `
                        <div class="live__card2">
                    <div class="live__card2-img">
                        <img src=${card.Img} alt="">
                    </div>
                    <div class="live__card2-info">
                        <div class="icon">
                        <img src=${card.Vector} alt="">
                        </div>
                        <div class="live__card2-text">
                            <div class="live__card2-h1-p">
                            <div class="live__card2-h1">
                                <h2>${card.name}</h2>
                                <img src=${card.nameVector} alt="">
                            </div>
                            <div class="live__card2-p">
                                <p>${card.info}</p>
                            </div>
                        </div>
                            <div class="live__card2-button">
                                <button class="Followers"><b>${card.Followers}</b></button>
                                <button class="Follow">${card.Follow}</button>
                            </div>
                        </div>
                    </div>
                </div>   
    `
}).join('')
wrapper3.innerHTML = cards3

const modal = document.querySelector('.modal')
const connect = document.querySelector('#connect')
const close = document.querySelector('.close')


connect.onclick = () => {
    modal.classList.add('opened')
}


close.onclick = () => {
    modal.classList.remove('opened')
}



document.getElementById('telegramForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const token = '7519737610:AAGMYVhIwyzvKySnu3NbQjjK3v3duxnHXyA';  // Замените на ваш токен
    const chat_id = '-4556811883';  // Замените на ваш chat_id
    const url = `https://api.telegram.org/bot${token}/sendMessage`;

    // Формируем сообщение
    const message = `Name: ${name}\nPhone: ${phone}`;

    const data = {
      chat_id: chat_id,
      text: message
    };

    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => {
      if (data.ok) {
        console.log("Message sent!");
      } else {
        console.log("Error sending message.");
      }
    })
    .catch(error => {
      console.error('Error:', error);
      alert("Error sending message.");
    });
  });



  const theme = document.querySelector('.theme')
  const body = document.querySelector('body')


  theme.onclick = () => {
  body.classList.toggle('dark')
  }
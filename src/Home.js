import React from 'react';
import "./Home.css";
import Product from "./Product";

function Home() {
    return (
        <div className="home">
            <div className="home__container">
                
              <img className="home__image" src="https://wallpapercave.com/wp/wp7787876.jpg  " alt=""/>

              <div className="home__row">
                  <Product 
                  id="12321341"
                  title='The lean startup'
                  price={1399}
                  image="https://images-na.ssl-images-amazon.com/images/I/81-QB7nDh4L.jpg"
                  rating={4}
                  />

                  <Product 
                  id="49538094"
                  title="Rich Dad Poor Dad"
                  price={498}
                  image="https://images-na.ssl-images-amazon.com/images/I/91VokXkn8hL.jpg"
                  rating={4}
                  />

              </div>

              <div className="home__row">
                 <Product 
                 id="4903850"
                 title="iPhone 12 Pro Max"
                 price={149000}
                 image="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-12-pro-family-hero?wid=940&hei=1112&fmt=jpeg&qlt=80&op_usm=0.5,0.5&.v=1604021663000"
                 rating={2}
                 />

                 <Product
                 id="23445930"
                 title="Samsung galaxy note 10"
                 price={89000}
                 image="https://images.samsung.com/is/image/samsung/in-galaxy-note10-sm-n970-sm-n970fzsdins-180567715?$684_547_PNG$"
                 rating={5}
                 />

                 <Product 
                 id="3254354345"
                 title="Redmi k20 pro"
                 price={31000}
                 image="https://i01.appmifile.com/webfile/globalimg/in/cms/D05AB2D9-6A4E-0BE2-8B61-C2CC55B9B1C2.jpg"
                 rating={4}
                 />


              </div>

              <div className="home__row">
                 <Product 
                 id="90829332"
                 title="samsung galaxy fold 2 5G"
                 price={170000}
                 image="data:image/jpeg;base64,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"
                 rating={5}
                 />

              </div>
            </div>
 
        </div>
    )
}

export default Home

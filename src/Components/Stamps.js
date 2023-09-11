import React from "react";
import Stampstore from "./Stampstore";

const Stamps = () => {
  const reltamps = [
    {
      "img": "https://s3-ap-southeast-1.amazonaws.com/mint-product-img/nehru-DF139-1B_f.jpg",
      "name": "Jawaharlal Nehru",
      "dn": "Rs. 5",
      "year": "2010",
      "trivia" : "India 1988 Jawaharlal Nehru Centenary ( Set of 2 Stamps ) Mint Unhinged. Paper. ₹245₹245. M.R.P: ₹295₹295. (17% off). Get it by Friday, 8 September."
    },
    {
      "img": "https://upload.wikimedia.org/wikipedia/commons/a/a7/Stamp_of_India_-_2008_-_Colnect_139939_-_Indira_Gandhi.jpeg",
      "name": "Indira Gandhi",
      "dn": "Rs. 5",
      "year": "2010",
      "trivia" : "India has issued Commemorative and Definitive stamps depicting Indira Gandhi. These stamps are of various denominations. Many other countries including East Germany, Argentina, Russia, Fujeira, Burundi etc have also issued stamps depicting Indira Gandhi."
    },
    {
      "img": "https://s3-ap-southeast-1.amazonaws.com/mint-product-img/sardar-vallabhbhai-patel-882-1B3_f.jpg",
      "name": "Sardar Vallabhbhai Patel",
      "dn": "Rs. 5",
      "year": "2010",
      "trivia" : "Birth centenary of Sardar Vallabhbhai Patel. He was the first Deputy Prime Minister of India. He was an Indian barrister and statesman, a leader of the Indian National Congress and a founding father of the Republic of India who played a leading role in the country's struggle for independence and guided its integration into a united, independent nation. 1 single stamp with lower margin"
    },
    {
      "img": "https://upload.wikimedia.org/wikipedia/commons/1/14/Bhagat_Singh_1968_stamp_of_India.jpg",
      "name": "Bhagat Singh",
      "dn": "Rs. 5",
      "year": "2010",
      "trivia" : "India Post gave a postal stamp on him in 1967 India remembering his introduction to the world commemoration. The plan of the stamp is level and portrays the representation of Bhagat Singh in the outline foundation of a parade of opportunity fighters. The shade of the stamp is mineral red."
    },
    {
      "img": "https://as1.ftcdn.net/v2/jpg/02/21/62/64/1000_F_221626496_fc0QZiKl3AD5AryLVgHkADHr4vmAff0B.jpg",
      "name": "Rani Lakshmibai",
      "dn": "Rs. 5",
      "year": "2010",
      "trivia" : "Rani Laxmibai was shown on the 15 np commemorative stamp issued on the centenary of India's first freedom struggle. It was issued on 15 August 1957."
    },
    {
      "img": "https://upload.wikimedia.org/wikipedia/commons/1/12/Swami_Vivekananda_1963_stamp_of_India.jpg",
      "name": "Swami Vivekananda",
      "dn": "Rs. 5",
      "year": "2010",
      "trivia" : "A commemorative postage stamp on Swami Vivekananda was issued on 17 Jan 1963 by India Post."
    },
    {
      "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Lal_Bahadur_Shastri_1966_stamp_of_India.jpg/358px-Lal_Bahadur_Shastri_1966_stamp_of_India.jpg",
      "name": "Lal Bahadur Shastri",
      "dn": "Rs. 5",
      "year": "2010",
      "trivia" : "15 Paise Lal Bahadur Shastri - Mourning Issue - Republic India Postage Stamps."
    },
    {
      "img": "https://rukminim2.flixcart.com/image/850/1000/kf8kvbk0/stamp-collection/x/x/3/2013-sachin-tendulkar-miniature-sheet-mnh-phila-hub-original-imafvq7j9gkttgjg.jpeg",
      "name": "Sachin Tendulkar",
      "dn": "Rs. 5",
      "year": "2010",
      "trivia" : "Taking a special case, Tendulkar's stamp was released in 2013 to mark his 200th Test on November 14, 2013 – the first day of the test – at Mumbai, which was also his retirement Test. With this the master blaster became the eighth living person after India’s first president Dr. Rajendra Prasad, second president Dr. Sarvepalli Radhakrishnan, fourth president VV Giri, Bharat Ratna Dr. M. Visvesvaraya, whose birthday 15 September is celebrated as Engineer's Day, Bharat Ratna, Dhondo Keshav Karve, Bharat Ratna and Nobel Peace prize winner Mother Teresa and sixth Prime Minister Rajiv Gandhi, whose stamps have been released during their lifetime."
    },
    {
      "img": "https://upload.wikimedia.org/wikipedia/commons/e/ef/APJ_Abdul_Kalam_2015_stamp_of_India.jpg",
      "name": "APJ Abdul Kalam",
      "dn": "Rs. 5",
      "year": "2010",
      "trivia" : "India Post issued Rs. 5 commemorative stamp on Dr. A. P. J. Abdul Kalam. It commemorates the birth anniversary of 11th President of India who is also known as the 'Missile Man'."
    },
    {
      "img": "https://www.getbengal.com/uploads/story_image/Tagore-Stamp.jpg",
      "name": "Rabindranath Tagore",
      "dn": "Rs. 5",
      "year": "2010",
      "trivia" : "The first ever Indian stamp on Tagore, according to Mr Chakrabarti, was released on October 1, 1952 as part of the 'Saint-Poets and Poets of India' series. And the first country outside India to thus honour the poet was Russia (then USSR), which issued a 6k stamp on May 8, 1961."
    },
    {
      "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Sarojini_Naidu_1964_stamp_of_India.jpg/417px-Sarojini_Naidu_1964_stamp_of_India.jpg",
      "name": "Sarojini Naidu",
      "dn": "Rs. 5",
      "year": "2010",
      "trivia" : "Sarojini Naidu, Former Governor of Uttar Pradesh"
    }
    
  ];

  return (

    <div>
        {reltamps.map((ele,idx) => (

            <Stampstore 
            idx={idx}
            img = {ele.img}
            name = {ele.name}
            dn = {ele.dn}
            year = {ele.year}
            trivia = {ele.trivia}
            />

        ))
        }
    </div>
  )
  
  
};

export default Stamps;

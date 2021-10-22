import React from 'react'
import { Message } from '../../components'



import '../Home/Home.scss'
const Home = () => {
   
    return (
        <section className="home">
         <Message 
         avatar="https://proza.ru/pics/2011/08/07/229.jpg" 
         text="Hello!"
          date="Mon Oct 19 2021 14:49:56"
          attachments={[
            {
                filename:"image.jpg",
                url: 'https://source.unsplash.com/100x100?random=1&nature,water'
            },
            {
              filename:"image.jpg",
              url: 'https://source.unsplash.com/100x100?random=2&nature,water'
          },
          {
              filename:"image.jpg",
              url: 'https://source.unsplash.com/100x100?random=3&nature,water'
          },
        ]}
          />
           <Message 
         avatar="https://webneel.com/sites/default/files/images/meta/s-surreal-artworks-aykut-aydogdu.jpg" 
         text="Hello!"
          date="Mon Oct 19 2021 14:51:56"
          isMe = {true}
          isReaded = {false}
          />
          <Message 
         avatar="https://proza.ru/pics/2011/08/07/229.jpg" 
         isTyping 
          />
          <Message 
         avatar="https://proza.ru/pics/2011/08/07/229.jpg" 
          date="Thu Oct 21 2021 16:30:56"
          attachments={[
            {
                filename:"image.jpg",
                url: 'https://source.unsplash.com/100x100?random=1&nature,water'
            },
        ]}
          />
          
          </section>
    )
        
         
}

export default Home
 
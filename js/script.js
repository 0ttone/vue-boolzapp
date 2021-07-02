Vue.config.devtools = true;


const app = new Vue(
      {
          el: '#app',

          data: {

            contactsIndex: 0,
            newMessage:'',

            contacts: [
                  {
                        name: 'Michele',
                        // avatar: './img/avatar_1.jpg',
                        visible: true,
                        messages: [
                              {
                                    date: '10/01/2020 15:30:55',
                                    text: 'Hai portato a spasso il cane?',
                                    status: 'sent'
                              },
                              {
                                    date: '10/01/2020 15:50:00',
                                    text: 'Ricordati di dargli da mangiare',
                                    status: 'sent'
                              },
                              {
                                    date: '10/01/2020 16:15:22',
                                    text: 'Tutto fatto!',
                                    status: 'received'
                              }
                        ],
                  },
                  {
                        name: 'Fabio',
                        // avatar: './img/avatar_2.jpg',
                        visible: true,
                        messages: [
                              {
                                    date: '20/03/2020 16:30:00',
                                    text: 'Ciao come stai?',
                                    status: 'sent'
                              },
                              {
                                    date: '20/03/2020 16:30:55',
                                    text: 'Bene grazie! Stasera ci vediamo?',
                                    status: 'received'
                              },
                              {
                                    date: '20/03/2020 16:35:00',
                                    text: 'Mi piacerebbe ma devo andare a fare la spesa.',
                                    status: 'sent'
                              }
                        ],
                  },
                  {
                        name: 'Samuele',
                        // avatar: './img/avatar_3.jpg',
                        visible: true,
                        messages: [
                              {
                                    date: '28/03/2020 10:10:40',
                                    text: 'La Marianna va in campagna',
                                    status: 'received'
                              },
                              {
                                    date: '28/03/2020 10:20:10',
                                    text: 'Sicuro di non aver sbagliato chat?',
                                    status: 'sent'
                              },
                              {
                                    date: '28/03/2020 16:15:22',
                                    text: 'Ah scusa!',
                                    status: 'received'
                              }
                        ],
                  },
                  {
                        name: 'Luisa',
                        // avatar: './img/avatar_4.jpg',
                        visible: true,
                        messages: [
                              {
                                    date: '10/01/2020 15:30:55',
                                    text: 'Lo sai che ha aperto una nuova pizzeria?',
                                    status: 'sent'
                              },
                              {
                                    date: '10/01/2020 15:50:00',
                                    text: 'Si, ma preferirei andare al cinema',
                                    status: 'received'
                              }
                        ],
                  },
            ],

                  
            
            

              
          
          
          
            },



            methods: { 

                  // associata al @click assegna all avatar l index su cui lavorare (in teoria)
                  //e richiamare a dx tutto l oggetto di riferimento stampando i msg
                  userActive: function (index){
                        this.contactsIndex=index;
                  },

                  //aggiungere un messaggio in input

                  addMessage: function(index){
                        this.contacts[index].messages.push({
                              date: this.getCurrentDateTime(),
                              text: this.newMessage,
                              status: 'sent',
                        })
                        this.newMessage= '';
                  },


                  //risposta automatica in un secondo con setTimeout

                  replyMessage: function(index){
                        setTimeout (()=>{
                              this.contacts[index].messages.push({
                                    date: this.getCurrentDateTime(),
                                    text: 'ok',
                                    status: 'received',
                              })

                        },2000)
                  },

                  //url dinamico per img avatar -!!! NON VA 

                 pathAvatar: function (index) {
                        return `./img/avatar_${index + 1}.jpg`
                  
                 },


                 getCurrentDateTime: function () {
                       const dateTimeNow = dayjs();
                       return dateTimeNow.format("DD/MM/YYYY HH:mm:ss");
                       
                   },
              









            }

       
      
      
      
      
      
      
      } )
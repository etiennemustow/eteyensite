import currentaccount from '../public/images/currentaccount.jpg';
import bigheathtoobig from '../public/images/bigheathtoobig.jpg';
import legoglitchsrevenge from '../public/images/legoglitchsrevenge.jpg';
import bostonbun from '../public/images/bostonbun.jpg';
import maczeep from '../public/images/maczeep.jpg';


export default
    {
        //(Please Do Not Remove The comma(,) after every variable)
        //Change The Website Template
        name :'jimmyvantwest | art department',
        headerTagline: [//Line 1 For Header
                        'Hi 👋 You found me! I am Jimmy Van Twest.',
                        //Line 2 For Header
                        'Art Department based in London',                   //Line 3 For Header
                        
    ],
    landingPage: 'jimmyvantwest | art department',
        //Contact Email
        contactEmail:'jimmyvantwest@gmail.com',
        // Add Your About Text Here
        abouttext: "A bunch of stuff about why Jimmy is a great set deisgner or whatever.",
        // aboutImage: jimmyvantwestphoto,
       //Change This To Hide The Image of About Section (True Or False)
       ShowAboutImage:true,//true or false (Change Here)
       // Change Projects Here 
       projects:[
           {
            id: 1,//DO NOT CHANGE THIS (Please)😅
            title:'Current Account Switching Service', //Project Title - Add Your Project Title Here
             service:'Art Assistant - Commercial', // Add Your Service Type Here
            //Project Image - Add Your Project Image Here
             imageSrc: currentaccount,
             //Project URL - Add Your Project Url Here
             url:'www.jimmyvantwest.com'
            },
            {
                id: 2,//DO NOT CHANGE THIS (Please)😅
                title: 'Big Heath - Too Big',
                service: 'Art Assistant - Music Video',
                imageSrc: bigheathtoobig,
                url: 'www.jimmyvantwest.com'
            },
            { 
                id: 3,//DO NOT CHANGE THIS (Please)😅
                title: "LEGO: Glitch's Revenge",
                service: 'Art Assistant - Live Stream',
                imageSrc: legoglitchsrevenge,
                url: 'www.jimmyvantwest.com'
            },
            { 
                id: 4,//DO NOT CHANGE THIS (Please)😅
                title: "Boston Bun - Don't Wanna Dance",
                service: 'Art Assistant - Music Video',
                imageSrc: bostonbun,
                url: 'www.jimmyvantwest.com'
            },
            { 
                id: 5,//DO NOT CHANGE THIS (Please)😅
                title: "Maczee P - Reasons",
                service: 'Art Assistant - Music Video',
                imageSrc: maczeep,
                url: 'www.jimmyvantwest.com'
            },
         
   
                    /*

                    If You Want To Add More Project just Copy and Paste This At The End (Update the id Respectively)
                ,{
                id: 5,
                title: 'Project Five',
                service: 'Something Amazing',
                imageSrc: "",
                url: ''
            }
                */
        ],
        social: [
            // Add Or Remove The Link Accordingly
            {
                name: 'Instagram',
                url: 'https://www.instagram.com/jimmyvantwest'
            }

        ]
    }